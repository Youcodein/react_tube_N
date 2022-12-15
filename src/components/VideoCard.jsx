import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({
  video: {
    id: {videoId},
    snippet,
  },
}) => {
  return (
    <div className='box'>
      <Link to={`/video/${videoId}`}>
      <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title} />
      </Link>
      <div className="boxInfo">
      <Link to={`/video/${videoId}`}>
        <p className='videoTitle'>{snippet?.title.slice(0,50)}</p></Link>
      <Link to={`/channel/${snippet.channelId}`}>
        <p className="channelName">{snippet.channelTitle}</p>
      </Link>
      </div>

    </div>
  )
}

export default VideoCard