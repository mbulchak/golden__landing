import './ScrollSection.scss';

import star1 from './../../assets/images/coins/star-2.png';
import star2 from './../../assets/images/coins/star-3.png';

import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useRef} from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const ScrollSection = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (container.current) {
        const sections: HTMLElement[] = gsap.utils.toArray('.scroll__container');

        sections.forEach((section) => {
          gsap.fromTo(
            section,
            {
              opacity: 0,
              y: 50,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 30%',
                toggleActions: 'play none none none',
                scrub: 1,
              },
            }
          );
        });
      }
    },
    {scope: container}
  );

  return (
    <>
      <div className='scroll'>
        <div className='scroll__content'>
          <div className='scroll__title'>
            <h2 className='scroll__title__main'>
              Lörem ipsum häsat promotiv sedan depatologi tenes.
            </h2>

            <p className='scroll__title__description'>Lörem ipsum sosm niliga syntris.</p>
          </div>

          <div ref={container} className='scroll__containers'>
            <div className='scroll__container'>
              <h5 className='scroll__container__title'>
                Lörem ipsum dorade boktig till geosylig postmodern.
              </h5>
            </div>

            <div className='scroll__container'>
              <h5 className='scroll__container__title'>
                Lörem ipsum dorade boktig till geosylig postmodern.
              </h5>
            </div>

            <div className='scroll__container'>
              <h5 className='scroll__container__title'>
                Lörem ipsum dorade boktig till geosylig postmodern.
              </h5>
            </div>
          </div>
        </div>

        <img className='scroll__star--1' src={star1} alt="star" />
        
        <img className='scroll__star--2' src={star2} alt="star" />

        <div className="scroll__effect"></div>
      </div>
    </>
  );
};
