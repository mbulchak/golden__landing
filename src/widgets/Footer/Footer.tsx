import './Footer.scss';
import logo1 from './../../assets/images/Logo.png';
import logoName from './../../assets/images/Logo__name.png';
import arrow from './../../assets/images/arrow.png';
import {Navigation} from '../../components/Navigation';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer--first__part'>
        <div className='footer__info'>
          <div className='footer__logo__section'>
            <img className='footer__logo--1' src={logo1} alt='first logo' />

            <img className='footer__logo--2' src={logoName} alt='second logo' />
          </div>

          <p className='footer__description--1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
          </p>

          <button className='footer__button'>
            Email Address
            <img className='footer__button__arrow' src={arrow} alt='arrow' />
          </button>

          <p className='footer__description--2'>© 2021 GPD Holdings, LLC FinCEN MSB</p>
        </div>

        <div className='footer__navigation'>
          <Navigation />
        </div>
      </div>

      <div className='footer__policy'>Privacy Policy and Terms of Service</div>

      <div className='footer__effect'></div>
    </div>
  );
};
