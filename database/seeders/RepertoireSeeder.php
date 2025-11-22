<?php

namespace Database\Seeders;

use App\Models\RepertoireEntry;
use Illuminate\Database\Seeder;

class RepertoireSeeder extends Seeder
{
    public function run(): void
    {
        $path = database_path('seeders/data/repertoar.txt');
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
            $singerId = is_numeric($parts[0]) ? (int) $parts[0] : null;
            $roleId = is_numeric($parts[1]) ? (int) $parts[1] : null;
            $lastYear = is_numeric($parts[2]) ? (int) $parts[2] : null;
            if ($singerId === null || $roleId === null) {
                continue;
            }
            RepertoireEntry::updateOrCreate(
                ['singer_id' => $singerId, 'role_id' => $roleId],
                ['last_year' => $lastYear]
            );
        }
    }
}
