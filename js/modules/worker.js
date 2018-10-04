async function request(url) {
  const response = await fetch(url);
  postMessage(response.url);
}

self.addEventListener('message', function({data}) {
  request(data);
});
