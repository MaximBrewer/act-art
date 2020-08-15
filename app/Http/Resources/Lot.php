<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use TCG\Voyager\Facades\Voyager;

class Lot extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        if ($this) {
            $dir = storage_path("app/public/");
            $size = getimagesize($dir . $this->photo);
            return [
                'id' => $this->id,
                'title' => $this->getTranslatedAttribute('title'),
                'thumbnail' => Voyager::image($this->thumbnail('preview', 'photo')),
                'size' => $size[0] / $size[1] > 1 ? 2 : 1,
                'width' => $this->width,
                'height' => $this->height,
                'materials' => $this->materials,
                'frames' => $this->frames,
                'techniques' => $this->techniques,
                'styles' => $this->styles,
                'author' => trim($this->user->name . " " . $this->user->surname),
                'pxwidth' => $size[0],
                'pxheight' => $size[1],
                'price' => $this->price
            ];
        }
    }
}
