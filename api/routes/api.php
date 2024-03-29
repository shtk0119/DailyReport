<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/user', function (Request $request) {
  return $request->user();
})->middleware('auth:sanctum');

Route::get('/not-posted', [UserController::class, 'getNonPostedUsers']);
// 学習中ユーザー
Route::get('/learning-user', [UserController::class, 'getLearningUsers']);
