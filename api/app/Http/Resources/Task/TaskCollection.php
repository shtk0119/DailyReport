<?php

namespace App\Http\Resources\Task;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class TaskCollection extends ResourceCollection
{
	public static $wrap = 'tasks';

	public $collects = TaskResource::class;

	public function toArray(Request $request): array
	{
		return parent::toArray($request);
	}
}
