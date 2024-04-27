<?php

namespace Database\Seeders;

use App\Models\Group;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
      

        User::factory()->create([
            'name' => 'John doe',
            'email' => 'john@example.com',
            'password' => bcrypt('password'),
            'is_admin' => true
        ]);
        User::factory()->create([
            'name' => 'Jane doe',
            'email' => 'jane@example.com',
            'password' => bcrypt('password'),
            'is_admin' => true
        ]);

        User::factory(10)->create();
        for ($i=0; $i < 5 ; $i++) { 

            $group = Group::factory()->create([
                    'owner_id' => 1
            ]);
            $users = User::inRandomOrder()->limit(rand(2,5));

            $group->users()->attach([1,...$users]);
            
        }
    }
}
