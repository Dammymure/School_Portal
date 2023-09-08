const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
 name:{
  type:String,
  required:true
 },
 email:{
  type: String,
  required:true
 },
 password:{
  type: String,
  required:true
 },
 class:{
  type: String,
  required:true
 }
},
{
 timestamps: true,
}
)