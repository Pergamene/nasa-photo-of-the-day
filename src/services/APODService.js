// import axios from 'axios';

class APODService {
  
  static apodFetch() {
    // axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-02-19`)
    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-02-19`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
}

export default APODService;
