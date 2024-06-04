export const FindPhotos = async () => await fetch(`${process.env.DATA_URL}/photos`).then(res => res.json());

export const FindPhoto = async (id) => await fetch(`${process.env.DATA_URL}/photos/${id}`).then(res => res.json());
