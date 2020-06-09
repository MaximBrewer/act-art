<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function ($table) {
            $table->string('firstname')->nullable();
            $table->string('secondname')->nullable();
            $table->string('surname')->nullable();
            $table->integer('year')->nullable();
            $table->text('text')->nullable();
            $table->string('fb')->nullable();
            $table->string('inst')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function ($table) {
            $table->dropColumn('city');
        });
    }
}
