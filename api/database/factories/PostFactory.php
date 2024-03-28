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
      'total_time_per_day' => $this->faker->numberBetween(1, 86400),
      'comment' => $this->faker->sentence(),
      'created_at' => now(),
      'updated_at' => now(),
    ];
  }

  /**
   * Configure the model factory.
   *
   * @return $this
   */
  public function configure()
  {
    return $this->afterCreating(function ($post) {
      $tasks = Task::inRandomOrder()->limit(10)->get();
      if ($tasks->isEmpty()) {
        $tasks = Task::factory()->count(10)->create();
      }
      foreach ($tasks as $task) {
        $post->tasks()->attach($task->id);
      }
      $post->task_ids = $tasks->pluck('id')->toArray();
    });
  }
}
