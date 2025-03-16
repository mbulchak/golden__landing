import {Button} from '../../components/Button';
import './Team.scss';

import bitcoins from './../../assets/images/coins/lotBitcoin.png';
import team1 from './../../assets/images/team/team-1.png';
import team2 from './../../assets/images/team/team-2.png';
import team3 from './../../assets/images/team/team-3.png';

import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {TextPlugin} from 'gsap/TextPlugin';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

export const Team = () => {
  const container = useRef(null);

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'center center',
        end: '+=1000',
        scrub: 1,
        pin: true,
      },
    });

    tl.set('.team__member', {attr: {src: team1}})
      .to('.team__member', {opacity: 0, duration: 0.5})
      .set('.team__member', {attr: {src: team2}})
      .to('.team__member', {opacity: 1, duration: 0.5})
      .to('.team__title', {duration: 1, text: 'Member 2 of our expert team'})
      .to('.team__description', {
        duration: 1,
        text: 'Lörem ipsum fulparkerare krollipsum diska didebelt respektive spevis plus krofenatipsum',
      })
      .to('.team__member', {opacity: 0, duration: 0.5})
      .set('.team__member', {attr: {src: team3}})
      .to('.team__title', {duration: 0, text: 'Member 3 of our expert team'})
      .to('.team__description', {duration: 0, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus'})
      .to('.team__member', {opacity: 1, duration: 0.3});
  }, { scope: container });

  return (
    <>
      <div className='team' ref={container}>
        <div className='team__content'>
          <h5 className='team__sub--title sub--title'>Team</h5>

          <h2 className='team__title title'>Member of our expert team</h2>

          <p className='team__description description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum aliquet turpis elit
            elit natoque varius eget facilisi. Amet rhoncus
          </p>

          <div className='team__button'>
            <Button buttonName='Get Started' />
          </div>
        </div>

        <div className='team__effects'>
          <img className='team__bitcoin' src={bitcoins} alt='team__bitcoin' />

          <div className='team__effect__indigo'></div>
          <div className='team__effect__green__purple'></div>
          <div className='team__effect__blue'></div>

          <img className='team__member' src={team1} alt='team member' />

          <div className='team__card__add'>
            <h5 className='team__card__add__title'>Lörem ipsum treras dekalig. </h5>

            <p className='team__card__add__description'>
              Lörem ipsum fulparkerare krollipsum diska didebelt respektive spevis plus
              krofenatipsum
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
