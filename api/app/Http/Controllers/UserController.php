<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
  public function getNonPostedUsers()
  {
    $users = User::where('is_posted', false)->get();
    return response()->json($users);
  }
}
