<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use TCG\Voyager\Facades\Voyager;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('lang/{locale}', function ($locale) {
    if (!in_array($locale, ['en', 'ru'])) {
        abort(400);
    }
    Session::put('locale', $locale);
    return redirect()->back();
});

Route::get('/', 'HomeController@index')->name('home');

Route::group(['prefix' => 'news'], function () {
    Route::get('/', '\App\Http\Controllers\NewsController@index')->name('news.index');
    Route::get('/{slug}', '\App\Http\Controllers\NewsController@show');
});

Route::group(['prefix' => 'blog'], function () {
    Route::get('/', '\App\Http\Controllers\BlogController@index')->name('blog.index');
    Route::get('/{slug}', '\App\Http\Controllers\BlogController@show');
});

Route::group(['prefix' => 'auction'], function () {
    Route::get('/', '\App\Http\Controllers\AuctionController@index')->name('auction.index');
    Route::group(['prefix' => '{id}'], function () {
        Route::get('/', '\App\Http\Controllers\AuctionController@show');
        Route::get('/online', '\App\Http\Controllers\AuctionController@online');
        Route::get('/lots', '\App\Http\Controllers\AuctionController@lots');
    });
});

Route::group(['prefix' => 'user'], function () {
    Route::group(['prefix' => 'favorites'], function () {
        Route::patch('/add/{id}', '\App\Http\Controllers\UserController@favoritesAdd');
        Route::patch('/remove/{id}', '\App\Http\Controllers\UserController@favoritesRemove');
    });
});

Route::group(['prefix' => 'admin'], function () {
    Route::patch('/resort', '\App\Http\Controllers\Voyager\VoyagerBaseController@resort')->name('voyager.base.resort');
    Voyager::routes();
});

Route::get('/{slug}', 'PageController@index');
