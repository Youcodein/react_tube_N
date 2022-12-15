import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams, Link } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'
import { Videos, Loader } from './'
import { AiFillHeart } from 'react-icons/ai'



const VideoConts = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null);
  const {id} = useParams()

  useEffect(()=>{
    fetchAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=> setVideoDetail(data.items[0])
    )
    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=> setVideos(data.items)
    )
  },[id]);

  if(!videoDetail?.snippet) return <Loader />

  const { 
    snippet : {title, channelId,  description, channelTitle}, 
    statistics : {viewCount, likeCount},
  } = videoDetail

  return (
    <section className='videoConts'>
      <div className="container">
        <div className='videoConts__inner'>
          <div className="left">
          <div className="videoConts__view">
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
            controls />
          </div>
          <div className="videoConts__desc">
            <div className="channel__side">
              <span className='channelTitle'>
                <Link to={`/channel/${channelId}`}>{channelTitle}</Link></span>
              <div className="count">
              <span className='viewCount'>조회수 : {viewCount}</span>
              <span className='likeCount'> <AiFillHeart />{likeCount}</span>
              </div>
            </div>
            
            <div className="video__desc">
              <span className='title'>{title}</span>
              <span className='description'>{description}</span>
              {/* <span className='channelId'>{channelId}</span> */}
            </div>
            
            
          </div>
          </div>

          <div className="right">
          <div className="videoConts__list">
            <Videos videos={videos} layout="column" />
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoConts
