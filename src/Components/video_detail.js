import React from 'react'

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>
  }
  const videoId = video.id.videoId
//  const url = 'https://www.youtube.com/embed/' + videoId
// This a slightly better way to write this using ES6 Template String
  const url = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details text-sm">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail
