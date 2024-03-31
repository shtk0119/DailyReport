<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use App\Http\Resources\Task\TaskCollection;

class TaskController extends Controller
{
	/**
   * ユーザーのタスク一覧取得
   */
  public function getTasks(int $userId): TaskCollection
  {
    $tasks = Task::where('user_id', $userId)->get();
		return new TaskCollection($tasks);
  }
}
