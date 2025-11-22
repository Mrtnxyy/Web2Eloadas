<?php

namespace Database\Seeders;

use App\Models\Singer;
use Illuminate\Database\Seeder;

class SingerSeeder extends Seeder
{
    public function run(): void
    {
        $path = database_path('seeders/data/enekes.txt');
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
            $name = $parts[1];
            $birthYear = is_numeric($parts[2]) ? (int) $parts[2] : null;
            Singer::updateOrCreate(
                ['id' => $id],
                ['name' => $name, 'birth_year' => $birthYear]
            );
        }
    }
}
