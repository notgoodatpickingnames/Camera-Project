import cors from 'cors';
import express from 'express';

import { VideoController } from './controllers/video.controller';

const app = express();
app.use(cors());
const port = 8080; // default port to listen

VideoController(app);

// start the Express server
app.listen(port, () => {
    console.log( `server started at http://localhost:${ port }` );
});