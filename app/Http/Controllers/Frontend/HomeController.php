<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{

    public function index(Request $request)
    {
        Inertia::setRootView('frontend');
        return Inertia::render('Frontend/Home', [
            'title' => 'ASu'
        ]);
    }

    public function login(Request $request)
    {
        return Inertia::render('Auth/_Login');
    }

    public function post_oke(Request $request)
    {
        return response()->json($request);
    }
}
