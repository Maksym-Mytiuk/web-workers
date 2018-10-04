'use strict';

const main = () => {
  const imageWrapper = document.getElementById('imageWrapper');
  const btnGetPhotos = document.getElementById('getPhotos');
  const url = `https://picsum.photos/600/500/?random`;

  const worker = new Worker("js/modules/worker.js");
  const worker2 = new Worker("js/modules/worker.js");
  const worker3 = new Worker("js/modules/worker.js");

  const getPhotoWorker = () => worker.postMessage(url);
  const getPhotoWorker2 = () => worker2.postMessage(url);
  const getPhotoWorker3 = () => worker3.postMessage(url);

  const countPhotos = 47;
  let counter = 0;

  btnGetPhotos.addEventListener('click', function() {
    getPhotoWorker();
    getPhotoWorker2();
    getPhotoWorker3();

    const timer = setInterval(getPhotoWorker, 1000);
    const timer2 = setInterval(getPhotoWorker2, 1000);
    const timer3 = setInterval(getPhotoWorker3, 1000);

    setTimeout(() => {
      clearInterval(timer);
      clearInterval(timer2);
      clearInterval(timer3);
    }, countPhotos * 1000);
  });

  worker.addEventListener('message', function({data}) {
    counter = counter + 1;
    if(counter > countPhotos) {
      worker.terminate()
    }

    const img = document.createElement('img');
    img.src = data;
    imageWrapper.appendChild(img);
  });

  worker2.addEventListener('message', function({data}) {
    counter = counter + 1;
    if(counter > countPhotos) {
      worker2.terminate()
    }

    const img = document.createElement('img');
    img.src = data;
    imageWrapper.appendChild(img);
  });

  worker3.addEventListener('message', function({data}) {
    counter = counter + 1;
    if(counter > countPhotos) {
      worker3.terminate()
    }

    const img = document.createElement('img');
    img.src = data;
    imageWrapper.appendChild(img);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  main();
});
