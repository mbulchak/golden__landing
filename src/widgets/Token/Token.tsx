import './Token.scss';
import tokenImage1 from './../../assets/images/token/token1-card.png';
import tokenImage2 from './../../assets/images/token/token2-card.png';
import tokenImage3 from './../../assets/images/token/token3-card.png';
import tokenBitcoin from './../../assets/images/coins/2bitcoins_token.png'
import tokenStar from './../../assets/images/coins/star-1.png';

import {TokenCard} from '../../components/TokenCard';

export const Token = () => {
  return (
    <div className='token'>
      <div className='token__title'>
        <h5 className='token__title__small'>Our Token</h5>

        <h2 className='token__title__main'>Token seal</h2>

        <p className='token__title__description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum <br /> aliquet turpis
          elit elit natoque varius eget facilisi. Amet rhoncus
        </p>
      </div>

      <div className='token__cards'>
        <div className='token__card__general token__card--1'>
          <TokenCard tokenImage={tokenImage1} tokenTitle='Enjoy The Profit' />

          <div className='token__card__effect token__card--1__effect--1'></div>
          <div className='token__card__effect token__card--1__effect--2'></div>
        </div>

        <div className='token__card__general token__card--2'>
          <TokenCard tokenImage={tokenImage2} tokenTitle='Customer Support' />

          <div className='token__card__effect token__card--2__effect--1'></div>
          <div className='token__card__effect token__card--2__effect--2'></div>
        </div>

        <div className='token__card__general token__card--3'>
          <TokenCard tokenImage={tokenImage3} tokenTitle='Confirmation' />

          <div className=' token__card__effect token__card--3__effect--1'></div>
          <div className='token__card__effect token__card--3__effect--2'></div>
        </div>
      </div>

      <img className='token__bitcoin' src={tokenBitcoin} alt="bitcoin picture" />

      <img className='token__star' src={tokenStar} alt="star picture" />
    </div>
  );
};
