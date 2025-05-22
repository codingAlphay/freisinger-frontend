"use client"
import ReactPlayer from 'react-player/lazy'

const VideoPlayer = ({url}) => {
    return (
        <ReactPlayer
            url={url}
            playing={true}
            muted={true}
            loop={true}
            playsinline={true}
            height={"100%"}
            width={"100%"}
        />
    )
}

export default VideoPlayer