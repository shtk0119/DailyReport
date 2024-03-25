<?php

namespace Database\Seeders;

use App\Models\StudyRecord;
use Illuminate\Database\Seeder;

class StudyRecordSeeder extends Seeder
{
	public function run(): void
	{
		StudyRecord::factory()->count(200)->create();
	}
}
