<?php

namespace App\Http\Resources\StudyRecord;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StudyRecordResource extends JsonResource
{
	public static $wrap = 'record';

	public function toArray(Request $request): array
	{
		return [
			'id' => $this->id,
			'user_id' => $this->user_id,
			'task_id' => $this->task_id,
			'total_time' => $this->total_time,
			'created_at' => $this->created_at,
			'updated_at' =>$this->updated_at,
		];
	}
}
