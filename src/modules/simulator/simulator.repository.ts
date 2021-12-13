import { Simulator } from '../../models/Simulator';
import { Simulator as SimulatorInterface } from './simulator.interface';

export const getSimulators = async () => await Simulator.find().lean();

export const getSimulator = async (profile_id: string) => await Simulator.findOne({ profile_id });

export const createSimulator = async (data: SimulatorInterface) => {
  const { price, cryptocurrency, dateRecorded, euros, profile_id, quantity } = data;
  return await Simulator.create({
    price,
    cryptocurrency,
    dateRecorded,
    euros,
    profile_id,
    quantity,
  });
};
