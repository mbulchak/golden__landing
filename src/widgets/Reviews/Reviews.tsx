import './Reviews.scss';
import {clsx} from 'clsx';

import person1 from './../../assets/images/people/person-1.png';
import person2 from './../../assets/images/people/person-2.png';
import person3 from './../../assets/images/people/person-3.png';
import person4 from './../../assets/images/people/person-4.png';
import person5 from './../../assets/images/people/person-5.png';
import person6 from './../../assets/images/people/person-6.png';

import star1 from './../../assets/images/coins/star-2.png';
import star2 from './../../assets/images/coins/star-1.png';
import coin1 from './../../assets/images/coins/Etherium2.png';
import coin2 from './../../assets/images/coins/coin_L.png';
import bitcoins2 from './../../assets/images/coins/2bitcoins_token.png';

import {useState} from 'react';

const reviewers = [
  {id: 1, src: person3, title: 'Lorem ipsum dolor sit amet'},
  {id: 2, src: person4, title: 'Lorem ipsum dolor'},
  {id: 3, src: person6, title: 'Lorem ipsum dolor sit amet'},
  {id: 4, src: person1, title: 'Lorem ipsum dolor'},
  {id: 5, src: person5, title: 'Lorem ipsum'},
  {id: 6, src: person2, title: 'Lorem ipsum dolor sit'},
];

export const Reviews = () => {
  const [selectedUser, setSelectedUser] = useState(reviewers[0]);

  return (
    <div className='reviews'>
      <div className='reviewers'>
        <div className='reviewer__first--part'>
          {reviewers.map((reviewer) => {
            const isActiveReviewer = selectedUser.id === reviewer.id;

            return (
              <div key={reviewer.id} className='reviewer__info'>
                <img className='reviewer__image' src={reviewer.src} alt='first person' />
                <div
                  className={clsx('reviewer__effect', {
                    reviewer__effect__active: isActiveReviewer,
                  })}
                ></div>

                <span
                  className={clsx('reviewer__title--1 sub--title', {
                    'reviewer__title--1__active': isActiveReviewer,
                  })}
                  onClick={() => setSelectedUser(reviewer)}
                >
                  {reviewer.title}
                </span>
              </div>
            );
          })}
        </div>

        <div className='reviewer__second--part'>
          {selectedUser && (
            <>
              <h3 className='reviewer__title--2'>{selectedUser.title}</h3>

              <p className='reviewer__description--1 description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris commodo consequat.
                <br /> <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus.
                Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros
                bibendum elit.
              </p>

              <p className='reviewer__description--2 description'>Lorem ipsum</p>

              <div className='reviewer__description--3'></div>
            </>
          )}
        </div>

        <img className='reviewer__star__1' src={star1} alt='first star' />
        <img className='reviewer__star__2' src={star2} alt='second star' />

        <img className='reviewer__coin__1' src={coin1} alt='first coin' />
        <img className='reviewer__coin__2' src={coin2} alt='second coin' />

        <img className='reviewer__bitcoins' src={bitcoins2} alt='second coin' />
      </div>
    </div>
  );
};
