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
        $per_page = $request->get('per_page') ? $request->get('per_page') : 24;
        $page = $request->get('page') ? $request->get('page') : 1;
        $cat = $request->get('category') ?  $request->get('category') : 'all';
        $posts = Post::{$cat}()->published()->orderBy('created_at');
        $paginate = $posts->simplePaginate($per_page)->toArray();
        return json_encode([
            'posts' => PostResource::collection(
                $posts
                    ->limit($paginate['per_page'])
                    ->offset(($paginate['current_page'] - 1) * $paginate['per_page'])
                    ->get()
            ),
            'per_page' => $paginate['per_page'],
            'first_page_url' => $paginate['first_page_url'],
            'next_page_url' => $paginate['next_page_url'],
            'path' => $paginate['path'],
            'prev_page_url' => $paginate['prev_page_url'],
            'to' => $paginate['to'],
            'from' => $paginate['from'],
            'current_page' => $paginate['current_page']
        ]);
    }
}
