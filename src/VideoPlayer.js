import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId }) => {
  const [videoInfo, setVideoInfo] = useState(null);

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=YOUR_API_KEY&part=snippet`)
      .then(response => response.json())
      .then(data => setVideoInfo(data.items[0].snippet))
      .catch(error => console.error('Error fetching video info:', error));
  }, [videoId]);

  return (
    <div>
      {videoInfo && (
        <>
          <h1>{videoInfo.title}</h1>
          <YouTube videoId={videoId} opts={{ width: '640', height: '390' }} />
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
