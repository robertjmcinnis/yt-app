import axios from 'axios';

const KEY = 'AIzaSyCRmN_KVC6U4Y4IX_JAcqiomjj4ZKYzPjk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});