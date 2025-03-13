import React from "react";
import './HeaderPeople.scss';

type Props = {
  person_1: string;
  person_2: string;
  person_3: string;
  person_4: string;
  person_5: string;
  person_6: string;
}

export const HeaderPeople: React.FC<Props> = ( {
  person_1,
  person_2,
  person_3,
  person_4,
  person_5,
  person_6
}) => {
  return (
    <div className='header__people'>
      <div className='header__person--1'>
        <img className='header__person first__person' src={person_1} alt='first person' />
        <div className='header__person__effect'></div>
      </div>

      <div className='header__person--2'>
        <img className='header__person first__person' src={person_2} alt='first person' />
        <div className='header__person__effect'></div>
      </div>

      <div className='header__person--3'>
        <img className='header__person first__person' src={person_3} alt='first person' />
        <div className='header__person__effect'></div>
      </div>

      <div className='header__person--4'>
        <img className='header__person first__person' src={person_4} alt='first person' />
        <div className='header__person__effect'></div>
      </div>

      <div className='header__person--5'>
        <img className='header__person first__person' src={person_5} alt='first person' />
        <div className='header__person__effect'></div>
      </div>

      <div className='header__person--6'>
        <img className='header__person first__person' src={person_6} alt='first person' />
        <div className='header__person__effect'></div>
      </div>
    </div>
  );
};
