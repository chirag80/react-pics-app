import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID c980bf830090b0db9689f85cb53d7f902886eb2f0ba30a26e7a24d9226ac6c87"
    }
})