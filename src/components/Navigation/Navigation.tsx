import './Navigation.scss';

export const Navigation = () => {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__item'>
          <a className='nav__link' href=''>
            About
          </a>
        </li>

        <li className='nav__item'>
          <a href='' className='nav__link'>
            Service
          </a>
        </li>

        <li className='nav__item'>
          <a href='' className='nav__link'>
            Token Sale
          </a>
        </li>

        <li className='nav__item'>
          <a href='' className='nav__link'>
            FAQ’s
          </a>
        </li>

        <li className='nav__item'>
          <a href='' className='nav__link'>
            Team
          </a>
        </li>

        <li className='nav__item'>
          <a href='' className='nav__link'>
            Bloq
          </a>
        </li>
      </ul>
    </nav>
  );
};
