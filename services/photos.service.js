export const FindPhotos = async ({title, albumTitle, albumUserEmail, limit, offset}) => {
    limit = limit ? parseInt(limit) : 25;
    offset = offset ? parseInt(offset) : 0;

    const photos = await fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json());
    
    return photos.slice(offset, offset + limit);
};

export const FindPhoto = async (id) => {
    const photo = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`).then(res => res.json());
    photo.album = await FindAlbum(photo.albumId);
    // Remove albumId property since it is not a part of the expected output
    delete photo.albumId;
    return photo;
};

const FindAlbum = async (id) => {
    const album = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`).then(res => res.json());
    album.user = await FindUser(album.userId);
    // Remove userId property since it is not a part of the expected output
    delete album.userId;
    return album;
}

const FindUser = async (id) => await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());
