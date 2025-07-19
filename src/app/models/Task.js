import mongoose, { Schema, models } from 'mongoose';

const taskSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tittle: { type: String, required: true },
},
    { timestamps: true });

const Task = models.Task || mongoose.model('Task', taskSchema);
export default Task;