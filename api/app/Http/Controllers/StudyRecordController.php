<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StudyRecord;
use App\Http\Resources\StudyRecord\StudyRecordResource;

class StudyRecordController extends Controller
{
	public function getStudyRecord(int $userId, int $taskId): StudyRecordResource
	{
		$studyRecord = StudyRecord::where('user_id', $userId)
		->where('task_id', $taskId)
		->whereDate('created_at', today())
		->firstOrCreate([
			'user_id' => $userId,
			'task_id' => $taskId,
		]);

		return new StudyRecordResource($studyRecord);
	}
}
