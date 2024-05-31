export const FindPhotosPopulated = async ({title, albumTitle, albumUserEmail, limit, offset}) => {
    limit = limit ? parseInt(limit) : 25;
    offset = offset ? parseInt(offset) : 0;

    let photos = await FindPhotos();

    // Filter each field separately to reduce requests sent
    if (title)
        photos = photos.filter(photo => photo.title.toLowerCase().includes(title));

    for (const photo of photos) {
        photo.album = await FindAlbum(photo.albumId);
        // Remove albumId property since it is not a part of the expected output
        delete photo.albumId;
    }

    if (albumTitle)
        photos = photos.filter(photo => photo.album.title.toLowerCase().includes(albumTitle));

    for (const photo of photos) {
        photo.album.user = await FindUser(photo.album.userId);
        // Remove userId property since it is not a part of the expected output
        delete photo.album.userId;
    }

    if (albumUserEmail)
        photos = photos.filter(photo => photo.album.user.email.toLowerCase() === albumUserEmail);

    return photos.slice(offset, offset + limit);
};

export const FindPhotoPopulated = async (id) => {
    const photo = await FindPhoto(id);

    photo.album = await FindAlbum(photo.albumId);
    // Remove albumId property since it is not a part of the expected output
    delete photo.albumId;

    photo.album.user = await FindUser(photo.album.userId);
    // Remove userId property since it is not a part of the expected output
    delete photo.album.userId;

    return photo;
};

const FindPhotos = async () => await fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json());

const FindPhoto = async (id) => await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`).then(res => res.json());

const FindAlbum = async (id) => await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`).then(res => res.json());

const FindUser = async (id) => await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());
