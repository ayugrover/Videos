import React from 'react';
import VideoItem from './VideoItem';


const VideoList = ({videos, onVideoSelect}) =>
{
    const renderedList = videos.map((video) => {

        return <VideoItem  key={video.id.videoId} onVideoSelect={onVideoSelect}  video ={video}/>;
    });

return( 
    <div className="ui segment" style={{height: "100%"}}>
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    </div>
  );
};

export default VideoList ;