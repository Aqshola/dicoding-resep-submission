export const fetcher = (url) =>
  fetch(url, {
    mode: 'no-cors',
    method: 'get',
  }).then((res) => console.log(res))

export const createCORSRequest = function (method, url) {
  const xhr = new XMLHttpRequest()
  if ('withCredentials' in xhr) {
    // Most browsers.
    xhr.open(method, url, true)
  } else if (typeof XDomainRequest != 'undefined') {
    // IE8 & IE9
    xhr = new XDomainRequest()
    xhr.open(method, url)
  } else {
    // CORS not supported.
    xhr = null
  }
  return xhr
}
