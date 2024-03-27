<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\Task;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
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
      'total_time_per_day' => fake()->numberBetween(1, 86400),
      'comment' => fake()->sentence(),
      'created_at' => now(),
      'updated_at' => now(),
    ];
  }
}
