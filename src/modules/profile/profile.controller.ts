import { NextFunction, Request, Response } from "express";
import { ProfileService } from "./profile.service";
import { successResponse } from "../../common/responses/success.response";
import { SUCCESS } from "../../common/constants";
import { StatusCodes } from "../../common/constants/statusCodes";
import {validateProfile} from "./validation/profile.validation";
import {errorResponse} from "../../common/responses/error.response";

export class ProfileController {
    static async getProfiles(req: Request, res: Response, next: NextFunction) {
        try {
            const profiles = await ProfileService.getProfiles();
            return successResponse({ res, data: profiles, message: SUCCESS, statusCode: StatusCodes.OK  })
        } catch (e) {
            next(e)
        }
    }

    static async findOrCreateProfile(req: Request, res: Response, next: NextFunction) {
        const { error } = validateProfile(req.body);
        if (error) return errorResponse({ res, statusCode: StatusCodes.BAD_REQUEST, message: error.details[0].message });

        try {
            const profile = await ProfileService.findOrCreateProfile(req.body);
            return successResponse({ res, data: profile, message: SUCCESS, statusCode: StatusCodes.OK  })
        } catch (e) {
            next(e)
        }
    }
}