import React from 'react'

const VideoCard = ({info}) => {
    if(!info) return;
    const {snippet,statistics} = info;
    const {channelTitle, title, thumbnails } = snippet
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
        <img className='rounded-lg' alt={title} src={thumbnails.medium.url} />
        <ul>
            <li className='font-bold py-2'>
                {title}
            </li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}</li>
        </ul>
    </div>
  )
}

export default VideoCard
