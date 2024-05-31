import { Router } from "express";
import { query } from "express-validator";
import { GetPhotos, GetPhoto } from "../controllers/photos.controller.js";
import { ValidateRequest } from "../middlewares/validate-request.js";

const PhotosRouter = Router();

PhotosRouter.get(
    '/',
    [
        query('title').trim().toLowerCase(),
        query('album.title').trim().toLowerCase(),
        query('album.user.email').trim().toLowerCase(),
        query('limit', 'Limit must be a positive number lesser or equal to 100').isInt({ min:1, max: 100 }).optional(),
        query('offset', 'Offset must be a number greater or equal to 0').isInt({ min:0 }).optional(),
        ValidateRequest
    ],
    GetPhotos
);

PhotosRouter.get('/:id', GetPhoto);

export { PhotosRouter };
