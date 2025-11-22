<?php

namespace Database\Seeders;

use App\Models\Work;
use Illuminate\Database\Seeder;

class WorkSeeder extends Seeder
{
    public function run(): void
    {
        $path = database_path('seeders/data/mu.txt');
        if (!file_exists($path)) {
            return;
        }
        $rows = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($rows as $index => $row) {
            if ($index === 0) {
                continue;
            }
            $parts = explode(';', $row);
            if (count($parts) < 3) {
                continue;
            }
            $id = (int) $parts[0];
            if ($id <= 0) {
                continue;
            }
            $composer = $parts[1];
            $title = $parts[2];
            Work::updateOrCreate(
                ['id' => $id],
                ['composer' => $composer, 'title' => $title]
            );
        }
    }
}
