import { response } from "express";
import { validationResult } from "express-validator";

export const ValidateRequest = (req, res = response, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({
            statusCode: 400,
            message: 'The request is invalid. Please fix the specified fields',
            fields: errors.mapped(),
        });
    next();
};
