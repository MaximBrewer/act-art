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
                'width' => $size[0],
                'height' => $size[1],
                'props' => '1,2',
            ];
        }
    }
}
