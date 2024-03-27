<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
	public function up(): void
	{
		Schema::create('task_schedules', function (Blueprint $table) {
			$table->id();
			$table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
			$table->foreignId('task_id')->constrained('tasks')->cascadeOnDelete();
			$table->unsignedInteger('status');
			$table->date('start_date');
			$table->date('end_date');
			$table->unsignedInteger('need_time');
			$table->timestamps();
		});
	}

	public function down(): void
	{
		Schema::dropIfExists('task_schedules');
	}
};
