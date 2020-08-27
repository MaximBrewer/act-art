<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use Laracasts\Utilities\JavaScript\JavaScriptFacade as Javascript;
use App\User;
use App\Http\Resources\User as UserResource;
use Illuminate\Support\Facades\Auth;

class BlogController extends Controller
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
        return view('blog.index');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function show($slug)
    {
        JavaScript::put([
            'user' => Auth::check() ? new UserResource(Auth::user()) : null,
        ]);
        $post = Post::where('slug', $slug)->first();
        if (!$post) abort(404, 'Page not found');
        return view('blog.show', ['post' => $post])->withShortcodes();
    }
}
