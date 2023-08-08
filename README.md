# Catechismus

## 🚀 Getting Started

You will need to have [Node.js](https://nodejs.org/en/) installed on your machine. After cloning the repo, follow these steps:

1. Install dependencies: `npm install`
2. Run in local dev mode with hot reload: `npm run dev`
3. Navigate to [localhost:3000](http://localhost:3000) or whatever port is specified in the console output

When you're ready to deploy, follow these steps:

1. Build for production - reveals any compile issues: `npm run build`
2. Run in production (no hot reload): `npm run start`
3. Navigate to [localhost:3000](http://localhost:3000) or whatever port is specified in the console output

## Running the Google Sheet transformers

1. You will need a Google Auth service account with access to the google sheet - [see tutorial](https://www.webdavsystem.com/server/gsuite/service-account/)
2. Use the info from this service account to fill out your `.env` file based on the `.env.example` file
3. Run the scripts via the test cases: `npm run test`
4. They should pull the data and create json files in the `public/` folder

## Structure

- `src/` - This is where the frontend source code lives
- `database/` - This is where any scripts are that pull data from google sheets
- `public/` - This is where static assets live, such as the transformed json data
