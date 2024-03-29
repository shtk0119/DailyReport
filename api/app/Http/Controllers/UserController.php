<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Resources\UserCollection;

class UserController extends Controller
{
  public function getNonPostedUsers()
  {
    $users = User::where('is_posted', false)->get();
    return response()->json($users);
  }

  /**
   * 学習中ユーザーの取得
   */
  public function getLearningUsers()
  {
    $users = User::where('is_active', true)->get();
    return new UserCollection($users);
  }
}
