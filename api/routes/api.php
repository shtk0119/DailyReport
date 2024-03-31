<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\StudyRecordController;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//   return $request->user();
// });

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
  Route::post('/logout', [AuthController::class, 'logout']);
});

Route::get('/not-posted', [UserController::class, 'getNonPostedUsers']);
// 学習中ユーザー
Route::get('/learning-user', [UserController::class, 'getLearningUsers']);
//ユーザーの投稿一覧
Route::get('/posts/{id}', [PostController::class, 'userPostIndex']);
// ユーザーのタスク一覧
Route::get('/tasks/{user_id}', [TaskController::class, 'getTasks']);
// 今日学習中の学習記録
Route::get('/record/{user_id}/{task_id}', [StudyRecordController::class, 'getStudyRecord']);
// 計測
Route::put('/record/{id}', [StudyRecordController::class, 'postStudyRecord']);
