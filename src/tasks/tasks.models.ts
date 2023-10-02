import { Schema, model } from 'mongoose';

export interface TaskDocument {
    title: string;
    description?: string;
}

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
})

export default model<TaskDocument>('Task', taskSchema);