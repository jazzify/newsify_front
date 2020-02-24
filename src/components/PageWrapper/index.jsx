import React from 'react';

function PageWrapper(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const PageComponent = props.component;

  return (
    <PageComponent />
  );
}

export default PageWrapper;
