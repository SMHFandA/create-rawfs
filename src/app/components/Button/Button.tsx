import React from 'react';

import css from './Button.module.css';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = (props: Props): React.ReactElement => {
  return (
    <button
      className={css.button8}
      role='button'
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
