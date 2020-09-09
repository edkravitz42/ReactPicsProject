import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : { Authorization : 'Client-ID 68Nh0-1TP8roW49LrVFAcN_IKJoDJSc3XsqIfMicNGo',
            'Accept-Version' : 'v1'
            }
});