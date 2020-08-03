<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use TCG\Voyager\Facades\Voyager;

class Post extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $dir = storage_path("app/public/");
        $size = getimagesize($dir . $this->image);
        return [
            'id' => $this->id,
            'title' => $this->getTranslatedAttribute('title'),
            'excerpt' => $this->getTranslatedAttribute('excerpt'),
            'date' => $this->dateout,
            'slug' => $this->slug,
            'category' => $this->category == 'NEWS' ? __('Новости') :  __('Блог'),
            'thumbnail' => Voyager::image($this->thumbnail('preview', 'image')),
            'width' => $size[0],
            'height' => $size[1],
            'waterfall' => Voyager::image($this->thumbnail('waterfall', 'image')),
            'url' => '/news/' . $this->slug
        ];
    }
}
