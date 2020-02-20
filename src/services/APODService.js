import axios from 'axios';

class ApodService {
  
  static async apodFetch(url) {
    const response = await axios.get(url);
    return response.data;
  }
}

export default ApodService;
