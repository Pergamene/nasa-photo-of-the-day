import axios from 'axios';

class APODService {
  
  static async apodFetch() {
    await axios.get(`https://api.nasa.gov/planetary/apod?api_key=TodeXakzh6TeQfkn2RS0r6qeWqfaQyyXhlZRa3JV&date=2020-02-19`)
    // fetch(`https://api.nasa.gov/planetary/apod?api_key=TodeXakzh6TeQfkn2RS0r6qeWqfaQyyXhlZRa3JV&date=2020-02-19`)
      .then(response => {
        console.log('apodFetch: ', response.data);
        return response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
}

export default APODService;
