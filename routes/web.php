<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;

Route::middleware(['auth', 'role:admin'])->get('/admin', function () {
    return Inertia::render('Admin');
});

Route::middleware(['auth'])->get('/diagram', function () {
    $data = \App\Models\Role::selectRaw('voice, COUNT(*) as count')->groupBy('voice')->get();
    return Inertia::render('Diagram', ['chartData' => $data]);
});

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/singers', function () {
    return Inertia::render('Singers', [
        'items' => \App\Models\Singer::all(),
    ]);
});

Route::get('/works', function () {
    return Inertia::render('Works', [
        'items' => \App\Models\Work::all(),
    ]);
});

Route::get('/roles', function () {
    return Inertia::render('Roles', [
        'items' => \App\Models\Role::all(),
    ]);
});

Route::middleware(['auth'])->group(function () {

    Route::get('/contact', function () {
        return Inertia::render('Contact');
    });

    Route::post('/contact', function (Request $request) {
        $data = $request->validate([
            'subject' => 'required',
            'body' => 'required',
        ]);

        \App\Models\Message::create([
            'user_id' => auth()->id(),
            'subject' => $data['subject'],
            'body' => $data['body'],
        ]);

        return back();
    });

    Route::get('/messages', function () {
        $messages = \App\Models\Message::orderBy('created_at', 'desc')->get();

        return Inertia::render('Messages', [
            'items' => $messages,
        ]);
    });
});

Route::middleware(['auth', 'role:admin'])->group(function () {

    Route::get('/singers-crud', function () {
        $items = \App\Models\Singer::orderBy('name')->get();
        return Inertia::render('SingersCrud', ['items' => $items]);
    });

    Route::get('/singers-crud/create', function () {
        return Inertia::render('SingersCreate');
    });

    Route::post('/singers-crud', function (Request $request) {
        $data = $request->validate([
            'name' => 'required',
            'birth_year' => 'nullable|integer',
        ]);

        \App\Models\Singer::create($data);

        return redirect('/singers-crud');
    });

    Route::get('/singers-crud/{id}/edit', function (int $id) {
        $item = \App\Models\Singer::findOrFail($id);
        return Inertia::render('SingersEdit', ['item' => $item]);
    });

    Route::put('/singers-crud/{id}', function (Request $request, int $id) {
        $data = $request->validate([
            'name' => 'required',
            'birth_year' => 'nullable|integer',
        ]);

        $item = \App\Models\Singer::findOrFail($id);
        $item->update($data);

        return redirect('/singers-crud');
    });

    Route::delete('/singers-crud/{id}', function (int $id) {
        \App\Models\Singer::where('id', $id)->delete();
        return redirect('/singers-crud');
    });
});

Route::middleware(['auth', 'verified'])->get('/dashboard', function () {
    return Inertia::render('dashboard', [
        'singerCount' => \App\Models\Singer::count(),
        'workCount'   => \App\Models\Work::count(),
        'roleCount'   => \App\Models\Role::count(),
    ]);
})->name('dashboard');

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
