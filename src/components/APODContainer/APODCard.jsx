import React, {Fragment, useState, useEffect} from 'react';
import ApodService from '../../services/ApodService.js';
import Title from './Title.jsx';
import Image from './Image.jsx';
import Explanation from './Explanation.jsx';
import Date from './Date.jsx';
//import CSS

const ApodCard = () => {
  const [apiData, setData] = useState();
  const [url, setUrl] = useState('https://api.nasa.gov/planetary/apod?api_key=TodeXakzh6TeQfkn2RS0r6qeWqfaQyyXhlZRa3JV');
  const [date, setDate] = useState('');

  useEffect(() => {
    setUrl(url.slice() + date);
    const fetchAPOD = async () => {
      const result = await ApodService.apodFetch(url);
      setData(result);
    };
    fetchAPOD();
  }, [date, url]); 

  const pickDate = (day, month, year) => {
    setDate(`&date=${year}-${month}-${day}`);
  }

  return (
    <Fragment>
      <h1>APOD</h1>
      {apiData && <Title title={apiData.title} /> }
      {apiData && <Date date={apiData.date} /> }
      {apiData && <Image url={apiData.url} title={apiData.title} /> }
      {apiData && <Explanation explanation={apiData.explanation} /> }
    </Fragment>
  );
};

export default ApodCard;
