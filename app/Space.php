<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Spatial;
use TCG\Voyager\Traits\Translatable;

class Space extends Model
{
    use Spatial;
    use Translatable;
    protected $translatable = ['title'];
    protected $spatial = ['coords'];
    //
}
