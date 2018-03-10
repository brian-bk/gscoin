
export function successStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

export function getJson(response) {
  return response.json();
}

export function typeError(message) {
  return Promise.reject(new Error(`Type Error: ${message}`));
}

export function getCookie(name) {
  let value = '; ' + document.cookie;
  let parts = value.split('; ' + name + '=');
  if (parts.length === 2)
    return parts.pop().split(';').shift();
}

export function getHeaders() {
  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };
  const csrfToken = getCookie('csrftoken');
  if(csrfToken) {
    headers['X-CSRFToken'] = csrfToken;
  }
  return headers;
}
