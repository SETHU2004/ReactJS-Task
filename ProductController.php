<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller {
    public function index() {
        return response()->json(Product::all());
    }

    public function show($id) {
        $product = Product::find($id);
        if (!$product) return response()->json(['error'=>'Product not found'], 404);
        return response()->json($product);
    }
}
