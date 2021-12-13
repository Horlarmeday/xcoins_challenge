import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema(
  {
    profile_id: { type: Schema.Types.ObjectId, ref: 'Profile' },
    dateRecorded: { type: Date },
    cryptocurrency: { type: String },
    euros: { type: Number },
    price: { type: Number },
    quantity: { type: Number },
  },
  {
    timestamps: true,
  }
);

export const Simulator = mongoose.model('Simulator', schema);
