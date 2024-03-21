<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sample;

class SampleController extends Controller
{
    public function list()
    {
        $samples = Sample::all();

        return response()->json($samples);
    }

    public function create(Request $request)
    {
        $validated = $request->validate([
            'text' => ['required']
        ]);
        $sample = Sample::create($validated);
        return response()->json($validated);
    }
}
