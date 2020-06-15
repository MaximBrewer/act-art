<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLotsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lots', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->enum('status', ["empty", "auction", "gallery", "sold", "discontinued"])->default("empty");
            $table->unsignedBigInteger('auction_id')->nullable();
            $table->date('until')->nullable();
            $table->string('photo');
            $table->integer('price');
            $table->unsignedInteger('sort');
            $table->integer('blitz')->nullable();
            $table->integer('year')->nullable();
            $table->integer('width')->nullable();
            $table->integer('height')->nullable();
            $table->string('category')->nullable();
            $table->string('style')->nullable();
            $table->text('text')->nullable();
            $table->unsignedBigInteger('user_id');
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lots');
    }
}
