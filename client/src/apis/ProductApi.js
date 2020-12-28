import axios from 'axios';

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
    //baseURL: 'http://www.rkrandhir.com'
    //http://www.rkrandhir.com/assets/data/product.json
});