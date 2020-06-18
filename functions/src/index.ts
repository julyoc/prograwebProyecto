import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';

const server = express();

(async () => {
    await admin.initializeApp({
        credential: admin.credential.cert(require("../serviceAccountKey.json")),
        databaseURL: "https://proyecto-web-freelancer.firebaseio.com"
    });
    await server.use('/api/v0', require('./controllers').rutes);
})();


export const app = functions.https.onRequest(server);


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
