<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        $path = database_path('seeders/data/szerep.txt');
        if (!file_exists($path)) {
            return;
        }
        $rows = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($rows as $index => $row) {
            if ($index === 0) {
                continue;
            }
            $parts = explode(';', $row);
            if (count($parts) < 4) {
                continue;
            }
            $id = (int) $parts[0];
            if ($id <= 0) {
                continue;
            }
            $name = $parts[1];
            $workId = is_numeric($parts[2]) ? (int) $parts[2] : null;
            $voice = $parts[3] !== '' ? $parts[3] : null;
            if ($workId === null) {
                continue;
            }
            Role::updateOrCreate(
                ['id' => $id],
                ['name' => $name, 'work_id' => $workId, 'voice' => $voice]
            );
        }
    }
}
