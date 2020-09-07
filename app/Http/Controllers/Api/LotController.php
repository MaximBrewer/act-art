<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use App\Auction;
use App\Http\Resources\Auction as AuctionResource;
use App\Lot;
use App\Http\Resources\Lot as LotResource;
use Illuminate\Database\Eloquent\Builder;

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
                case "gallery":
                    $lots->whereIn('status', ["gallery"]);
                    break;
                case "gallery-available":
                    $lots->whereIn('status', ["gallery"]);
                    break;
                case "sold":
                    $lots->where('status', "sold");
                    break;
                default:
                    break;
            }
        };
        if ($category = $request->get('category')) {
            $lots->whereHas('categories', function (Builder $query) use ($category) {
                $query->where('id', $category);
            });
        };
        if ($style = $request->get('style')) {
            $lots->whereHas('styles', function (Builder $query) use ($style) {
                $query->where('id', $style);
            });
        };
        if ($request->get('exclude'))
            $lots->where('id', '<>', $request->get('exclude'));

        $lots->orderBy($request->get('sortBy') ? 'lots.' . $request->get('sortBy') : 'lots.id', $request->get('order') ? $request->get('order') : 'asc');
        return json_encode([
            'next' => $lots->count() - $offset - $limit,
            'items' => LotResource::collection(
                $lots
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

    public function show($lang, $id)
    {
        $lot = Lot::findOrfail($id);
        return [
            'lot' => new LotResource($lot)
        ];
    }


    public function options(Request $request)
    {
        return [
            ['id' => 'category', 'title' => __('Category'), 'items' => \App\Category::all()],
            ['id' => 'style', 'title' => __('Style'), 'items' => \App\Style::all()],
            // ['id' => 'material', 'title' => __('Material'), 'items' => \App\Material::all()],
            // ['id' => 'technique', 'title' => __('Technique'), 'items' => \App\Technique::all()],
            // ['id' => 'frame', 'title' => __('Frame'), 'items' => \App\Frame::all()],
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
