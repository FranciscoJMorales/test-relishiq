# Test Relish (Backend)

## Requirements

- Node v22.1.0

## Quickstart

1. Run `npm install` in the base directory.
2. Rename the `.env.test` file to `.env` in the base directory.
3. Run `npm run dev` for a dev server. The server will open in `http://localhost:3000/`.

## Deployment

This project is dockerized for an easier deployment. Having docker installed:

- Remember to have the `.env.production.local` file with production values in the base directory.
- Run `docker build -t <user>/<repository> .` to build the image and assign its tag.
- Run `docker run --name <name> -d -p 3000:80 <user>/<repository>` to run a container with the image. The host port can be changed.

This repository also includes a `docker-compose.yml` file to simplify deployment in a server.

In the same directory as the `docker-compose.yml` file, run the command `docker-compose up -d` to run both the backend and the frontend in a production environment.
