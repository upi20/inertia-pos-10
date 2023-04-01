<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LabController extends Controller
{
    public function index(Request $request)
    {
        Inertia::setRootView('frontend');
        return Inertia::render('Lab/Page/Login');
    }

    public function login(Request $request)
    {
        Inertia::setRootView('frontend');
        return Inertia::render('Lab/Page/Login');
    }

    public function create_account(Request $request)
    {
        Inertia::setRootView('frontend');
        return Inertia::render('Lab/Page/CreateAccount');
    }

    public function forgot_password(Request $request)
    {
        Inertia::setRootView('frontend');
        return Inertia::render('Lab/Page/ForgotPassword');
    }
}
