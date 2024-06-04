import { FindPhotosPopulated, FindPhotoPopulated } from "../services/photos.service.js";

export const GetPhotos = async (req, res) => {
    try {
        // Rename query params for easier destructuring
        req.query.albumTitle = req.query['album.title'];
        req.query.albumUserEmail = req.query['album.user.email'];
        const photos = await FindPhotosPopulated(req.query);
        res.status(200).json(photos);
    }
    catch {
        res.status(500).json({
            statusCode: 500,
            message: 'An unexpected error has occurred. Please try again later',
        });
    }
};

export const GetPhoto = async (req, res) => {
    try {
        const { id } = req.params;
        const photo = await FindPhotoPopulated(id);
        res.status(200).json(photo);
    }
    catch {
        res.status(500).json({
            statusCode: 500,
            message: 'An unexpected error has occurred. Please try again later',
        });
    }
};
