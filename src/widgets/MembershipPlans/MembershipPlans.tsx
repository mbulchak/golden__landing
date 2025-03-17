import {Button} from '../../components/Button';
import './MembershipPlans.scss';
import ellipse from './../../assets/images/ellipse.png'

export const MembershipPlans = () => {
  return (
    <div className='plans'>
      <div className='plans__titles'>
        <h5 className='sub--title plans__sub--title'>Plans</h5>

        <h3 className='title plans__title--main'>Exclusive Membership Plans</h3>

        <p className='description plans__description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum aliquet turpis elit
          elit natoque varius eget facilisi. Amet rhoncus
        </p>
      </div>

      <div className='plans__block'>
        <div className='plan plan--1'>
          <div className='plan__titles'>
            <p className='plan__main__title'>Colleagues</p>

            <p className='plan__main__description'>
              Valid when paying for tuition for a group of three people
            </p>

            <div className='plan__secondary__description'>
              <span className='plan__secondary__description--1'>9 modules in 6 weeks</span>
              <span>In one payment</span>
            </div>

            <div className='plan__prices'>
              <div className='plan__prices--1'>
                <span className='plan__price__main--1'>3 329</span>

                <span className='plan__price__main--2'>/month</span>

                <span>75 900</span>
              </div>

              <div className='plan__prices--2'>
                <span className='plan__price__secondary--1'>3 329</span>
                <span className='plan__price__secondary--2'>for 24 months</span>
                <span className='plan__price__secondary--3'>79 900</span>
              </div>

              <div className='plan__add'>-5%</div>
            </div>
          </div>

          <ul className='plan__list'>
            <li className='plan__item'>9 modules in 6 weeks</li>

            <li className='plan__item'>Webinars with experts</li>

            <li className='plan__item'>Practical tasks</li>

            <li className='plan__item'>
              Certificate of advanced training based on the results of training
            </li>

            <li className='plan__item'>Unlimited access to materials</li>

            <li className='plan__item'>Group chat with experts and course coordinators</li>

            <li className='plan__item'>Professional community</li>
          </ul>

          <div className='plan__button'>
            <Button buttonName='Select' />
          </div>
        </div>

        <div className='plan plan--2'>
          <div className='plan__titles'>
            <p className='plan__main__title'>Colleagues</p>

            <p className='plan__main__description'>
              Valid when paying for tuition for a group of three people
            </p>

            <div className='plan__secondary__description'>
              <span className='plan__secondary__description--1'>9 modules in 6 weeks</span>
              <span>In one payment</span>
            </div>

            <div className='plan__prices'>
              <div className='plan__prices--1'>
                <span className='plan__price__main--1'>3 329</span>

                <span className='plan__price__main--2'>/month</span>

                <span>75 900</span>
              </div>

              <div className='plan__prices--2'>
                <span className='plan__price__secondary--1'>3 329</span>
                <span className='plan__price__secondary--2'>for 24 months</span>
                <span className='plan__price__secondary--3'>79 900</span>
              </div>

              <div className='plan__add'>-5%</div>
            </div>
          </div>

          <ul className='plan__list'>
            <li className='plan__item'>9 modules in 6 weeks</li>

            <li className='plan__item'>Webinars with experts</li>

            <li className='plan__item'>Practical tasks</li>

            <li className='plan__item'>
              Certificate of advanced training based on the results of training
            </li>

            <li className='plan__item'>Unlimited access to materials</li>

            <li className='plan__item'>Group chat with experts and course coordinators</li>

            <li className='plan__item'>Professional community</li>
          </ul>

          <div className='plan__button'>
            <Button buttonName='Select' />
          </div>
        </div>

        <div className='plan plan--3'>
          <div className='plan__titles'>
            <p className='plan__main__title'>Colleagues</p>

            <p className='plan__main__description'>
              Valid when paying for tuition for a group of three people
            </p>

            <div className='plan__secondary__description'>
              <span className='plan__secondary__description--1'>9 modules in 6 weeks</span>
              <span>In one payment</span>
            </div>

            <div className='plan__prices'>
              <div className='plan__prices--1'>
                <span className='plan__price__main--1'>3 329</span>

                <span className='plan__price__main--2'>/month</span>

                <span>75 900</span>
              </div>

              <div className='plan__prices--2'>
                <span className='plan__price__secondary--1'>3 329</span>
                <span className='plan__price__secondary--2'>for 24 months</span>
                <span className='plan__price__secondary--3'>79 900</span>
              </div>

              <div className='plan__add'>-5%</div>
            </div>
          </div>

          <ul className='plan__list'>
            <li className='plan__item'>9 modules in 6 weeks</li>

            <li className='plan__item'>Webinars with experts</li>

            <li className='plan__item'>Practical tasks</li>

            <li className='plan__item'>
              Certificate of advanced training based on the results of training
            </li>

            <li className='plan__item'>Unlimited access to materials</li>

            <li className='plan__item'>Group chat with experts and course coordinators</li>

            <li className='plan__item'>Professional community</li>
          </ul>

          <div className='plan__button'>
            <Button buttonName='Select' />
          </div>
        </div>
      </div>

      <img className='ellipse ellipse--1' src={ellipse} alt="ellipse" />
      <img className='ellipse ellipse--2' src={ellipse} alt="ellipse" />
      <img className='ellipse ellipse--3' src={ellipse} alt="ellipse" />
    </div>
  );
};
