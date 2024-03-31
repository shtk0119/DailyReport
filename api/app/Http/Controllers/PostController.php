<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function userPostsIndex(string $id)
    {
        //投稿内容の全取得
        $posts = Post::where('user_id', $id)->get();
        $postsWithTasks = $posts->load(['tasks' => function ($query) use ($id) {
            $query->where('user_id', $id);
        }]);

        return response()->json($postsWithTasks);
    }
}
