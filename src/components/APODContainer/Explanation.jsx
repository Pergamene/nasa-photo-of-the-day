import React from 'react';

const Explanation = props => {
  const {explanation} = props;

  console.log('props in Explanation', props);

  return (
    <p className="explanation">{explanation}</p>
  );
};

export default Explanation;
