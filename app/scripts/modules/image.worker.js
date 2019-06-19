const request = async (url) => {
  try {
    const response = await fetch(url);
    postMessage(response.url);
  } catch (err) {
    console.error(err);
    self.close();
  }
};

self.addEventListener('message', ({data}) => request(data));