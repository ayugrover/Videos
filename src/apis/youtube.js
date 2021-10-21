import axios from 'axios';

const KEY = 'AIzaSyA9bdZUWDGvVrP3klfk6flU2_N2ZkFAiZ0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        type: 'video',
        maxResult: 5,
        key : KEY
    }
})