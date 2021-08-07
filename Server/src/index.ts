import cors from 'cors';
import express from 'express';

import { VideoController } from './controllers/video.controller';
import { DbClient } from './utils/db.client';

const app = express();
app.use(cors());
const port = 8080; // default port to listen

const dbClient = new DbClient();

VideoController(app, dbClient);

// start the Express server
app.listen(port, () => {
    console.log( `server started at http://localhost:${ port }` );
});