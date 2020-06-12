<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;

class Lot extends Model
{
    use Translatable;
    protected $translatable = ['title', 'text'];
    protected $appends = ['number'];
    //
    public function getNumberAttribute()
    {
        return str_pad($this->id, 3, "0", STR_PAD_LEFT);
    }
}
