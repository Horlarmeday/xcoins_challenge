import { createSimulator, getSimulator, getSimulators } from './simulator.repository';
import { Simulator } from './simulator.interface';
import { BadException } from '../../common/util/BadException';

export class SimulatorService {
  static async getSimulators(): Promise<Simulator[]> {
    return getSimulators();
  }

  static async getSimulator(profile_id: string): Promise<Simulator> {
    const simulator = await getSimulator(profile_id);
    if (!simulator) throw new BadException(404, 'Cannot find resource');
    return simulator;
  }

  static async createSimulator(profile_id: string, body) {
    const newSimulator = { ...body, profile_id };
    return createSimulator(newSimulator);
  }
}
