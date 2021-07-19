import { APIclient } from '../../utils/apiClient/api.client';

export class VideoRepository {
    public async add(video: File): Promise<void> {

        const formData = new FormData();
        formData.append('video', video);

        await APIclient.post('video', formData);
        
    }
}