<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Task;

class DatabaseSeeder extends Seeder
{
	public function run(): void
	{
		User::factory()->count(10)->has(Task::factory()->count(5))->create();
	}
}
