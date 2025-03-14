import {Button} from '../../components/Button';
import './Team.scss';

import bitcoins from './../../assets/images/coins/lotBitcoin.png';
import team1 from './../../assets/images/team/team-1.png'

export const Team = () => {
  return (
    <>
      <div className='team'>
        <div className='team__content'>
          <h5 className='team__sub--title'>Team</h5>

          <h2 className='team__title'>Member of our expert team</h2>

          <p className='team__description'>
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
