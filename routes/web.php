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
    if (! in_array($locale, ['en', 'ru'])) {
        abort(400);
    }
    Session::put('locale', $locale);
    return redirect()->back();
});

Route::get('/', 'HomeController@index')->name('home');


Route::group(['prefix' => 'admin'], function () {
    Route::patch('/resort', '\App\Http\Controllers\Voyager\VoyagerBaseController@resort')->name('voyager.base.resort');
    Route::patch('/lots/relation', '\App\Http\Controllers\Voyager\VoyagerLotController@addRelation')->name('voyager.lots.relation.add');
    Route::patch('/users/relation', '\App\Http\Controllers\Voyager\VoyagerUserController@addRelation')->name('voyager.users.relation.add');
    Voyager::routes();
});



Route::get('/{slug}', 'PageController@index');