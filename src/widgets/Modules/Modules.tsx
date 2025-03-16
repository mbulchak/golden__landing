import './Modules.scss';
import moduleImg1 from './../../assets/images/camera/camera1.png';
import moduleImg2 from './../../assets/images/camera/camera2.png';
import moduleImg3 from './../../assets/images/camera/camera3.png';
import {Module} from '../../components/Module';

export const Modules = () => {
  return (
    <div className='modules'>
      <div className='modules__titles'>
        <h5 className='modules__sub--title sub--title'>Lorem ipsum</h5>

        <h2 className='title'>Amet pretium</h2>

        <p className='description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum <br /> aliquet turpis
          elit elit natoque varius eget facilisi. Amet rhoncus
        </p>
      </div>

      <div className='modules__block'>
        <Module moduleImg={moduleImg1} moduleName='Module 1: The foundation' />

        <Module moduleImg={moduleImg2} moduleName='Module 2: The foundation' />

        <Module moduleImg={moduleImg3} moduleName='Module 3: The foundation' />
      </div>

      <div className='modules__effect modules__effect__green'></div>
      <div className='modules__effect modules__effect__indigo'></div>
    </div>
  );
};
