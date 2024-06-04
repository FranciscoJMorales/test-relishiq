export const FindAlbums = async () => await fetch(`${process.env.DATA_URL}/albums`).then(res => res.json());

export const FindAlbum = async (id) => await fetch(`${process.env.DATA_URL}/albums/${id}`).then(res => res.json());
