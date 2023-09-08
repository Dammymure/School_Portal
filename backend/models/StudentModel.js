const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
 name:{
  type:String,
  required:true
 },
 email:{
  type: String,
  required:true
 },
 class:{
  type: String,
  required:true
 },
  assignments: [
   {
     // class:{type:String},
     assignment: { type: mongoose.Schema.Types.ObjectId, ref:'Assignment' },
     completed: { type: Boolean, default: false }
   }
 ],
  subjects: [
   {
     name: { type: String, required: true },
     score: { type: Number, default: 0 }
   }
 ],
 
},
{
 timestamps: true,
}
)