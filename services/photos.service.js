export const FindPhotos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    return response.json();
};

export const FindPhoto = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    return response.json();
};
