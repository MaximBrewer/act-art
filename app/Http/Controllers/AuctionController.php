<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Auction;
use Laracasts\Utilities\JavaScript\JavaScriptFacade as Javascript;
use App\Http\Resources\User as UserResource;
use Illuminate\Support\Facades\Auth;
use App\Lot;

class AuctionController extends Controller
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
        return view('auction.index', [
            'regular' => Auction::coming()->where('attr', 'regular')->get(),
            'special' => Auction::coming()->where('attr', 'special')->get()
        ]);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function show($id)
    {
        JavaScript::put([
            'user' => Auth::check() ? new UserResource(Auth::user()) : null,
        ]);
        $auction = Auction::find($id);
        return view('auction.show', ['auction' => $auction]);
    }
}
