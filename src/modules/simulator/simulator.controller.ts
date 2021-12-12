import { Response, Request, NextFunction } from "express";
import {SimulatorService} from "./simulator.service";
import { successResponse } from "../../common/responses/success.response";
import {SUCCESS} from "../../common/constants";
import {StatusCodes} from "../../common/constants/statusCodes";
import {errorResponse} from "../../common/responses/error.response";
import {validateSimulator} from "./validation/simulator.validation";

export class SimulatorController {
     static async getSimulators(req: Request, res: Response, next: NextFunction) {
         try {
             const simulators = await SimulatorService.getSimulators();
             return successResponse({ res, message: SUCCESS, data: simulators, statusCode: StatusCodes.OK })
         } catch (e) {
             return next(e)
         }
     }

     static async getSimulator(req: Request, res: Response, next: NextFunction) {
         const { profile_id } = req.params;
         if (!profile_id) return errorResponse({ res, statusCode: StatusCodes.BAD_REQUEST, message: "Invalid profile id" });

         try {
             const simulator = await SimulatorService.getSimulator(profile_id);
             return successResponse({ res, message: SUCCESS, data: simulator, statusCode: StatusCodes.OK })
         } catch (e) {
             return next(e)
         }
     }

     static async createSimulator(req: Request, res: Response, next: NextFunction) {
         const { error } = validateSimulator(req.body);
         if (error) return errorResponse({ res, statusCode: StatusCodes.BAD_REQUEST, message: error.details[0].message });

         const { profile_id } = req.params;
         if (error) return errorResponse({ res, statusCode: StatusCodes.BAD_REQUEST, message: "Invalid profile id" });

         try {
             const simulator = await SimulatorService.createSimulator(profile_id, req.body);
             return successResponse({ res, message: SUCCESS, data: simulator, statusCode: StatusCodes.CREATED })
         } catch (e) {
             return next(e)
         }
     }
 }