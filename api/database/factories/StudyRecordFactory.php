<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\Task;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\StudyRecord>
 */
class StudyRecordFactory extends Factory
{
	public function definition(): array
	{
		return [
			'user_id' => User::inRandomOrder()->first()->id ?? User::factory(),
			'task_id' => Task::inRandomOrder()->first()->id ?? Task::factory(),
			'total_time' => fake()->numberBetween(1, 10800),
			'created_at' => now(),
			'updated_at' => now(),
		];
	}
}
