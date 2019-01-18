import React from 'react';
import VideoItem from '../components/VideoItem';

const VideoList = ({ videos }) => {
    const renderedList = videos.map(video => {
        return <VideoItem video={video} />;
    });
    console.log(renderedList);
    return <div>{renderedList}</div>;
};

export default VideoList;
