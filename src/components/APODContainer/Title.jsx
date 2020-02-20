import React from 'react';

const Title = props => {
  const {title} = props;

  return (
    <h1 className="title">{title}</h1>
  );
};

export default Title;
