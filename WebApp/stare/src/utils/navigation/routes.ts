import VideoPlayer from '../../components/VideoPlayer';
import VideoUploader from '../../components/VideoUploader';
import { Route } from './route';

export const routes: Route[] = [
    {label: 'Video', path: 'video', component: VideoPlayer},
    {label: 'Upload', path: 'upload', component: VideoUploader},
]