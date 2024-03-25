<?php

namespace Database\Factories;

use App\Models\Task;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\StudyRecord>
 */
class StudyRecordFactory extends Factory
{
	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 */
	public function definition(): array
	{
		return [
			'user_id' => User::inRandomOrder()->first()->id ?? User::factory(),
			'task_id' => Task::inRandomOrder()->first()->id ?? Task::factory(),
			'created_at' => now(),
			'updated_at' => now()->addMinutes(fake()->numberBetween(0, 180)),
		];
	}
}
