<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use App\Auction;
use App\Http\Resources\Auction as AuctionResource;
use App\Lot;
use App\Http\Resources\Lot as LotResource;

class LotController extends Controller
{
    //
    public function index(Request $request)
    {
        $limit = $request->get('limit') ? $request->get('limit') : 24;
        $offset = $request->get('offset') ? $request->get('offset') : 0;
        $author = $request->get('author') ?  $request->get('author') : 0;
        if($request->get('author')) $lots = Lot::where('user_id', $request->get('author'));
        return json_encode([
            'items' => LotResource::collection(
                $lots
                    ->orderBy('created_at')
                    ->limit($limit)
                    ->offset($offset)
                    ->get()
            ),
            'next' => $lots->count() - $offset - $limit
        ]);
    }

    public function gallery(Request $request)
    {
        $auction = Auction::gallery();
        return [
            'auction' => new AuctionResource($auction)
        ];
    }
}
