import { Router } from "express";
import PhotosRouter from "./photos.route.js";

const AppRouter = Router();

AppRouter.use('/photos', PhotosRouter);

export default AppRouter;
