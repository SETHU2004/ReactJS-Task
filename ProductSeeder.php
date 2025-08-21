<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder {
    public function run(): void {
        Product::insert([
            ['name'=>'Burger','description'=>'Tasty burger','price'=>120,'image_url'=>'https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Pizza','description'=>'Cheesy pizza','price'=>250,'image_url'=>'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Fried Rice','description'=>'Fried Rice','price'=>150,'image_url'=>'https://shwetainthekitchen.com/wp-content/uploads/2023/06/veg-fried-rice.jpg','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Pasta','description'=>'Italian pasta','price'=>180,'image_url'=>'https://media.istockphoto.com/id/155433174/photo/bolognese-pens.jpg?s=612x612&w=0&k=20&c=A_TBqOAzcOkKbeVv8qSDs0bukfAedhkA458JEFolo_M=','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Paneer Tikka','description'=>'Spicy Paneer Tikka','price'=>150,'image_url'=>'https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-paneer-tikka-featured.jpg','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Veg Noodles','description'=>'Veg Noodles','price'=>100,'image_url'=>'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/veg-noodles-vegetable-noodles-recipe.jpg','created_at'=>now(),'updated_at'=>now()],
             ['name'=>'Veg Momos','description'=>'Momos','price'=>150,'image_url'=>'https://butfirstchai.com/wp-content/uploads/2022/08/beef-momos-recipe.jpg','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Sandwich','description'=>'Grilled Sandwich','price'=>100,'image_url'=>'https://cravinghomecooked.com/wp-content/uploads/2023/07/grilled-cheese-1-13.jpg','created_at'=>now(),'updated_at'=>now()]
        ]);
    }
}
