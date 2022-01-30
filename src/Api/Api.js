import axios from 'axios';
import {URL} from '../../Config';

class ApiCalls {
  constructor(url, path, data, config, method) {}

  async Calls(path, method, data, config, nourl) {
    let res = [];
    try {
      switch (method) {
        case 'GET':
          if (nourl) {
            res = await axios.get(`${path}`, config);
          } else {
            res = await axios.get(`${URL}/${path}`, config);
          }
          return res;
          break;
        case 'POST':
          res = await axios.post(`${URL}/${path}`, data, config);
          return res;
          break;
        case 'PUT':
          res = await axios.put(`${URL}/${path}`, data, config);
          return res;
          break;
        case 'DELETE':
          res = await axios.delete(`${URL}/${path}`, data, config);
          return res;
          break;
        default:
          break;
      }
    } catch (e) {
      // console.log()
      return {status: '400', msg: e};
    }
  }
}
export default ApiCalls;
