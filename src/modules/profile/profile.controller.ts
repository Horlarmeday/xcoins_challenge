import { NextFunction, Request, Response } from "express";
import { ProfileService } from "./profile.service";
import { successResponse } from "../../common/responses/success.response";
import { SUCCESS } from "../../common/constants";
import { StatusCodes } from "../../common/constants/statusCodes";
import {validateProfile} from "./validation/profile.validation";
import {errorResponse} from "../../common/responses/error.response";

export class ProfileController {
    /**
     * get all profiles
     *
     * @static
     * @param {object} req express request object
     * @param {object} res express response object
     * @param {object} next next middleware
     * @returns {json} json object with status, profiles data
     */
    static async getProfiles(req: Request, res: Response, next: NextFunction) {
        try {
            const profiles = await ProfileService.getProfiles();
            return successResponse({ res, data: profiles, message: SUCCESS, statusCode: StatusCodes.OK  })
        } catch (e) {
            return next(e)
        }
    }

    /**
     * find or create a profile
     *
     * @static
     * @param {object} req express request object
     * @param {object} res express response object
     * @param {object} next next middleware
     * @returns {json} json object with status, profile data
     */
    static async findOrCreateProfile(req: Request, res: Response, next: NextFunction) {
        const { error } = validateProfile(req.body);
        if (error) return errorResponse({ res, statusCode: StatusCodes.BAD_REQUEST, message: error.details[0].message });

        try {
            const profile = await ProfileService.findOrCreateProfile(req.body);
            return successResponse({ res, data: profile, message: SUCCESS, statusCode: StatusCodes.OK  })
        } catch (e) {
            return next(e)
        }
    }
}