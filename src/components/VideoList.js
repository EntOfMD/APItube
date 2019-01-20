import React from 'react';
import VideoItem from '../components/VideoItem';

const VideoList = ({ videos, onSearchSelect }) => {
    const renderedList = videos.map(video => {
        return (
            <VideoItem
                key={
                    video.id.videoId ||
                    video.id.channelId ||
                    video.id.playlistId
                }
                onSearchSelect={onSearchSelect}
                video={video}
            />
        );
    });
    return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
