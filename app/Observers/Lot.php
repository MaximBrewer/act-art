<?php

namespace App\Observers;

use App\Lot as LotModel;
use App\Events\Lot as LotEvent;
use App\Http\Resources\Lot as LotResource;

class Lot
{
    public function updated(LotModel $lot)
    {
        event(new LotEvent(new LotResource($lot)));
    }
}
