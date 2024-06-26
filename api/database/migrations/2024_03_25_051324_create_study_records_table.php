<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
	public function up(): void
	{
		Schema::create('study_records', function (Blueprint $table) {
			$table->id();
			$table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
			$table->foreignId('task_id')->constrained('tasks')->cascadeOnDelete();
			$table->unsignedInteger('total_time')->default(0)->nullable(false);
			$table->timestamps();
		});
	}

	public function down(): void
	{
		Schema::dropIfExists('study_records');
	}
};
