import mongoose, { Schema, model, models } from 'mongoose';

export interface IKoi {
  name: string;
  breed: string;
  variety: string;
  price: number;
  size: string;
  age: string;
  breeder: mongoose.Types.ObjectId;
  breederName: string;
  image: string;
  description: string;
  available: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const KoiSchema = new Schema<IKoi>(
  {
    name: {
      type: String,
      required: [true, 'Koi name is required'],
      trim: true,
    },
    breed: {
      type: String,
      required: [true, 'Breed is required'],
      trim: true,
    },
    variety: {
      type: String,
      required: [true, 'Variety is required'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: 0,
    },
    size: {
      type: String,
      required: [true, 'Size is required'],
    },
    age: {
      type: String,
      required: [true, 'Age is required'],
    },
    breeder: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    breederName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Koi = models.Koi || model<IKoi>('Koi', KoiSchema);

export default Koi;
