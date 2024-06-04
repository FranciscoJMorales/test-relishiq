export const FindUsers = async () => await fetch(`https://jsonplaceholder.typicode.com/users`).then(res => res.json());

export const FindUser = async (id) => await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());
