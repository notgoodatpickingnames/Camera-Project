"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoController = void 0;
const cors_1 = __importDefault(require("cors"));
const fs_1 = __importDefault(require("fs"));
const multer_1 = __importDefault(require("multer"));
function VideoController(app) {
    app.get('/video', (request, response) => {
        const path = 'videos/Video.mp4';
        const range = request.headers.range;
        const stat = fs_1.default.statSync(path);
        const fileSize = stat.size;
        if (range) {
            const parts = range.replace(/bytes=/, '').split('-');
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
            const chunksize = (end - start) + 1;
            const file = fs_1.default.createReadStream(path, { start, end });
            const head = {
                'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': chunksize,
                'Content-Type': 'video/mp4',
            };
            response.writeHead(206, head);
            file.pipe(response);
        }
        else {
            const head = {
                'Content-Length': fileSize,
                'Content-Type': 'video/mp4',
            };
            response.writeHead(200, head);
            fs_1.default.createReadStream(path).pipe(response);
        }
    });
    const upload = multer_1.default();
    app.post('/video', upload.single('video'), cors_1.default, (request, response) => {
        if (!Boolean(request.file)) {
            return response.status(400).json({ msg: 'No file uploaded' });
        }
        const file = request.file;
        console.log('Got File', file);
        const fileName = file.originalname;
        fs_1.default.writeFile(`videos/${fileName}`, file.buffer, (error) => {
            if (Boolean(error)) {
                throw error;
            }
            console.log('FILE SAVED', fileName);
            response.status(200).end();
        });
    });
}
exports.VideoController = VideoController;
//# sourceMappingURL=video.controller.js.map