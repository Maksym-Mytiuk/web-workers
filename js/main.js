window.onload = function () {
  const inputSearch = document.getElementById('search');

  if (!!window.Worker) {
    const worker = new Worker("js/worker.js");

    inputSearch.addEventListener('change', function (e) {
      worker.postMessage(e.value);
    });

    worker.addEventListener('message', function ({data}) {
      const movieWrapper = document.createElement('div');
      document.body.appendChild(movieWrapper);

      const img = document.createElement('img');
      img.src = data.urls.regular;
      movieWrapper.appendChild(img)
    });
  }
};