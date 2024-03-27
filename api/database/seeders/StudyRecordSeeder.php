<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\StudyRecord;

class StudyRecordSeeder extends Seeder
{
	public function run(): void
	{
		StudyRecord::factory()->count(200)->create();
	}
}
