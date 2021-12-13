import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, required: true },
  nickname: { type: String, required: true },
  email: { type: String, required: true },
  capital: { type: Number, optional: true },
  divisa: { type: String, optional: true },
  prefered_cryptocurrency: { type: String, optional: true },
});

export const Profile = mongoose.model('Profile', schema);
