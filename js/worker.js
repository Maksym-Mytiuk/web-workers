self.addEventListener('message', function({data}) {
  fetch(data)
    .then(res => res.json())
    .then(data => postMessage(data))
    .catch(error => console.error(error))
});
