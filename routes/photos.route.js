import { Router } from "express";
import { query } from "express-validator";
import { GetPhotos, GetPhoto } from "../controllers/photos.controller.js";

const PhotosRouter = Router();

PhotosRouter.get('/', [query('count', 'Test').isInt()], GetPhotos);
PhotosRouter.get('/:id', GetPhoto);

export { PhotosRouter };
