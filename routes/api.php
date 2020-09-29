<?php

// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
// use Illuminate\Support\Facades\Cache;
// use App\Post;
// use App\Auction;
// use App\Http\Resources\Post as PostResource;
// use App\Http\Resources\PostWaterfall as PostWaterfallResource;

// use App\Http\Resources\Auction as AuctionResource;
// use Carbon\Carbon;
// use Illuminate\Support\Facades\App;
// use App\Http\Middleware\ApiLocale;
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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['prefix' => '{lang}', 'middleware' => ['api.locale']], function () {

    Route::get('posts', '\App\Http\Controllers\Api\PostController@index')->name('post.index');
    Route::get('events', '\App\Http\Controllers\Api\EventController@index')->name('event.index');

    Route::get('auctions/coming', '\App\Http\Controllers\Api\AuctionController@coming')->name('auction.coming');
    Route::get('auctions/{id}', '\App\Http\Controllers\Api\AuctionController@show')->name('auction.show');

    Route::get('lots/gallery', '\App\Http\Controllers\Api\LotController@gallery')->name('lot.gallery');
    Route::get('lots', '\App\Http\Controllers\Api\LotController@index')->name('lot.index');
    Route::get('lots/options', '\App\Http\Controllers\Api\LotController@options')->name('lot.options');
    Route::get('lot/{id}', '\App\Http\Controllers\Api\LotController@show');
    Route::get('favorites', '\App\Http\Controllers\Api\LotController@favorites')->name('lot.favorites');

    Route::get('events', '\App\Http\Controllers\Api\EventController@index')->name('event.index');

    Route::get('experts', '\App\Http\Controllers\Api\ExpertController@index')->name('expert.index');

    Route::get('categories/popular', '\App\Http\Controllers\Api\CategoryController@popular')->name('category.popular');

    Route::get('authors', '\App\Http\Controllers\Api\AuthorController@index')->name('author.index');

    // Route::get('posts/{type}', function ($lang, $type) {
    //     App::setLocale($lang);
    //     $posts = Post::{$type}()->published()->orderBy('created_at')->get();
    //     return json_encode(['posts' => PostResource::collection($posts)]);
    // });
    Route::get('get_carousel_items/{entity}/{id}', function ($lang, $entity, $id) {
        // return[$entity, $id];
        // $images = Cache::get('carousel.shortcode.' . $entity . '.' . $id, function ($entity, $id) {
        // return 
        $res = DB::table($entity . 's')->select('images')->find($id);
        // });
        return json_encode(['slides' => json_decode($res->images), 'prefix' => '/storage/']);
    });
});
