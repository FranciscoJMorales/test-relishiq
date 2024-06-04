export const FindPhotos = async () => await fetch(`https://jsonplaceholder.typicode.com/photos`).then(res => res.json());

export const FindPhoto = async (id) => await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`).then(res => res.json());
