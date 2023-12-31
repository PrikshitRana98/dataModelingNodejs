import mongoose from 'mongoose';

const subTodos = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      tyoe: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model('SubTodo', subTodos);