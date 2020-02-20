import axios from 'axios';

class ApodService {
  
  static async apodFetch(url) {
    // const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=TodeXakzh6TeQfkn2RS0r6qeWqfaQyyXhlZRa3JV&date=2020-02-19`)
    console.log('get url: ', url);
    const response = await axios.get(url);
    return response.data;
  }
}

export default ApodService;
