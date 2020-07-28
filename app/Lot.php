<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;
use TCG\Voyager\Traits\Resizable;
use Jenssegers\Date\Date;

class Lot extends Model
{
    use Translatable;
    use Resizable;
    
    protected $translatable = ['title', 'text'];
    protected $appends = ['number'];
    protected $fillable = ['auction_id', 'sort'];

    protected $dateFormat = 'Y-m-d H:i:s';
    protected $dateTimeOutFormat = 'j/m/Y';
    protected $dates = [
        'date',
    ];
    //
    public function getNumberAttribute()
    {
        return str_pad($this->id, 3, "0", STR_PAD_LEFT);
    }


    public function setPriceAttribute($value)
    {
        $this->attributes['price'] = ceil((float) $value * 100);
    }

    public function getPriceAttribute($value)
    {
        return (float) $value / 100;
    }

    public function setBlitzAttribute($value)
    {
        $this->attributes['blitz'] = ceil((float) $value * 100);
    }

    public function getBlitzAttribute($value)
    {
        return (float) $value / 100;
    }


    public function auction()
    {
        return $this->belongsTo('App\Auction');
    }


    public function categories()
    {
        return $this->belongsToMany('App\Category');
    }

    public function frames()
    {
        return $this->belongsToMany('App\Frame');
    }

    public function styles()
    {
        return $this->belongsToMany('App\Style');
    }

    public function techniques()
    {
        return $this->belongsToMany('App\Technique');
    }

    public function materials()
    {
        return $this->belongsToMany('App\Material');
    }

    
}
