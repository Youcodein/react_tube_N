import React, {useState, useEffect} from 'react'
import { fetchAPI } from '../utils/fetchAPI';
import { useParams, Link } from 'react-router-dom';
import {Videos, Loader} from './'

const ChannelConts = () => {

  const [channelDetail, setChannelDetail] = useState()
  const [videos, setVideos] = useState(null);
  const {id} = useParams()

  useEffect(()=>{
    const fetchResult = async () => {
      const data = await fetchAPI(`channels?part=snippet&id=${id}`)

      setChannelDetail(data?.items[0])

      const videosData = await fetchAPI(`search?channelId=${id}&part=snippet&order=date`);
      setVideos(videosData?.items)
    }
    fetchResult()
  },[id]);

  if(!channelDetail?.snippet) return <Loader />
  
    
  return (
    <section id='channelConts'>
      <div className="channel-header" style={{backgroundImage:`url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`}}>

      </div>
      <div className="channel-info">
          <img src={channelDetail?.snippet?.thumbnails?.medium?.url} alt="" />
        <h3>
          <Link to={`/channel/${channelDetail?.snippet?.channelId}`}>{channelDetail?.snippet?.title}</Link>
          </h3>
        <div className='channel-count'>
          <span>{channelDetail?.snippet?.description}</span>
          <span>구독자 수 : {channelDetail?.statistics?.subscriberCount} 명</span>
          <span>총 비디오 갯수 : {channelDetail?.statistics?.videoCount} 개</span>
          <span>비디오 카운트 수 : {channelDetail?.statistics?.viewCount} 수</span>
        </div>
      </div>
      <div className="channel-videos">
        <Videos videos={videos}/>
      </div>
    </section>
  )
}

export default ChannelConts