import React from 'react'
import { VideoBgWrapper } from './styles.js'

import HeroVideo from '../../assets/video.mp4'
import HeroBackground from '../../assets/images/11.png'

const BackgroundVideo = () => {
  return (
    <VideoBgWrapper>
      <video
        //className="bgvid"
        // id="videoBG"
        poster={HeroBackground}
        autoPlay="autoplay"
        loop="loop"
        muted="muted"
        preload="auto"
        autobuffer
      >
        <source src={HeroVideo} type="video/mp4" />
      </video>
    </VideoBgWrapper>
  )
}

export default BackgroundVideo
