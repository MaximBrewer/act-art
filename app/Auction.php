<?php

namespace App;

use Illuminate\Database\Eloquent\Builder;
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
            if ($model->to_gallery)
                DB::table($model->table)->update(['to_gallery' => 0]);
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



    /**
     * Scope a query to only published scopes.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeGallery(Builder $query)
    {
        return $query->where('to_gallery', '=', 1);
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
