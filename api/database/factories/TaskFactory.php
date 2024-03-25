<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Carbon\Carbon;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 */
	public function definition(): array
	{
		return [
			'user_id' => User::factory(),
			'title' => fake()->sentence(),
			'status' => fake()->numberBetween(0, 100),
			'start_date' => Carbon::today(),
			'finish_date' => Carbon::today()->addDays(7),
			'need_time' => Carbon::now()->startOfDay()->addMinutes(fake()->numberBetween(0, 300))->format('H:m:s'),
			'created_at' => now(),
      'updated_at' => now(),
		];
	}
}
