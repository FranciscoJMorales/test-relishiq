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
        query('limit', 'Limit must be a number greater to 0 and lesser or equal to 5000').isInt({ min:1, max: 5000 }).optional(),
        query('offset', 'Offset must be a number greater or equal to 0 and lesser to 5000').isInt({ min:0, max: 4999 }).optional(),
        ValidateRequest
    ],
    GetPhotos
);

PhotosRouter.get('/:id', GetPhoto);

export default PhotosRouter;
