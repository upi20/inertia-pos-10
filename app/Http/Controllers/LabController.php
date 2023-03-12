<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LabController extends Controller
{
    public function __construct()
    {
        Inertia::setRootView('frontend');
    }

    public function index(Request $request)
    {
        return Inertia::render('Auth/Login');
    }
}
