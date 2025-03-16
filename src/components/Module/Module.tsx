import React from 'react';
import './Module.scss';

type Props = {
  moduleName: string;
  moduleImg: string;
};

export const Module: React.FC<Props> = ({moduleName, moduleImg}) => {
  return (
    <div className='module'>
      <div className='module__content'>
        <div className='module__title title'>{moduleName}</div>

        <p className='module__description--1 description'>
          Discover the most promising niche in cryptocurrencies where you can make decent money on
          your own
        </p>

        <p className='module__description--2 description'>What we will learn and do:</p>

        <div className='module__buttons'>
          <button className='module__button module__button--1'>Apps Development</button>

          <button className='module__button module__button--2'>SEO Services</button>

          <button className='module__button module__button--3'>Data Analysis</button>
        </div>
      </div>

      <div className='module__image'>
        <img className='module__image__main' src={moduleImg} alt='old photo camera picture' />
      </div>
    </div>
  );
};
