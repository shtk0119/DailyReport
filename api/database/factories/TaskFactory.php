<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
	/**
	 * モデルのデフォルト状態を定義します。
	 *
	 * @return array<string, mixed>
	 */
	public function definition(): array
	{
		return [
			'user_id' => User::inRandomOrder()->first()->id ?? User::factory(),
			'title' => fake()->sentence(),
			'status' => fake()->numberBetween(0, 100),
			'start_date' => today(),
			'end_date' => today()->addDays(7),
			'need_time' => fake()->numberBetween(1, 360000),
			'created_at' => now(),
      'updated_at' => now(),
		];
	}
}
