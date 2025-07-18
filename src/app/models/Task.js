import mongoose, { Schema, models } from 'mongoose';

const taskSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
}, { timestamps: true });

const Task = models.Task || mongoose.model('Task', taskSchema);
export default Task;