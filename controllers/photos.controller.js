import { FindPhotos, FindPhoto } from "../services/photos.service.js";

export const GetPhotos = async (req, res) => {
    const photos = await FindPhotos(req.query);
    res.status(200).json(photos);
};

export const GetPhoto = async (req, res) => {
    const { id } = req.params;
    const photo = await FindPhoto(id);
    res.status(200).json(photo);
};
