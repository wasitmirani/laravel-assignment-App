<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\BackendController;
use App\Http\Controllers\FrontendController;
use App\Http\Controllers\backend\DashboardController;
use App\Http\Controllers\Backend\user\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




Route::get('/',function(){
    return redirect()->route('login');
})->name('index');


Auth::routes();
Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::post('/api/logout',[UserController::class,'logout']);

Route::middleware('auth')->prefix('dashboard')->group(function(){
    Route::get('/',[DashboardController::class,'index'])->name('dashboard');
});
