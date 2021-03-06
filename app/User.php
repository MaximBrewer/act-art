<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use TCG\Voyager\Traits\Translatable;
use Illuminate\Support\Facades\DB;
use TCG\Voyager\Traits\Resizable;

class User extends \TCG\Voyager\Models\User
{
    use Notifiable;
    use Translatable;
    use Resizable;
    protected $translatable = ['name', 'surname', 'middlename', 'text'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
        'phone', 'fb', 'inst', 'beh',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function exhibits()
    {
        return $this->belongsToMany('App\Exhibit');
    }

    public function groups()
    {
        return $this->belongsToMany('App\Group');
    }

    public function auctions()
    {
        return $this->belongsToMany('App\Auction');
    }

    public function professions()
    {
        return $this->belongsToMany('App\Profession');
    }

    public function studies()
    {
        return $this->belongsToMany('App\Study');
    }

    public function favorites()
    {
        return $this->belongsToMany('App\Lot', 'App\Favorite');
    }

    public function getFidsAttribute()
    {
        return array_map(function ($a) {
            return $a->lot_id;
        }, DB::table('favorites')
            ->select('lot_id')
            ->where('user_id', $this->id)->get()->toArray());
    }

    public function getAidsAttribute()
    {
        return array_map(function ($a) {
            return $a->auction_id;
        }, DB::table('user_auction')
            ->select('auction_id')
            ->where('user_id', $this->id)->get()->toArray());
    }
}
