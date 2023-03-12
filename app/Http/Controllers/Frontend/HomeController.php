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
}
