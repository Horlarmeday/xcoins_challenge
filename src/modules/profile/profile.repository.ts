import { Profile } from '../../models/Profile';

export const createProfile = async (data) => {
  const { email, name, nickname } = data;
  return await Profile.create({ email, name, nickname });
};

export const getProfiles = async () => await Profile.find().lean();

export const getProfile = async (email: string, nickname: string) => {
  return await Profile.findOne({ $or: [{ email }, { nickname }] }).exec();
};
