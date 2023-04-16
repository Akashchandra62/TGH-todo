import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
  },
  priority: {
    type: Number,
  },
  status: {
    type: String,
    enum: ["completed", "pending", "canceled"],
    default: "pending",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
