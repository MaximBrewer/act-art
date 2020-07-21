<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;
use TCG\Voyager\Traits\Resizable;
use Jenssegers\Date\Date;
use Illuminate\Support\Facades\DB;

class Auction extends Model
{
    use Translatable;
    use Resizable;
    protected $translatable = ['title', 'sublime', 'text', 'header_text', 'announce_text'];
    //
    protected $dateFormat = 'Y-m-d H:i:s';
    protected $dateTimeOutFormat = 'j F Y г. H:i';
    protected $dates = [
        'date',
    ];


    public static function boot()
    {
        parent::boot();

        self::creating(function ($model) {
            // ... code here
            if ($model->to_announce)
                DB::table($model->table)->update(['to_announce' => 0]);
        });

        self::created(function ($model) {
            // ... code here
        });

        self::updating(function ($model) {
            // ... code here
            if ($model->to_announce)
                DB::table($model->table)->update(['to_announce' => 0]);
        });

        self::updated(function ($model) {
            // ... code here
        });

        self::deleting(function ($model) {
            // ... code here
        });

        self::deleted(function ($model) {
            // ... code here
        });
    }

    public function getDateoutAttribute()
    {
        return Date::createFromFormat($this->dateFormat, $this->date)->format($this->dateTimeOutFormat);
    }

    public function lots()
    {
        return $this->hasMany('App\Lot')->orderBy('sort', "ASC");
    }
}
