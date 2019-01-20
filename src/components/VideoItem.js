import React from 'react';
import '../css/VideoItem.css';

const VideoItem = ({ video, onSearchSelect }) => {
    return (
        <div onClick={() => onSearchSelect(video)} className="item video-item">
            <img
                className="ui image"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;
