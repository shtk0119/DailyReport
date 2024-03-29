<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class AuthController extends Controller
{
	public function register(Request $request)
	{
		//新規登録
		$user = User::create([
			'name' => $request->user['name'],
			'group' => $request->user['group'],
			'email' => $request->user['email'],
			'password' => bcrypt($request->user['password']),
		]);

		return response()->json([ 'user' => $user ]);
	}

	public function login(Request $request)
	{
		//ログイン
		$credentials = request('user');
		if (!auth()->attempt($credentials)) {
			return response()->json([
				'message' => '認証に失敗しました。',
				'errors' => [
					'password' => [
						'パスワードが違います。'
					],
				]
			], 422);
		}

		$user = User::where('email', $request->user['email'])->first();
		$authToken = $user->createToken('auth-token')->plainTextToken;

		return response()->json([
			'access_token' => $authToken,
		]);
	}

	public function logout(Request $request)
	{
		//ログアウト(トークンの削除)
		auth('sanctum')->user()->tokens()->delete();
		return response()->json(['message' => 'ログアウトしました'], 200);
	}
}
