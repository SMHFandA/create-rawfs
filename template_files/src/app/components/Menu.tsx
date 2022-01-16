import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';


interface Props {
  pathname: string;
}

export default function Navbar(props: Props): React.ReactElement {
  return (
    <div className='menu'>
      <ul>
        <li>
          <Link
            to='/'
            className={classnames({ active: props.pathname === '/' })}
          >
            Main page
          </Link>
        </li>
      </ul>
    </div>
  );
}
