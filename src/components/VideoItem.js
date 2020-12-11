import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) =>{
return (
    <div className="video-item item" onClick= {() => onVideoSelect(video)}>
        <img alt={video.snippet.title} className= "ui avatar image" src= {video.snippet.thumbnails.medium.url} alt="no pic"/>
        <div className="content">
            <div className="desciption">
                 {video.snippet.title}
            </div>
        </div>
    </div>
    )
};

export default VideoItem;