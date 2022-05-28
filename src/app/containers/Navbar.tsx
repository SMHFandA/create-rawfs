import React from 'react';
import classnames from 'classnames';
import {
  Link,
  useLocation,
} from 'react-router-dom';

import Container from 'app/components/Container';

interface Props {
}

const Navbar = (_props: Props): React.ReactElement => {
  const pathname = useLocation().pathname;
  const homeLinkClassName = classnames('navbar-item', {
    'is-active': pathname === '/',
  });

  return (
    <nav className='navbar is-white'>
      <Container>
        <div className='navbar-menu'>
          <div className='navbar-start'>
            <Link
              to='/'
              className={homeLinkClassName}
            >
              {'Home'}
            </Link>
          </div>
        </div>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'>
              <Link
                to='/signUp'
                className='button is-primary'
              >
                <strong>{'Sign up'}</strong>
              </Link>
              <Link
                to='/logIn'
                className='button is-light'
              >
                {'Log in'}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
