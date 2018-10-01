window.onload = function() {
  const imageWrapper = document.getElementById('imageWrapper');
  const btnGetPhotos = document.getElementById('getPhotos');
  const url = `https://api.unsplash.com/photos/random/?client_id=50c4ae62503d9e1a2cdfe95159d0b512a1d0c70b7e2f6424ea1bb509de9ec3a5`;

  if(!!window.Worker) {
    let counter = 0;
    const worker = new Worker("js/worker.js");
    const worker2 = new Worker("js/worker.js");
    const worker3 = new Worker("js/worker.js");

    btnGetPhotos.addEventListener('click', function() {
      let interval = setInterval(worker.postMessage(url), 1000);
      interval();
      setTimeout(clearInterval(interval), 10000)
    });

    worker.addEventListener('message', function({data}) {
      const img = document.createElement('img');
      img.src = data.urls.regular;
      imageWrapper.appendChild(img);
      counter = counter + 1;
      console.log(counter);
    });

    // worker2.addEventListener('message', function({data}) {
    //   const img = document.createElement('img');
    //   img.src = data.urls.regular;
    //   imageWrapper.appendChild(img);
    //   console.log('2');
    // });
    //
    // worker3.addEventListener('message', function({data}) {
    //   const img = document.createElement('img');
    //   img.src = data.urls.regular;
    //   imageWrapper.appendChild(img);
    //   console.log('3');
    // });
  }
};
