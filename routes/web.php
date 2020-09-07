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

Route::group(['prefix' => 'events'], function () {
    Route::get('/', '\App\Http\Controllers\EventController@index')->name('event.index');
    Route::get('/{id}', '\App\Http\Controllers\EventController@show');
});

Route::group(['prefix' => 'blog'], function () {
    Route::get('/', '\App\Http\Controllers\BlogController@index')->name('blog.index');
    Route::get('/{slug}', '\App\Http\Controllers\BlogController@show');
});

Route::group(['prefix' => 'authors'], function () {
    Route::get('/', '\App\Http\Controllers\AuthorController@index')->name('author.index');
    Route::get('/{id}', '\App\Http\Controllers\AuthorController@show');
    Route::get('/{id}/lots/{lot_id}', '\App\Http\Controllers\AuthorController@lot');
});

Route::group(['prefix' => 'profile'], function () {
    Route::get('/', '\App\Http\Controllers\ProfileController@index')->name('profile.index');
});

Route::group(['prefix' => 'gallery'], function () {
    Route::get('/', '\App\Http\Controllers\GalleryController@index')->name('gallery.index');
    Route::get('/archive', '\App\Http\Controllers\GalleryController@archive')->name('gallery.archive');
    Route::get('/lot/{id}', '\App\Http\Controllers\GalleryController@lot')->name('gallery.lot');
});

Route::group(['prefix' => 'auctions'], function () {
    Route::get('/', '\App\Http\Controllers\AuctionController@index')->name('auctions.index');
    Route::group(['prefix' => '{id}'], function () {
        Route::get('/', '\App\Http\Controllers\AuctionController@show');
        Route::group(['prefix' => 'lots'], function () {
            Route::get('/', '\App\Http\Controllers\AuctionController@show');
            Route::get('/{lot_id}', '\App\Http\Controllers\AuctionController@show');
        });
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
