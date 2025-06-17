// 
import { inngest } from "@/config/inngest";
import Product from "@/models/product";
import User from "@/models/User";
import Order from "@/models/Order"; // ✅ Import your Order model
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { userId } = getAuth(request);
    const { address, items } = await request.json();

    if (!address || items.length === 0) {
      return NextResponse.json({ success: false, message: "Invalid data" });
    }

    // ✅ Calculate amount correctly
    let amount = 0;
    for (const item of items) {
      const product = await Product.findById(item.product);
      if (!product) {
        return NextResponse.json({ success: false, message: "Invalid product" });
      }
      amount += product.offerprice * item.quantity;
    }

    const totalAmount = amount + Math.floor(amount * 0.02);

    // ✅ Save order to DB
    await Order.create({
      userId,
      address,
      amount: totalAmount,
      items,
      date: Date.now(),
      status: "Order Placed",
    });

    // 🔁 Optional: Track event (you can remove this if not needed)
    await inngest.send({
      name: "order/created",
      data: {
        userId,
        address,
        amount: totalAmount,
        items,
        date: Date.now(),
      },
    });

    // ✅ Clear user cart
    const user = await User.findById(userId);
    user.cartItems = {};
    await user.save();

    return NextResponse.json({ success: true, message: "Order placed" });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
