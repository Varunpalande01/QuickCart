import { inngest } from "@/config/inngest";
import Product from "@/models/product";
import User from "@/models/User";
import { getAuth} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function POST(request) {
    try {
        const{userId}= getAuth()
        const {address,items}= await request.json();
        if (!address || items.length ===0) {
            return NextResponse.json({success:false,message:'Invaild data'})
        }
        const amount = await items.reduce(async(acc,item)=>{
            const product =await Product.findById(item.product);
            return acc + product.offerprice * item.quantity;
        },0)

        await inngest.send({
            name:'order/created',
            data:{
                userId,
                address,
                amount :amount+ Math.floor(amount*0.02),
                items,
                date :Date.now()

            }
        })
        // clear user cart 
        const user= await User.findById(userId)
        user.cartItems={}
        await user.save()
        return NextResponse.json({success:true,message:'order placed'})

    } catch (error) {
        return NextResponse.json({success:false,message:error.message})

    }
    
}