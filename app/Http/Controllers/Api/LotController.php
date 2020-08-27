<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use App\Auction;
use App\Http\Resources\Auction as AuctionResource;
use App\Lot;
use App\Http\Resources\Lot as LotResource;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class LotController extends Controller
{
    //
    public function index(Request $request)
    {
        $lots = Lot::where(function ($query) {
            $query;
        });
        $limit = $request->get('limit') ? $request->get('limit') : 24;
        $offset = $request->get('offset') ? $request->get('offset') : 0;
        if ($request->get('author')) $lots->where('user_id', $request->get('author'));
        if ($request->get('status')) {
            switch ($request->get('status')) {
                case "available":
                    $lots->whereIn('status', ["auction", "gallery"]);
                    break;
                case "sold":
                    $lots->where('status', "sold");
                    break;
                default:
                    break;
            }
        };
        return json_encode([
            'next' => $lots->count() - $offset - $limit,
            'items' => LotResource::collection(
                $lots
                    ->orderBy('lots.created_at')
                    ->limit($limit)
                    ->offset($offset)
                    ->with('bets')
                    ->with('techniques')
                    ->with('materials')
                    ->with('categories')
                    ->with('frames')
                    ->with('styles')
                    ->with('user')
                    ->get()
            ),
        ]);
    }

    public function gallery(Request $request)
    {
        $auction = Auction::gallery();
        return [
            'auction' => new AuctionResource($auction)
        ];
    }

    public function favorites(Request $request)
    {
        $ids = explode(",", $request->get('ids'));
        $lots = Lot::whereIn('id', $ids);
        return json_encode([
            'next' => 0,
            'items' => LotResource::collection(
                $lots
                    ->orderBy('lots.created_at')
                    ->with('bets')
                    ->with('techniques')
                    ->with('materials')
                    ->with('categories')
                    ->with('frames')
                    ->with('styles')
                    ->with('user')
                    ->get()
            ),
        ]);
    }
}
