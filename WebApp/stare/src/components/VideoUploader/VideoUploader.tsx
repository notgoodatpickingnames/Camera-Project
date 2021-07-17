import React, { useState } from 'react';



function VideoUploader() {
    // const classes = useStyles();

    const [file, setFile] = useState<File>();

    function inputChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
        console.log('EVENT', event, event.target.files[0]);
        setFile(event.target.files[0]);
    }

    return (
        <div>
            <input type="file" name="file" onChange={inputChangeHandler} accept={".mp4"} />
        </div>
    )
}

export default VideoUploader;