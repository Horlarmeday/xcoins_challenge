import { createProfile, getProfile, getProfiles } from './profile.repository';
import { Profile } from './profile.interface';

export class ProfileService {
  static async getProfiles(): Promise<Profile[]> {
    return getProfiles();
  }

  static async findOrCreateProfile(body): Promise<Profile> {
    const { email, nickname } = body;

    let profile = await getProfile(email, nickname);
    if (!profile) profile = await createProfile(body);

    return profile;
  }
}
