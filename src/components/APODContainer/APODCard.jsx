import React, {useState, useEffect} from 'react';
import APODService from '../../services/APODService.js';
import Title from './Title.jsx';
import Image from './Image.jsx';
import Explanation from './Explanation.jsx';
import Date from './Date.jsx';
//import CSS

const APODCard = () => {
  const [apiData, setData] = useState();
  
  useEffect(() => {
    fetchAPOD();
  }, []); 
  
  const fetchAPOD = async () => {
    const result = APODService.apodFetch();
    console.log(`fetchResult: ${result}`);
    setData(result);
    console.log(`apiData: ${apiData}`);
  }

  return (
    // <React.Fragment>
    <div>
      <h1>APOD</h1>
      {apiData && <Title title={apiData.title}/>}
    </div>
    // </React.Fragment>
  );
}

export default APODCard;
