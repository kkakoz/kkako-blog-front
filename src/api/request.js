import axios from 'axios';
import QS from 'qs';

axios.defaults.baseURL = 'http://localhost:10003' 
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

export function get(url, params){    
  return new Promise((resolve, reject) =>{        
      axios.get(url, {            
          params: params        
      }).then(res => {
          resolve(res.data);
      }).catch(err =>{
          reject(err.data)        
  })    
});}

export function post(url, params) {
  return axios.post(url, QS.stringify(params))
}

export const BlogLogin = p => post('blog/login', p);
