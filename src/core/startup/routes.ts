import express from "express";
import favoriteRouter from "../../modules/favorites/favorite.router";
import profileRouter from "../../modules/profile/profile.router";
import simulatorRouter from "../../modules/simulator/simulator.router";
import { StatusCodes } from "../../common/constants/statusCodes";

export default (server: express.Application) => {
    server.use("/api/favorite", favoriteRouter);
    server.use("/api/profile", profileRouter);
    server.use("/api/simulator", simulatorRouter);
    server.use((req, res, next) => {
        const err = res
            .status(StatusCodes.NOT_FOUND)
            .json({ success: false, statusCode: StatusCodes.NOT_FOUND, message: 'Resource does not exist' });
        next(err);
    });
}