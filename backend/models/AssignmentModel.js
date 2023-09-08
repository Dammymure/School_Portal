const mongoose = require('mongoose')

const assignmentSchema = new mongoose.Schema({

  assignments: [{
    class:{type:String},
     assignment: { type: String},
     completed: { type: Boolean, default: false }
   }
 ]
},
{
 timestamps: true,
}
)

const AssignmentModel = model("assignment", assignmentSchema)
module.exports = AssignmentModel