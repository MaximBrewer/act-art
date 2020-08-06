<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use App\Auction;
use App\Http\Resources\Auction as AuctionResource;

class LotController extends Controller
{
    //
    public function gallery(Request $request)
    {
        $auction = Auction::gallery();
        return [
            'auction' => new AuctionResource($auction)
        ];
    }
}
