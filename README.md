# Google Hangouts - Dialogflow adapter

Simple NodeJS snippet that acts as a webhook to send incoming messages from Google Hangouts Chat API to Dialogflow API and vice versa.

## Environment variables

* PORT: specify port on which express server is listening, defaults to 8080
* GOOGLE_APPLICATION_CREDENTIALS: Dialogflow service account for authentication towards the project (can be found in Dialogflow under General Settings)
* PROJECT_ID: Google Dialogflow project ID (can be found in Dialogflow under General Settings)

## Run locally

Steps to be taken to run locally

1. Download service account from Dialogflow project (can be found in Dialogflow under General Settings)
2. Store service account in root directory as `sa.json` or update the `yarn start` command in `package.json`
3. Set environment variable, cf above
4. Setup reverse proxy tunnel to local machine, e.g. using `ngrok` (ngrok.com)
5. Start the server:

```
yarn install
yarn start
```

## Run as docker container

```
docker build -t <your username>/hangoutswebhook .
docker run -p <local port>:<docker port> -d <your username>/hangoutswebhook
```