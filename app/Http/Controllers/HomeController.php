<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laracasts\Utilities\JavaScript\JavaScriptFacade as Javascript;
use App\User;
use Illuminate\Support\Facades\App;
use App\Http\Resources\User as UserResource;
use Illuminate\Support\Facades\Auth;
use App\Category;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        JavaScript::put([
            'user' => Auth::check() ? new UserResource(Auth::user()) : null,
        ]);
        $data['categories'] = Category::orderBy('sort', 'asc')->limit(6)->get();
        return view('home', $data);
    }
}
