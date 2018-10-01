window.onload = function() {
  const imageWrapper = document.getElementById('imageWrapper');
  const btnGetPhotos = document.getElementById('getPhotos');
  const url = `https://api.unsplash.com/photos/random/?client_id=50c4ae62503d9e1a2cdfe95159d0b512a1d0c70b7e2f6424ea1bb509de9ec3a5`;

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
      img.src = data.urls.regular;
      imageWrapper.appendChild(img);
      console.log('1');
    });

    worker2.addEventListener('message', function({data}) {
      const img = document.createElement('img');
      img.src = data.urls.regular;
      imageWrapper.appendChild(img);
      console.log('2');
    });

    worker3.addEventListener('message', function({data}) {
      const img = document.createElement('img');
      img.src = data.urls.regular;
      imageWrapper.appendChild(img);
      console.log('3');
    });
  }
};
