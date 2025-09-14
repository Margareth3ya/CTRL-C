<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/berita', function () {
    return Inertia::render('Berita');
});

Route::get('/berita-lengkap', fn () => Inertia::render('BeritaLengkap'));
Route::get('/berita-2', fn () => Inertia::render('Berita2'));
Route::get('/berita-3', fn () => Inertia::render('Berita3'));