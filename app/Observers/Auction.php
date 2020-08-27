<?php

namespace App\Observers;

use App\Auction as AuctionModel;
use App\Events\Auction as AuctionEvent;
use App\Http\Resources\Auction as AuctionResource;

class Auction
{
    public function updated(AuctionModel $auction)
    {
        event(new AuctionEvent(new AuctionResource($auction)));
    }
}
