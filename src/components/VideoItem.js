import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div className="video-item item"
            onClick={() => onVideoSelect(video)}>
            <img alt={video.snippet.thumbnails.default.url} className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    {/* {video.snippet.title} */}
                    <span
                        // Danger!!!
                        dangerouslySetInnerHTML
                        ={{ __html: video.snippet.title }}>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default VideoItem;