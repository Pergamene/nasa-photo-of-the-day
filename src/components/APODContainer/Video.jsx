import React from 'react';

const Video = props => {
  const {url, title} = props;
  
  return (
    <iframe src={url} title={title} frameBorder="0" />
  );
};

export default Video;
