import { Button, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

import { VideoRepository } from './video.repository';

const useStyles = makeStyles(() => ({
    uploader: {
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
    },

    submit: {
        marginTop: '24px',
    },
}));

const videoRepository = new VideoRepository();

function VideoUploader() {
    const classes = useStyles();

    const [video, setVideo] = useState<File>();

    function inputChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
        console.log('EVENT', event, event.target.files[0]);
        setVideo(event.target.files[0]);
    }

    function onSubmitFile(): void {
        if (Boolean(video)) {
            videoRepository.add(video);
        }
    }

    return (
        <div className={classes.uploader}>
            <div>
                <input type="file" name="file" onChange={inputChangeHandler} accept={".mp4"} />
            </div>
            
            <div className={classes.submit}>
                <Button variant={'contained'} color={'primary'} onClick={onSubmitFile}>Submit</Button>
            </div>
        </div>
    )
}

export default VideoUploader;