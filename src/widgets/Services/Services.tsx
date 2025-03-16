import './Services.scss';

import serviceImg1 from './../../assets/images/services/service1.png';
import serviceImg2 from './../../assets/images/services/service2.png';
import serviceImg3 from './../../assets/images/services/service3.png';

import {ServiceCard} from '../../components/ServiceCard';

export const Services = () => {
  return (
    <div className='service'>
      <div className='service__cards'>
        <div className='service__card service__card__main'>
          <h5 className='service__card__main__sub--title sub--title'>Our Services</h5>

          <p className='title service__card__main__title'>Our Services for You</p>

          <p className='description service__card__main__description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore
          </p>
        </div>

        <ServiceCard serviceImg={serviceImg1} serviceName='Bitcoin Escrow Service' />
        <ServiceCard serviceImg={serviceImg2} serviceName='Safe And Secure' />
        <ServiceCard serviceImg={serviceImg3} serviceName='Integrated App' />
        <ServiceCard serviceImg={serviceImg2} serviceName='Safe And Secure' />
        <ServiceCard serviceImg={serviceImg3} serviceName='Safe And Secure' />
      </div>
    </div>
  );
};
