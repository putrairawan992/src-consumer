/**
 * Axios Request Wrapper
 * ---------------------
 *
 * @author  Sheharyar Naseer (@sheharyarn)
 * @license MIT
 *
 */
import ServerValidation from '@helpers/ServerValidation';
import CustomAlert from '@helpers/CustomAlert';
import axios from 'axios';
import constants from './constants';

/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
  baseURL: constants.api_url
});

/**
 * Request Wrapper with default success/error actions
 */
const request = options => {
  const onSuccess = response => {
    console.debug('Request Successful!', response);
    return response.data;
  };

  const onError = error => {
    console.debug('Request Failed:', error.config);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      // console.debug('Status:', error.response.status);
      // console.debug('Data:', error.response.data);
      // console.debug('Headers:', error.response.headers);
      // if validation error
      if (error.response.status === 422 && error.config.method === 'post') {
         ServerValidation(error.response.data.errors);
      }
      if (error.response.status === 401 && error.config.method === 'post' && error.response.data.error === 'invalid_credentials') {
         CustomAlert(null, 'Nomor Ponsel / Password salah.', [{ text: 'OK' }]);
      }
    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.debug('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  };

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default request;
