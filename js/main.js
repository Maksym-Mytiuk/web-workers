window.onload = function() {
  const imageWrapper = document.getElementById('imageWrapper');
  const btnGetPhotos = document.getElementById('getPhotos');
  const url = `https://source.unsplash.com/random`;

  if(!!window.Worker) {
    const worker = new Worker("js/worker.js");
    const worker2 = new Worker("js/worker.js");
    const worker3 = new Worker("js/worker.js");

    btnGetPhotos.addEventListener('click', function() {
      worker.postMessage(url);
      worker2.postMessage(url);
      worker3.postMessage(url);
    });

    worker.addEventListener('message', function({data}) {
      const img = document.createElement('img');
      img.src = data;
      imageWrapper.appendChild(img);
    });

    worker2.addEventListener('message', function({data}) {
      const img = document.createElement('img');
      img.src = data;
      imageWrapper.appendChild(img);
    });

    worker3.addEventListener('message', function({data}) {
      const img = document.createElement('img');
      img.src = data;
      imageWrapper.appendChild(img);
    });
  }
};
