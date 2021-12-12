import { Response, Request, NextFunction } from "express";
import {SimulatorService} from "./simulator.service";
import { successResponse } from "../../common/responses/success.response";
import {SUCCESS} from "../../common/constants";
import {StatusCodes} from "../../common/constants/statusCodes";
import {errorResponse} from "../../common/responses/error.response";
import {validateSimulator} from "./validation/simulator.validation";

export class SimulatorController {
    /**
     * get all simulators
     *
     * @static
     * @param {object} req express request object
     * @param {object} res express response object
     * @param {object} next next middleware
     * @returns {json} json object with status, simulators data
     */
     static async getSimulators(req: Request, res: Response, next: NextFunction) {
         try {
             const simulators = await SimulatorService.getSimulators();
             return successResponse({ res, message: SUCCESS, data: simulators, statusCode: StatusCodes.OK })
         } catch (e) {
             return next(e)
         }
     }

    /**
     * get a simulator
     *
     * @static
     * @param {object} req express request object
     * @param {object} res express response object
     * @param {object} next next middleware
     * @returns {json} json object with status, simulator data
     */
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

    /**
     * create a simulator
     *
     * @static
     * @param {object} req express request object
     * @param {object} res express response object
     * @param {object} next next middleware
     * @returns {json} json object with status, simulator data
     */
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