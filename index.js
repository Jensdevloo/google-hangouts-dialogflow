import express from 'express';
import bodyParser from 'body-parser';
import dialogflow from 'dialogflow';

const port = process.env.PORT || 8080;
const app = express();
app.use(bodyParser.json());

const sessionClient = new dialogflow.SessionsClient();
const PROJECT_ID = process.env.PROJECT_ID;

app.post('/webhook', async (request, response) => {
    const { message, user } = request.body;

    let sessionPath = sessionClient.sessionPath(PROJECT_ID, user.name.substr(6)); //substr to remove 'users/' from name and have int as sessionID

    const dialogflow_request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: message.text,
            languageCode: 'en-US',
            },
        }
    };

    let responses = await sessionClient.detectIntent(dialogflow_request);
    const response_message = {
        text: responses.length && responses[0].queryResult.fulfillmentText
    };

    response.json(response_message);
  });
  
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});