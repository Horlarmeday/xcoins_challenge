import { Response } from "express";

export type SuccessResponse<T = any> = {
    success: boolean;
    message: string;
    data: T;
};

type SuccessResponseProps = {
    res: Response;
    statusCode: number;
    data: any;
    message: string;
}

export const successResponse = ({ res, statusCode, data, message }: SuccessResponseProps) => {
    return res.status(statusCode).json({ success: true, message, data });
};