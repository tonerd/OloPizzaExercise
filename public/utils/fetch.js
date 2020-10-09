import fetch from 'isomorphic-fetch';

class Fetch {
  get (url) {
    return fetch(url);
  }
}

export default Fetch
