<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Auction;

class AuctionController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
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
        $auction = Auction::find($id);
        return view('auction.show', ['auction' => $auction]);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function lots($id)
    {
        $auction = Auction::find($id);
        return view('auction.show', ['auction' => $auction]);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function online($id)
    {
        $auction = Auction::find($id);
        return view('auction.show', ['auction' => $auction]);
    }
}
