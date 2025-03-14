import React from 'react';
import './ServiceCard.scss';

type Props = {
  serviceImg: string;
  serviceName: string;
};

export const ServiceCard: React.FC<Props> = ({serviceImg, serviceName}) => {
  return (
    <div className='service__card service__card__general'>
      <img className='service__card__general__image' src={serviceImg} alt='service image' />

      <h3 className='service__card__general__title'>{serviceName}</h3>

      <p className='service__card__general__description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
      </p>
    </div>
  );
};
