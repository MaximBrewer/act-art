<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;

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

Route::get('/get_gallery_items', function (Request $request) {

    $arr = [];
    $dir = storage_path("app/public/images/*");

    foreach (glob($dir) as $k => $filename) {
        if ($size = getimagesize($filename)) {
            $arr[] = [
                'title' => 'Хелло',
                'url' => '/storage/images/' . basename($filename),
                'size' => $size[0] / $size[1] > 1 ? 2 : 1,
                'width' => $size[0],
                'height' => $size[1],
                'article' => 'Хелло',
                'id' => $k,
                'props' => '1,2',
                'tag' => "Хелло"
            ];
        }
    }
    return json_encode(['gallery' => $arr]);
});


Route::get('/get_carousel_items/{entity}/{id}', function ($entity, $id) {
    // return[$entity, $id];
    // $images = Cache::get('carousel.shortcode.' . $entity . '.' . $id, function ($entity, $id) {
    // return 
    $res = DB::table($entity .'s')->select('images')->find($id);
    // });
    return json_encode(['slides' => json_decode($res->images), 'prefix' => '/storage/']);
});
