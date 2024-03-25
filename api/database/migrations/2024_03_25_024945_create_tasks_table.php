<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
	public function up(): void
	{
		Schema::create('tasks', function (Blueprint $table) {
			$table->id();
			$table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
			$table->string('title');
			$table->unsignedInteger('status');
			$table->date('start_date');
			$table->date('end_date');
			$table->time('need_time');
			$table->timestamps();
		});
	}

	public function down(): void
	{
		Schema::dropIfExists('tasks');
	}
};
