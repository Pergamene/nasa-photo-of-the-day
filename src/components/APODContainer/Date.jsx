import React from 'react';

const Date = props => {
  const {date} = props;

  console.log('props in Date', props);

  return (
    <p className="date">{date}</p>
  );
};

export default Date;
