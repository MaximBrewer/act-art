<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFrameLotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('frame_lot', function (Blueprint $table) {
            $table->unsignedBigInteger('lot_id');
            $table->unsignedBigInteger('frame_id');
            $table->foreign('lot_id')->references('id')->on('lots')->onDelete('cascade');
            $table->foreign('frame_id')->references('id')->on('frames')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('frame_lot');
    }
}
