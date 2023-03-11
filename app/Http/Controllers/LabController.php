<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LabController extends Controller
{
    public function index(Request $request)
    {
        Inertia::setRootView('frontend');
        return Inertia::render('Auth/Login');
    }
}
