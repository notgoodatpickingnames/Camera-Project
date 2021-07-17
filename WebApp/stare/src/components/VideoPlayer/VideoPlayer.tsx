import React from 'react';

function VideoPlayer() {
    return (
        <div>
            <video id="videoPlayer" width="100%" controls muted={false} autoPlay={false}>
                <source src="/video" type="video/mp4" />
            </video>
        </div>
    )
}

export default VideoPlayer;