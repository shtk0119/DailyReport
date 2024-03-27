<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TaskSchedule;

class TaskScheduleSeeder extends Seeder
{
	public function run(): void
	{
		TaskSchedule::factory()->count(100)->create();
	}
}
