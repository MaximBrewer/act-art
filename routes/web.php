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
    Route::get('/{slug}', '\App\Http\Controllers\NewsController@show')->name('news.show');
    // Route::patch('/', '\App\Http\Controllers\Voyager\VoyagerBaseController@resort')->name('news.index');
});

Route::group(['prefix' => 'admin'], function () {
    Route::patch('/resort', '\App\Http\Controllers\Voyager\VoyagerBaseController@resort')->name('voyager.base.resort');
    Voyager::routes();
});



Route::get('/{slug}', 'PageController@index');
