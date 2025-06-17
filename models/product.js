// import mongoose from "mongoose";
// const productSchema =new mongoose.Schema({
//     userId:{type:String,required:true,ref:"user"},
//     name:{type:String,required:true},
//     description:{type:String,required:true},
//     price:{type:Number,required:true},
//     offerprice:{type:Number,required:true},
//     image:{type:Array,required:true},
//     category:{type:String,required:true},
//     date:{type:Number,required:true}
   
// })
// const Product=mongoose.models.product || mongoose.model('product',productSchema)
// export default Product;
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  userId: { type: String, required: true, ref: "User" }, // optional ref fix
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  offerprice: { type: Number, required: true },
  image: { type: Array, required: true },
  category: { type: String, required: true },
  date: { type: Number, required: true }
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema); // ✅ Capital 'P'
export default Product;
