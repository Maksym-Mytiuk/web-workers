import Worker from './image.worker.js'

class CreateWorker {
  
  constructor(url = 'https://picsum.photos/500/500/?random', count = 3) {
    this.url = url;
    this.count = count;
    this.workers = [];
    
    this.addWorkers();
    this.sendMassage();
  }
  
  addWorkers() {
    for(let i = 0; i < this.count; i++) {
      const worker = new Worker();
      this.workers.push(worker);
    }
  }
  
  sendMassage() {
    this.workers.forEach(worker => {
      worker.postMessage(this.url)
    })
  }
  
  getWorkers() {
    return this.workers;
  }
}

export default CreateWorker;
