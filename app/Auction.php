<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;

class Auction extends Model
{
    use Translatable;
    protected $translatable = ['title', 'sublime', 'text'];
    //


    public function lots()
    {
        return $this->hasMany('App\Lot')->orderBy('sort', "ASC");
    }
}
