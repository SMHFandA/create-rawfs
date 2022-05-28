import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Container = (props: Props): React.ReactElement => {
  return (
    <div className='container'>
      {props.children}
    </div>
  );
};

export default Container;
