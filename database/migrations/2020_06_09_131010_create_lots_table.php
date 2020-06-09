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
            $table->enum('status', ["diag", "sale", "sold"])->default('diag');
            $table->string('photo');
            $table->integer('price');
            $table->integer('price_up')->nullable();
            $table->integer('price_fin')->nullable();
            $table->integer('price_step')->nullable();
            $table->integer('price_blic')->nullable();
            $table->integer('year')->nullable();
            $table->integer('auction_number')->nullable();
            $table->string('tech')->nullable();
            $table->string('matherial')->nullable();
            $table->string('size')->nullable();
            $table->string('border')->nullable();
            $table->string('category')->nullable();
            $table->string('style')->nullable();
            $table->text('text')->nullable();
            $table->unsignedBigInteger('auction_id')->nullable();
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
