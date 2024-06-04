export const FindPhotosPopulated = async ({title, albumTitle, albumUserEmail, limit, offset}) => {
    limit = parseInt(limit ?? process.env.DEFAULT_LIMIT);
    offset = parseInt(offset ?? 0);

    // Get data at start to avoid multiple requests
    const photos = await FindPhotos();
    const albums = await FindAlbums();
    const users = await FindUsers();

    const result = [];
    let skip = 0;

    for (const photo of photos) {
        // Populate photo album and user
        PopulatePhoto(photo, albums, users);

        // Apply filters
        if (
            (!title || photo.title.toLowerCase().includes(title))
            && (!albumTitle || photo.album.title.toLowerCase().includes(albumTitle))
            && (!albumUserEmail || photo.album.user.email.toLowerCase() === albumUserEmail)
        ) {
            // Skip offset count and start adding after offset has been reached
            if (skip < offset)
                skip++;
            else {
                result.push(photo);
                if (result.length === limit)
                    return result;
            }
        }
    }

    return result;
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

// Private methods

const PopulatePhoto = (photo, albums, users) => {
    photo.album = albums.find(a => a.id === photo.albumId);
    // Remove albumId property since it is not a part of the expected output
    delete photo.albumId;

    if (!photo.album.user) {
        photo.album.user = users.find(u => u.id === photo.album.userId);
        // Remove userId property since it is not a part of the expected output
        delete photo.album.userId;
    }
}

const FindPhotos = async () => await fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json());

const FindPhoto = async (id) => await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`).then(res => res.json());

const FindAlbums = async () => await fetch(`https://jsonplaceholder.typicode.com/albums`).then(res => res.json());

const FindAlbum = async (id) => await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`).then(res => res.json());

const FindUsers = async () => await fetch(`https://jsonplaceholder.typicode.com/users`).then(res => res.json());

const FindUser = async (id) => await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());
