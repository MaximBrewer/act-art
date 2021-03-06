<?php

namespace App\Http\Controllers\Voyager\ContentTypes;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Constraint;
use Intervention\Image\Facades\Image as InterventionImage;

class Image extends \TCG\Voyager\Http\Controllers\ContentTypes\BaseType
{
    public function handle()
    {
        if ($this->request->hasFile($this->row->field)) {
            $file = $this->request->file($this->row->field);

            $path = $this->slug . DIRECTORY_SEPARATOR . date('FY') . DIRECTORY_SEPARATOR;

            $filename = $this->generateFileName($file, $path, $path);

            if (isset($this->options->jpeg) && $this->options->jpeg && !$this->is_animated_gif($file)) {
                $ext = 'jpg';
            } else {
                $ext = $file->getClientOriginalExtension();
            }
            $image = InterventionImage::make($file)->orientate();

            $fullPath = $path . $filename . '.' . $ext;

            $resize_width = null;
            $resize_height = null;
            if (isset($this->options->resize) && (isset($this->options->resize->width) || isset($this->options->resize->height))) {
                if (isset($this->options->resize->width)) {
                    $resize_width = $this->options->resize->width;
                }
                if (isset($this->options->resize->height)) {
                    $resize_height = $this->options->resize->height;
                }
            } else {
                $resize_width = $image->width();
                $resize_height = $image->height();
            }

            $resize_quality = isset($this->options->quality) ? intval($this->options->quality) : 100;

            $image = $image->resize(
                $resize_width,
                $resize_height,
                function (Constraint $constraint) {
                    $constraint->aspectRatio();
                    if (isset($this->options->upsize) && !$this->options->upsize) {
                        $constraint->upsize();
                    }
                }
            )->encode($ext, $resize_quality);

            if ($this->is_animated_gif($file)) {
                Storage::disk(config('voyager.storage.disk'))->put($fullPath, file_get_contents($file), 'public');
                $fullPathStatic = $path . $filename . '-static.' . $ext;
                Storage::disk(config('voyager.storage.disk'))->put($fullPathStatic, (string) $image, 'public');
            } else {
                Storage::disk(config('voyager.storage.disk'))->put($fullPath, (string) $image, 'public');
            }

            $exec = [];
            if ($ext == 'jpg')
                $exec[] = 'jpegoptim --strip-all --all-progressive -ptm100 ' . storage_path('app/public/' . $fullPath);

            if (isset($this->options->thumbnails)) {
                foreach ($this->options->thumbnails as $thumbnails) {
                    if (isset($thumbnails->name) && isset($thumbnails->scale)) {
                        $scale = intval($thumbnails->scale) / 100;
                        $thumb_resize_width = $resize_width;
                        $thumb_resize_height = $resize_height;

                        if ($thumb_resize_width != null && $thumb_resize_width != 'null') {
                            $thumb_resize_width = intval($thumb_resize_width * $scale);
                        }

                        if ($thumb_resize_height != null && $thumb_resize_height != 'null') {
                            $thumb_resize_height = intval($thumb_resize_height * $scale);
                        }

                        $image = InterventionImage::make($file)
                            ->orientate()
                            ->resize(
                                $thumb_resize_width,
                                $thumb_resize_height,
                                function (Constraint $constraint) {
                                    $constraint->aspectRatio();
                                    if (isset($this->options->upsize) && !$this->options->upsize) {
                                        $constraint->upsize();
                                    }
                                }
                            )->encode($ext, $resize_quality);
                    } elseif (isset($thumbnails->crop->width) && isset($thumbnails->crop->height)) {
                        $crop_width = $thumbnails->crop->width;
                        $crop_height = $thumbnails->crop->height;
                        $image = InterventionImage::make($file)
                            ->orientate()
                            ->fit($crop_width, $crop_height)
                            ->encode($ext, $resize_quality);
                    } elseif (isset($thumbnails->resize->width) || isset($thumbnails->resize->height)) {
                        $thumb_resize_width = null;
                        $thumb_resize_height = null;
                        if (intval($thumbnails->resize->width)) {
                            $thumb_resize_width = $thumbnails->resize->width;
                        }
                        if (intval($thumbnails->resize->height)) {
                            $thumb_resize_height = $thumbnails->resize->height;
                        }
                        
                        $resize_quality = isset($thumbnails->quality) ? intval($thumbnails->quality) : 100;

                        $image = $image->resize(
                            $thumb_resize_width,
                            $thumb_resize_height,
                            function (Constraint $constraint) {
                                $constraint->aspectRatio();
                                if (isset($this->options->upsize) && !$this->options->upsize) {
                                    $constraint->upsize();
                                }
                            }
                        )->encode($ext, $resize_quality);
                    }
                    Storage::disk(config('voyager.storage.disk'))->put(
                        $path . $filename . '-' . $thumbnails->name . '.' . $ext,
                        (string) $image,
                        'public'
                    );
                    if ($ext == 'jpg')
                        $exec[] = 'jpegoptim --strip-all --all-progressive -ptm85 ' . storage_path('app/public/' . $path . $filename . '-' . $thumbnails->name . '.' . $ext);
                }
            }

            foreach ($exec as $cmd) exec($cmd);

            return $fullPath;
        }
    }

    /**
     * @param \Illuminate\Http\UploadedFile $file
     * @param $path
     *
     * @return string
     */
    protected function generateFileName($file, $path, $ext)
    {
        if (isset($this->options->preserveFileUploadName) && $this->options->preserveFileUploadName) {
            $filename = basename($file->getClientOriginalName(), '.' . $ext);
            $filename_counter = 1;

            // Make sure the filename does not exist, if it does make sure to add a number to the end 1, 2, 3, etc...
            while (Storage::disk(config('voyager.storage.disk'))->exists($path . $filename . '.' . $ext)) {
                $filename = basename($file->getClientOriginalName(), '.' . $ext) . (string) ($filename_counter++);
            }
        } else {
            $filename = Str::random(20);

            // Make sure the filename does not exist, if it does, just regenerate
            while (Storage::disk(config('voyager.storage.disk'))->exists($path . $filename . '.' . $ext)) {
                $filename = Str::random(20);
            }
        }

        return $filename;
    }

    private function is_animated_gif($filename)
    {
        $raw = file_get_contents($filename);

        $offset = 0;
        $frames = 0;
        while ($frames < 2) {
            $where1 = strpos($raw, "\x00\x21\xF9\x04", $offset);
            if ($where1 === false) {
                break;
            } else {
                $offset = $where1 + 1;
                $where2 = strpos($raw, "\x00\x2C", $offset);
                if ($where2 === false) {
                    break;
                } else {
                    if ($where1 + 8 == $where2) {
                        $frames++;
                    }
                    $offset = $where2 + 1;
                }
            }
        }

        return $frames > 1;
    }
}
