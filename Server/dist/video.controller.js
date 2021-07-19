"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoController = void 0;
const fs_1 = __importDefault(require("fs"));
function VideoController(app) {
    app.get("/video", (request, response) => {
        const path = 'assets/Video.mp4';
        const stat = fs_1.default.statSync(path);
        const fileSize = stat.size;
        const range = request.headers.range;
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
}
exports.VideoController = VideoController;
//# sourceMappingURL=video.controller.js.map