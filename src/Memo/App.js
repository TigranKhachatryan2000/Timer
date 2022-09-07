import React, { useState, useCallback, useMemo } from 'react'
import VideoPlayer from './videoPlayer';

function App() {
  
  const [text, setText] = useState('');
  const [isPlaing, setIsPlaying] = useState(false);

  const onPlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const onPause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const videoData = useMemo(() => {
    return {
        title: 'Bunny movie',
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
    }
  }, []);

  return (
    <div>
        <input type='text' value={text} onChange={(e) => {
            setText(e.target.value);
        }}/>
        <span> {text} </span>
        <div> Video is {isPlaing ? 'playing': 'paused'} </div>
        <VideoPlayer 
        src={videoData}
        onPlay={onPlay}
        onPause={onPause}/>
    </div>
  )
}

export default App;