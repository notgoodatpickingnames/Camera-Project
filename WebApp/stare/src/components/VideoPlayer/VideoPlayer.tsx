import React from 'react';

function VideoPlayer() {
    return (
        <div>
            <video id="videoPlayer" width="100%" controls muted={false} autoPlay={false}>
                <source src="http://192.168.0.23:8080/video" type="video/mp4" />
            </video>
        </div>
    )
}

export default VideoPlayer;