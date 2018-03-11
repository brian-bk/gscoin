
/**
 * Reject response if status code is not 2xx
 * @param {Promise} response 
 * @returns {Promise} successful or rejected response data
 */
export const successStatus = response => 
  response.status >= 200 && response.status < 300 ?
    Promise.resolve(response) 
    : Promise.reject(new Error(response.statusText));

/**
 * Get json from response
 * @param {Promise} response 
 * @returns {Promise} json data
 */
export const getJson = response => response.json();

/**
 * Get rejected promise from a type error
 * @param {string} message 
 * @returns {Promise} Rejected promise
 */
export const typeError = message =>
  Promise.reject(new Error(`Type Error: ${message}`));

/**
 * Get cookie value
 * @param {string} cookieName 
 * @return {string} Cookie value
 */
export const getCookie = cookieName => {
  const value = '; ' + document.cookie;
  const parts = value.split('; ' + cookieName + '=');
  if (parts.length === 2)
    return parts.pop().split(';').shift();
};

/**
 * Get default headers
 * @return {object} Dictionary of default headers
 */
export const getHeaders = () => {
  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };
  const csrfToken = getCookie('csrftoken');
  if(csrfToken) {
    headers['X-CSRFToken'] = csrfToken;
  }
  return headers;
};
