import axios from 'axios';

const KEY = 'AIzaSyCfubNvpMTRFc8uni7CjAzb1JuZNWAlv1U';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        type: 'video',
        maxResult: 5,
        key : KEY
    }
})