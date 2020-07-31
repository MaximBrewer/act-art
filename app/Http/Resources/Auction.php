<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Lot as LotResource;
use TCG\Voyager\Facades\Voyager;
use Illuminate\Support\Facades\App;

class Auction extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        if ($this)
            return [
                'id' => $this->id,
                'title' => $this->getTranslatedAttribute('title'),
                'lots' => LotResource::collection($this->lots)
            ];
    }
}
