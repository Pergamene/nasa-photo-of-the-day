import React, {Fragment, useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import ApodService from '../../services/ApodService.js';
import Title from './Title.jsx';
import Image from './Image.jsx';
import Explanation from './Explanation.jsx';
import ImgDate from './ImgDate.jsx';
//import CSS
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
    setUrl(baseUrl.slice() + dateStr);
  }

  const formatDate = date => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  }

  return (
    <Fragment>
      <h1>APOD</h1>
      {apiData && <Title title={apiData.title} /> }
      {apiData && <ImgDate date={apiData.date} /> }
      <DatePicker selected={date} onChange={pickDate} />
      {apiData && <Image url={apiData.url} title={apiData.title} /> }
      {apiData && <Explanation explanation={apiData.explanation} /> }
    </Fragment>
  );
};

export default ApodCard;
