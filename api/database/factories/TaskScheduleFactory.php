<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\Task;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class TaskScheduleFactory extends Factory
{
	public function definition(): array
	{
		return [
			'user_id' => User::inRandomOrder()->first()->id ?? User::factory(),
			'task_id' => Task::inRandomOrder()->first()->id ?? Task::factory(),
			'status' => fake()->numberBetween(0, 100),
			'start_date' => today(),
			'end_date' => today()->addDays(fake()->numberBetween(1, 7)),
			'need_time' => fake()->numberBetween(1, 360000),
			'created_at' => now(),
      'updated_at' => now(),
		];
	}
}
