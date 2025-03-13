import './Header.scss';

import logoImg from './../../assets/images/Logo.png';
import logoName from './../../assets/images/Logo__name.png';
import starFirst from './../../assets/images/coins/star-1.png';
import starSecond from './../../assets/images/coins/star-2.png';
import coinM from './../../assets/images/coins/Monero.png';
import bitcoin from './../../assets/images/coins/bitcoin-big.png';
import bitcoinBig from './../../assets/images/coins/bitcoin-big.png';
import coin__Sharp from './../../assets/images/coins/Etherium-2 copy 1.png';
import coint__L from './../../assets/images/coins/coin_L.png';

import person_1 from './../../assets/images/people/person-1.png';
import person_2 from './../../assets/images/people/person-2.png';
import person_3 from './../../assets/images/people/person-3.png';
import person_4 from './../../assets/images/people/person-4.png';
import person_5 from './../../assets/images/people/person-5.png';
import person_6 from './../../assets/images/people/person-6.png';

import {Button} from '../../components/Button';
import {Navigation} from '../../components/Navigation';
import {HeaderPeople} from '../../components/HeaderPeople';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header--first__part'>
        <div className='logo__block'>
          <img className='logo__image' src={logoImg} alt='logo image' />

          <img src={logoName} alt='logo name' />
        </div>

        <Navigation />

        <div className='header__button--1'>
          <Button buttonName='Get in Touch' />
        </div>
      </div>

      <div className='header--second__part'>
        <h1 className='header__title'>
          Own Your Crypto
          <br />
          Adventure
        </h1>

        <p className='header__description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi
        </p>

        <div className='header__button--2'>
          <Button buttonName='Get Started' />
        </div>

        <div className='purple--blur--linear'></div>
      </div>

      <div className='header--third__part'>
        <img className='header__star--first' src={starFirst} alt='header star' />

        <img className='header__coin_M' src={coinM} alt='coin M' />

        <img className='header__bitcoin--1' src={bitcoin} alt='bitcoin' />

        <img className='header__star--second' src={starFirst} alt='header star' />

        <img className='header__coin__Sharp' src={coin__Sharp} alt='header coin' />

        <img className='header__star--third' src={starFirst} alt='header star' />

        <img className='header__star--forth' src={starSecond} alt='header star' />

        <img className='header__coin__L' src={coint__L} alt='header coin' />

        <img className='header__bitcoin--2' src={bitcoinBig} alt='header coin' />
      </div>

      <div className='header--blur'>
        <div className='green--blur--linear'></div>

        <div className='indigo--blur--linear'></div>
      </div>

      <div className='header__cards'>
        <div className='header__card header__card--1'>
          <div className='header__card--1__effect--1'></div>
          <div className='header__card--1__effect--2'></div>

          <div className='header__card__title'>
            <h5 className='header__card__title--1'>2,000+</h5>
            <span className='header__card__title--2'>lorem ipsum dolor sit amet</span>
          </div>

          <HeaderPeople
            person_1={person_1}
            person_2={person_2}
            person_3={person_3}
            person_4={person_4}
            person_5={person_5}
            person_6={person_6}
          />
        </div>

        <div className='header__card header__card--2'>
          <div className='header__card--2__effect--1'></div>
          <div className='header__card--2__effect--2'></div>

          <div className='header__card__title'>
            <h5 className='header__card__title--1'>5,000+</h5>
            <span className='header__card__title--2'>lorem ipsum dolor sit amet</span>
          </div>

          <HeaderPeople
            person_1={person_3}
            person_2={person_4}
            person_3={person_6}
            person_4={person_1}
            person_5={person_5}
            person_6={person_2}
          />
        </div>
      </div>
    </header>
  );
};
