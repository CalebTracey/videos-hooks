import axios from 'axios';

const KEY = 'AIzaSyBUlnsxA0rZORZAu1wei7nTA-ZaTA2nCXw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    },
//     headers: {
//         'Access-Control-Allow-Origin':  'http://142.105.201.190:3000/',
// 'Access-Control-Allow-Methods': 'GET',
// 'Access-Control-Allow-Headers': ['Content-Type', 'Authorization']
//     },
})