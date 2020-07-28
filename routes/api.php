<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;
use App\Post;
use App\Auction;
use App\Http\Resources\Post as PostResource;
use App\Http\Resources\Auction as AuctionResource;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/get_posts/{type}', function ($type) {
    $posts = Post::{$type}()->published()->orderBy('created_at')->get();
    return json_encode(['posts' => PostResource::collection($posts)]);
});

Route::get('/get_gallery_items', function (Request $request) {
    $auction = Auction::gallery()->first();
    return json_encode(['auction' => new AuctionResource($auction)]);
});


Route::get('/get_carousel_items/{entity}/{id}', function ($entity, $id) {
    // return[$entity, $id];
    // $images = Cache::get('carousel.shortcode.' . $entity . '.' . $id, function ($entity, $id) {
    // return 
    $res = DB::table($entity . 's')->select('images')->find($id);
    // });
    return json_encode(['slides' => json_decode($res->images), 'prefix' => '/storage/']);
});
