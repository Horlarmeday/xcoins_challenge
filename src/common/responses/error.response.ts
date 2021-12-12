import {Response} from "express";

type ErrorResponse = {
    res: Response;
    statusCode: number;
    message: string
}

export const errorResponse = ({ res, statusCode, message }: ErrorResponse) => {
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message: statusCode === 500 ? 'internal server error' : message,
    });
};
