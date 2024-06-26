<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StudyRecord;
use App\Http\Resources\StudyRecord\StudyRecordResource;
use App\Models\User;

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

	public function postStudyRecord(Request $request, int $id)
	{
		$studyRecord = StudyRecord::findOrFail($id);
		$studyRecord->total_time = $request->total_time;
		$studyRecord->save();

		$user = User::findOrFail($studyRecord->user_id);
		$user->is_active = false;
		$user->save();

		return response()->json($studyRecord, 200);
	}
}
