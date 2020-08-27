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
        $auctions = Auction::coming();
        if ($request->get('attr')) $auctions->where('attr', $request->get('attr'));
        if ($request->get('ids')) $auctions->whereIn('id', explode(",", $request->get('ids')));
        return [
            'auctions' => AuctionResource::collection($auctions->get())
        ];
    }
}
