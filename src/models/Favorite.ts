import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema(
  {
    profile_id: { type: Schema.Types.ObjectId, ref: 'Profile' },
    name: { type: String },
    favorite1: { type: String },
    favorite2: { type: String },
    favorite3: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Favorite = mongoose.model("Favorite", schema);
