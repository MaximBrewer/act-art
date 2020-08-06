<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Auction;
use App\Http\Resources\AuctionShort as AuctionResource;

class AuctionController extends Controller
{
    //
    public function coming(Request $request)
    {
        $auctions = Auction::coming()->get();
        return [
            'auctions' => AuctionResource::collection($auctions)
        ];
    }
}
