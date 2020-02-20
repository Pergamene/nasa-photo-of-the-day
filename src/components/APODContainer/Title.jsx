import React from 'react';

const Title = props => {
  const {title} = props;

  console.log('props in Title', props);

  return (
    <h1 className="title">{title}</h1>
  );
};

export default Title;
