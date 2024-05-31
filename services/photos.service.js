export const FindPhotos = async () => {
    return await fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json());
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
