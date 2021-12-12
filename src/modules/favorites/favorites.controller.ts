import { Request, Response, NextFunction } from "express"
import { successResponse } from "../../common/responses/success.response";
import { FavoritesService } from "./favorites.service";
import { SUCCESS } from "../../common/constants";
import { StatusCodes } from "../../common/constants/statusCodes";
import { errorResponse } from "../../common/responses/error.response";

export class FavoritesController {
    /**
     * get all favorites
     *
     * @static
     * @param {object} req express request object
     * @param {object} res express response object
     * @param {object} next next middleware
     * @returns {json} json object with status, favorites data
     */
    static async getFavorites(req: Request, res: Response, next: NextFunction) {
        try {
            const favorites = await FavoritesService.getFavorites();
            return successResponse({ res, data: favorites, message: SUCCESS, statusCode: StatusCodes.OK  })
        } catch (e) {
           return next(e)
        }
    }

    /**
     * get a favorite
     *
     * @static
     * @param {object} req express request object
     * @param {object} res express response object
     * @param {object} next next middleware
     * @returns {json} json object with status, favorite data
     */
    static async getFavorite(req: Request, res: Response, next: NextFunction) {
        const { profile_id } = req.params;
        if (!profile_id) return errorResponse({ res, statusCode: StatusCodes.BAD_REQUEST, message: "Invalid profile id" });

        try {
            const favorite = await FavoritesService.getFavorite(profile_id);
            return successResponse({ res, data: favorite, message: SUCCESS, statusCode: StatusCodes.OK })
        } catch (e) {
          return next(e)
        }
    }
}