// import mongoose from "mongoose";


// const orderSchema=new mongoose.Schema({
//     userId:{type:String,required:true,ref:'user'},
//     items:[{
//         product:{type:String,required:true,ref:'product'},
//         quantity:{type:Number,required:true}
//     }],
//     amount:{type:Number,required:true},
//     address:{type:String,required:true,ref:'address'},
// status: { type: String, required: true, default: 'Order Placed' },    date:{type:Number,required:true},
// })

// const Order=mongoose.models.order || mongoose.model('order',orderSchema)

// export default Order;

import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true, ref: 'User' }, // Optional populate
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product' // ✅ Must match the name used in mongoose.model()
      },
      quantity: { type: Number, required: true }
    }
  ],
  amount: { type: Number, required: true },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Address' // ✅ Must match model name
  },
  status: { type: String, required: true, default: 'Order Placed' },
  date: { type: Number, required: true },
});

// Capitalized model name: 'Order'
const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order;
