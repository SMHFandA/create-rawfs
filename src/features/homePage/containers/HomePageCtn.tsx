import React from 'react';

import Button from 'app/components/Button/Button';

interface Props {
}

const HomePageCtn = (_props: Props): React.ReactElement => {
  const handleClick = (): void => {
    alert('Clicked button');
  };

  return (
    <div>
      <p>Home page</p>
      <div>
        <Button
          onClick={handleClick}
        >
          Click me
        </Button>
      </div>
    </div>
  );
};

export default HomePageCtn;
