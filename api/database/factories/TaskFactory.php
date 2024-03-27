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
			'created_at' => now(),
      'updated_at' => now(),
		];
	}
}
