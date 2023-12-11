import { Schema, model } from 'mongoose';
import { TCourse } from './course.interface';

const CourseSchema = new Schema<TCourse>({
  title: {
    type: String,
    required: [true, 'Title is required'],
    unique: true,
    trim: true,
  },
  instructor: {
    type: String,
    required: [true, 'Instructor is required'],
    trim: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, 'Category is required'],
  },
  price: { type: Number, required: [true, 'Price is required'] },
  tags: [
    {
      name: { type: String, required: [true, 'Tag name is required'] },
      isDeleted: { type: Boolean, default: false },
    },
  ],
  startDate: { type: String, required: [true, 'Start date is required'] },
  endDate: { type: String, required: [true, 'End date is required'] },
  language: { type: String, required: [true, 'Language is required'] },
  provider: { type: String, required: [true, 'Provider is required'] },
  details: {
    level: { type: String, required: [true, 'Level is required'] },
    description: { type: String, required: [true, 'Description is required'] },
  },
});

export const Course = model<TCourse>('Course', CourseSchema);
