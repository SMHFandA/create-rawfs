import React from 'react';
import classnames from 'classnames';
import {
  Link,
  useLocation,
} from 'react-router-dom';


interface Props {
}

export default function Navbar(props: Props): React.ReactElement {
  const pathname = useLocation().pathname;

  return (
    <div className='menu'>
      <ul>
        <li>
          <Link
            to='/'
            className={classnames({ active: pathname === '/' })}
          >
            Home page
          </Link>
        </li>
      </ul>
    </div>
  );
}
