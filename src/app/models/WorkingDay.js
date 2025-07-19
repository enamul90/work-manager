import mongoose, { Schema, models } from 'mongoose';

const WorkingDaySchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tittle: { type: String, required: true },
},
    { timestamps: true });

const WorkingDay = models.WorkingDay || mongoose.model('WorkingDay', WorkingDaySchema);
export default WorkingDay;