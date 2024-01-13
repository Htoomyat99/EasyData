const timeOutForFetch = 5000;

const api = 'https://api.pokemontcg.io/v2/';

//FetchGet
export const fetchGetByToken = async (route, signal) => {
  try {
    const response = await fetch(api + route, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      signal: signal,
      timeOut: timeOutForFetch,
    });

    if (response != null) {
      const jsonRes = await response.json(); // Await the JSON parsing
      // console.log('status >>>', jsonRes);
      return jsonRes;
    } else {
      console.log('Error:', response);
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};

//FetchPost
export const fetchPostByToken = async (route, signal) => {
  try {
    const response = await fetch(api + route, {
      method: 'POST',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      body: JSON.stringify(data),
      signal: signal,
      timeout: timeOutForFetch,
    });

    if (response != null) {
      let json = await response.json();
      return json;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};
