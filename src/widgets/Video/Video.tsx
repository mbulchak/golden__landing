import './Video.scss';

import video from './../../assets/images/video__land.mp4';
import play from './../../assets/images/img.png';
import videoBG from './../../assets/images/video__bg.png';
import bitcoin from './../../assets/images/coins/bitcoin-big.png';
import coin from './../../assets/images/coins/Etherium2.png';
import {useRef, useState} from 'react';

export const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stopVideo, setStopVideo] = useState(true);

  const handleVideo = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className='video__block'>
      <div className='video__info'>
        <h2 className='video__title title'>Lorem ipsum</h2>

        <p className='video__sub--title sub--title'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do!
        </p>
      </div>

      <div className='video__content'>
        <video
          className='video__mvp'
          onClick={handleVideo}
          ref={videoRef}
          poster={videoBG}
          onPlay={() => setStopVideo(false)}
          onPause={() => setStopVideo(true)}
          controls
        >
          <source className='video__main' src={video} type='video/mp4' />
        </video>

        {stopVideo && (
          <div className='play' onClick={handleVideo}>
            <img className='play__image' src={play} alt='button play' />
          </div>
        )}

        <img className='bitcoin' src={bitcoin} alt='bitcoin' />

        <img className='coin' src={coin} alt='coin' />
      </div>
    </div>
  );
};
