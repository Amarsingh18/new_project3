import React from 'react';
import VideoPlayer from './VideoPlayer';

const App = () => {
  const unlistedVideoId = 'YOUR_UNLISTED_VIDEO_ID';

  return (
    <div>
      <h1>YouTube Video Player</h1>
      <VideoPlayer videoId={unlistedVideoId} />
    </div>
  );
};

export default App;
