<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\blog\BlogController;
use App\Http\Controllers\backend\DashboardController;
use App\Http\Controllers\backend\role\RoleController;
use App\Http\Controllers\backend\user\UserController;
use App\Http\Controllers\backend\permission\PermissionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::middleware('auth:api')->group(function () {


Route::prefix('content')->group(function () {

    Route::resource('blog', BlogController::class);
    Route::post('/remove-all/blogs', [BlogController::class, 'removeAllBlogs']);
    Route::get('/all/blogs',[BlogController::class,'getAllBlogs']);
    Route::post('/comment',[BlogController::class, 'addComment']);
    



});

Route::prefix('management')->group(function () {

    Route::resource('user', UserController::class);
    Route::post('remove-all/users',[UserController::class,'removeAllUsers']);
    Route::get('/roles-perimissions',[UserController::class,'getRolesPermissions']);


    Route::resource('role', RoleController::class);
    Route::post('remove-all/roles',[UserController::class,'removeAllRoles']);

    Route::resource('permission', PermissionController::class);
    Route::post('/remove-all/permissions',[UserController::class,'removeAllPermissions']);

});
});
