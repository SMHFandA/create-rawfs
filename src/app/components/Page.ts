import React, { useEffect } from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
}

const Page = (props: Props): React.ReactElement => {
  useEffect(() => {
    document.title = props.title;
  }, []);

  return props.children as React.ReactElement;
};

export default Page;
