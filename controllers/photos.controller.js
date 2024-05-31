import { FindPhotosPopulated, FindPhotoPopulated } from "../services/photos.service.js";

export const GetPhotos = async (req, res) => {
    const photos = await FindPhotosPopulated(req.query);
    res.status(200).json(photos);
};

export const GetPhoto = async (req, res) => {
    const { id } = req.params;
    const photo = await FindPhotoPopulated(id);
    res.status(200).json(photo);
};
