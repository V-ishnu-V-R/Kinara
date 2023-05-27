import mongoose from "mongoose";
const studentSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    totalMarks: {
      type: Number,
      requrired: true,
    },
  },
  { timeStamps: true }
);
const studentModel = mongoose.model("Students", studentSchema);
export default studentModel;
