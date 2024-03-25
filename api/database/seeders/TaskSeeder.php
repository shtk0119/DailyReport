<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Models\User;

class TaskSeeder extends Seeder
{
	public function run(): void
	{
		$user = User::factory()->create();

		DB::table('tasks')->insert([
			'user_id' => $user->id,
			'title' => fake()->sentence(),
			'status' => fake()->numberBetween(0, 100),
			'start_date' => Carbon::today(),
			'finish_date' => Carbon::today()->addDays(7),
			'need_time' => Carbon::now()->startOfDay()->addMinutes(fake()->numberBetween(0, 300))->format('H:m:s'),
			'created_at' => now(),
      'updated_at' => now(),
		]);
	}
}
