<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
	public function run(): void
	{
		DB::table('users')->insert([
			'name' => fake()->name(),
			'email' => fake()->unique()->safeEmail(),
			'email_verified_at' => now(),
			'password' => Hash::make('password'),
			'group' => rand(1, 5),
			'remember_token' => Str::random(10),
			'created_at' =>	now(),
			'updated_at' =>	now(),
		]);
	}
}
