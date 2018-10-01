self.addEventListener('message', function () {
  fetch(`https://api.unsplash.com/photos/random/?client_id=840d21b0d5b76d54ecd48221b246ac3db08f513eedf8f77fc1a40efb4d363ee8`)
    .then(res => res.json())
    .then(data => postMessage(data))
    .catch(error => console.error(error))
});
