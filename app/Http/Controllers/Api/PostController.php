<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use App\Post;
use App\Http\Resources\Post as PostResource;

class PostController extends Controller
{
    //
    public function index(Request $request)
    {
        $limit = $request->get('limit') ? $request->get('limit') : 24;
        $offset = $request->get('offset') ? $request->get('offset') : 0;
        $cat = $request->get('category') ?  $request->get('category') : 'all';
        $posts = Post::{$cat}()->published()->orderBy('created_at');
        return json_encode([
            'posts' => PostResource::collection(
                $posts
                    ->limit($limit)
                    ->offset($offset)
                    ->get()
            ),
            'next' => $posts->count() - $offset - $limit
        ]);
    }
}
