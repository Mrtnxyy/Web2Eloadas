<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            SingerSeeder::class,
            WorkSeeder::class,
            RoleSeeder::class,
            RepertoireSeeder::class,
        ]);
    }
}
