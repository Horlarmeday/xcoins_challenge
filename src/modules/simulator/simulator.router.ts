import { Router } from 'express';
import { SimulatorController } from './simulator.controller';

const router = Router();

router
  .route('/:profile_id')
  .get(SimulatorController.getSimulator)
  .post(SimulatorController.createSimulator);

router.get('/', SimulatorController.getSimulators);

export default router;
