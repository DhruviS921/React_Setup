# Clockify Extracts (Redesign)

This project is a React application designed to analyze and visualize employee data using the Clockify API. It interacts with the Clockify API to fetch relevant information, performs calculations, and presents the processed data in an informative and user-friendly manner.

## Prerequisties

- Node.js v16.0+
- npm v8.0+ (generally comes with Node.js)
- Optional: Code editor, Git for version control

## Project Config

This project uses Vite for development and build, along with TypeScript for type safety. Linting, formatting, and commit checks are enforced through ESLint, Prettier, and Husky, respectively.

### Configuration files:

- package.json: Contains scripts for development, build, lint, and other tasks.
- tsconfig.json: Configures TypeScript compiler options.
- eslint.config.js: Defines ESLint rules and configurations.
- prettier.config.js: Defines Prettier formatting rules.
- commitlint.config.js: Configures rules for validate commit message.

### Folder Structure

```sh
src
|
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- routes            # routes configuration
|
+-- types             # base types used across the application
|
+-- utils             # shared utility functions
```

## Installation Guide

- Clone the project

using ssh

```bash
  git clone git@github.com:Clockify-Redesign/clockify-extracts-redesign.git
```

or using https

```bash
  git clone https://github.com/Clockify-Redesign/clockify-extracts-redesign.git
```

- Install dependencies

```bash
npm install
```

- Provide Environment Variables in project root directory(Environment variables)

```bash
touch .env
gedit .env
```

- Start server

```bash
npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_APP_API_BASE_URL` : Backend Server URL

```bash
VITE_APP_API_BASE_URL=insertYourBackendUrlHere
```

## Contributing Guide

Contributions are always welcome! If you have any ideas, suggestions, fixes, feel free to contribute. You can do that by going through the following steps:

- Clone this repo
- Create a branch: `git checkout -b your-feature`
- Make some changes
- Test your changes
- Push your branch and open a PR
