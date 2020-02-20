import React from 'react';

const Explanation = props => {
  const {explanation} = props;

  return (
    <p className="explanation">{explanation}</p>
  );
};

export default Explanation;
