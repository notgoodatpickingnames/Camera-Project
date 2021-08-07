import cors from 'cors';
import { Express, Request, Response } from 'express';
import fileStream from 'fs';
import multer from 'multer';

import { DbClient } from '../utils/db.client';

export function VideoController(app: Express, dbClient: DbClient): void {
    app.get('/video', ( request: Request, response: Response ) => {
        const path = 'videos/Video.mp4';
        const range = request.headers.range;

        const stat = fileStream.statSync(path);
        const fileSize = stat.size;

        if (range) {
            const parts = range.replace(/bytes=/, '').split('-');
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
            const chunksize = (end - start) + 1;
            const file = fileStream.createReadStream(path, {start, end});
            const head = {
                'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': chunksize,
                'Content-Type': 'video/mp4',
            };

            response.writeHead(206, head);
            file.pipe(response);
        } else {
            const head = {
                'Content-Length': fileSize,
                'Content-Type': 'video/mp4',
            };
            response.writeHead(200, head);
            fileStream.createReadStream(path).pipe(response);
        }
    });

    const upload = multer();
    app.post('/video',  upload.single('video'), cors, ( request: Request, response: Response ) => {
        if (!Boolean(request.file)) {
            return response.status(400).json({ msg: 'No file uploaded' });
        }

        const file = request.file;
        console.log('Got File', file);

        const fileName = file.originalname;

        fileStream.writeFile(`videos/${fileName}`, file.buffer, (error: Error) => {
            if (Boolean(error)) {
                throw error;
            }

            console.log('FILE SAVED', fileName);
            response.status(200).end();
        });
    });
}