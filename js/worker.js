self.addEventListener('message', function({data}) {
  fetch(data)
    .then(res => postMessage(res.url))
    .catch(error => console.error(error))
});
