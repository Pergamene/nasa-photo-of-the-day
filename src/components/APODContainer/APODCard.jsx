import React, {Fragment, useState, useEffect} from 'react';
import APODService from '../../services/APODService.js';
import Title from './Title.jsx';
import Image from './Image.jsx';
import Explanation from './Explanation.jsx';
import Date from './Date.jsx';
//import CSS

const APODCard = () => {
  const [apiData, setData] = useState();
  
  useEffect(() => {
    const fetchAPOD = async () => {
      const result = await APODService.apodFetch();
      console.log(`fetchResult: ${result}`);
      setData(result);
      console.log(`apiData: ${apiData}`);
    };
    fetchAPOD();
  }, []); 

  return (
    <Fragment>
      <h1>APOD</h1>
      {apiData && <Title title={apiData} /> }
      {apiData && <Image src={apiData} /> }
      {apiData && <Explanation explation={apiData} /> }
      {apiData && <Date date={apiData} /> }
    </Fragment>
  );
};

export default APODCard;
