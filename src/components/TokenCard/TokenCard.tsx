import React from 'react';
import './TokenCard.scss';

type Props = {
  tokenImage: string;
  tokenTitle: string;
};

export const TokenCard: React.FC<Props> = ({tokenImage, tokenTitle}) => {
  return (
    <div className='token__card'>
      <img className='token__card__image' src={tokenImage} alt='token image' />

      <h3 className='token__card__title'>{tokenTitle}</h3>

      <p className='token__card__desctiption'>
        Lorem ipsum dolor sit amet, <br />
        consectetur adipiscing elit. Nisl <br />
        praesent massa ullamcorper ultrices eu tortor...
      </p>
    </div>
  );
};
