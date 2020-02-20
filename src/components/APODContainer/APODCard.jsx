import React, { Fragment, useState, useEffect } from 'react';

import ApodService from '../../services/ApodService.js';
import Title from './Title.jsx';
import Image from './Image.jsx';
import Video from './Video.jsx';
import Explanation from './Explanation.jsx';
import ImgDate from './ImgDate.jsx';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ApodCard = () => {
  const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=TodeXakzh6TeQfkn2RS0r6qeWqfaQyyXhlZRa3JV&date=';
  const [apiData, setData] = useState();
  const [url, setUrl] = useState(baseUrl);
  const [date, setDate] = useState(new Date());
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    setUrl(baseUrl.slice() + dateStr);
    const fetchAPOD = async () => {
      const result = await ApodService.apodFetch(url);
      setData(result);
    };
    fetchAPOD();
  }, [dateStr, url]); 

  const pickDate = date => {
    setDate(date);
    setDateStr(formatDate(date));
    setUrl(baseUrl + dateStr);
  }

  const formatDate = date => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  }

  return (
    <Fragment>
      { apiData && <Title title={ apiData.title } /> }
      { apiData && (apiData.media_type === 'image' ? <Image url={ apiData.url } title={ apiData.title } /> : <Video url={ apiData.url } title={ apiData.title } />) }
      { apiData && <ImgDate date={ apiData.date } /> }
      <DatePicker selected={ date } onChange={ pickDate } />
      { apiData && <Explanation explanation={ apiData.explanation } /> }
    </Fragment>
  );
};

export default ApodCard;
