<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller {
    public function index() {
        $orders = Order::with('product')->orderBy('created_at', 'desc')->get();
        return response()->json($orders);
    }

    public function store(Request $request) {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
        ]);

        $order = Order::create([
            'product_id' => $request->product_id,
            'quantity' => $request->quantity
        ]);

        $order->load('product');

        return response()->json([
            'success' => true,
            'message' => 'Order placed successfully!',
            'order' => $order
        ]);
    }
}
