export const FindAlbums = async () => await fetch(`https://jsonplaceholder.typicode.com/albums`).then(res => res.json());

export const FindAlbum = async (id) => await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`).then(res => res.json());
