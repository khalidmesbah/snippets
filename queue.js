class Queue {
  constructor() {
    this.elements = [];
  }
  // add an element to the start of queue
  enqueue(element) {
    this.elements.push(element);
  }
  // remove an element from the start of queue and return it
  dequeue(element) {
    return this.elements.shift();
  }
  // return the first element without removing it
  peek() {
    return this.elements[0];
  }
  // return the size of the queue
  getSize() {
    return this.elements.length;
  }
  // return whether a queue is empty or not
  isEmpty() {
    return this.getSize() === 0;
  }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.dequeue();
console.log(q.getSize());
console.log(q.peek());
console.log(q.isEmpty());
