<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/',[App\Http\Controllers\api\DataController::class, 'index']);
Route::post('/store',[App\Http\Controllers\api\DataController::class, 'store']);
Route::get('/show/{id}',[App\Http\Controllers\api\DataController::class, 'show']);
Route::put('/update/{id}',[App\Http\Controllers\api\DataController::class, 'update']);
Route::delete('/destroy/{id}',[App\Http\Controllers\api\DataController::class, 'destroy']);
