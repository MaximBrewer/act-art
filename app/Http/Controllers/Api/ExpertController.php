<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Expert;
use App\Http\Resources\Expert as ExpertResource;

class ExpertController extends Controller
{
    //
    //
    public function all(Request $request)
    {
        return [
            'experts' => ExpertResource::collection(Expert::all())
        ];
    }
}
