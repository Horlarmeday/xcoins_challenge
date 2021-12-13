import { Router } from 'express';
import { ProfileController } from './profile.controller';

const router = Router();

router.route('/').get(ProfileController.getProfiles).post(ProfileController.findOrCreateProfile);

export default router;
