import axios from 'axios';
import { KEY } from './config/config.json';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        type: 'video',
        key: KEY
    }
});
