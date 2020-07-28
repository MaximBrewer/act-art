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
        return [
            'id' => $this->id,
            'title' => $this->title,
            'excerpt' => $this->excerpt,
            'date' => $this->dateout,
            'slug' => $this->slug,
            'category' => $this->category == 'NEWS' ? __('Новости') :  __('Блог'),
            'thumbnail' => Voyager::image($this->thumbnail('preview', 'image')),
        ];
    }
}
