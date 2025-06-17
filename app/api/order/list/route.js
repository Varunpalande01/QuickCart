// import connectDB from "@/config/db";
// import Addresss from "@/models/Address";
// import Order from "@/models/Order";
// import Product from "@/models/product";
// import { getAuth } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";



// export async function GET(request) {
//     try {
//         const{userId}=getAuth(request)
//         await connectDB()
//        Addresss.length
//         Product.length

//         const orders=await Order.find({userId}).populate("address").populate("items.product");
//         return NextResponse.json({success:true,orders})
//     } catch (error) {
//         return NextResponse.json({success:false,message:error.message})
//     }
// }
import connectDB from "@/config/db";
import Order from "@/models/Order";
import Product from "@/models/product"; // Needed for population
import Address from "@/models/Address"; // Optional: only if you're validating data
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { userId } = getAuth(request);
    await connectDB();

    // ✅ Fetch and populate the orders
    const orders = await Order.find({ userId })
      .populate("items.product")     // Populates each product inside items
      .populate("address");          // Populates the address object

    return NextResponse.json({ success: true, orders });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
