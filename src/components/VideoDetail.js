import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div />;
    }

    const videoSrc = `https://www.youtube.com/embed/${
        video.id.videoId
    }?autoplay=1`;

    return (
        <div>
            <div className="ui embed">
                <iframe
                    title="Main Video Player"
                    src={videoSrc}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
            <div className="ui segment">
                <h4 className="ui header"> {video.snippet.title}</h4>
                <p style={{ lineHeight: '2rem' }}>
                    {video.snippet.description}
                </p>
            </div>
        </div>
    );
};

export default VideoDetail;
