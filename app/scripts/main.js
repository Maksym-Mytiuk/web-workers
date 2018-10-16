'use strict';
import composerUrl from "./modules/composer-url.js";
import CreateWorker from "./modules/create-worker.js";

document.addEventListener('DOMContentLoaded', () => {
  main();
});

export const main = () => {

  const btnGetPhotos = document.getElementById('getPhotos');
  const countWorker = 3;
  const url = composerUrl('600/500/?random');

  btnGetPhotos.addEventListener('click', () => {
    const worker = new CreateWorker(url, countWorker);
    const arrWorkers = worker.getWorkers();
    const imgWrapper = document.querySelector('.img-wrapper');

    arrWorkers.forEach(worker => {
      worker.addEventListener('message', ({data}) => {
        imgWrapper.innerHTML += `<img class="img" src="${data}">`
      })

    });
  });
};