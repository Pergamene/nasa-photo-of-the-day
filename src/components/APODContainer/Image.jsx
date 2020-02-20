import React from 'react';

const Image = props => {
  const {url, title} = props;
  
  console.log('props in Image', props);

  return(
    <img className="apod" src={url} alt={title} />
  );
};

export default Image;
