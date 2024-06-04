export const FindUsers = async () => await fetch(`${process.env.DATA_URL}/users`).then(res => res.json());

export const FindUser = async (id) => await fetch(`${process.env.DATA_URL}/users/${id}`).then(res => res.json());
