'use strict';
import composerUrl from "./modules/composer-url.js";
import CreateWorker from "./modules/create-worker.js";

document.addEventListener('DOMContentLoaded', () => {
  main();
});

const main = () => {
  const imgWrapper = document.getElementById('imageWrapper');
  const btnGetPhotos = document.getElementById('getPhotos');
  const countWorker = 5;
  const url = composerUrl('600/500/?random');
  
  btnGetPhotos.addEventListener('click', () => {
    const worker = new CreateWorker(url, countWorker);
    const arrWorkers = worker.getWorkers();
    arrWorkers.forEach(worker => {
      worker.addEventListener('message', ({data}) => {
        const img = document.createElement('img');
        img.src = data;
        imgWrapper.appendChild(img);
      })
    });
  });
};

