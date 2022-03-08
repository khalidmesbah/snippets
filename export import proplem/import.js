const Node = require("./node");

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }
  enqueue(element) {
    this.elements.unshift(element);
  }
  insert(data) {
    const newNode = new Node(data);
    if (this.isEmpty) this.front = newNode;
    else this.rear.next = newNode;
    this.rear = newNode;
  }
  dequeue() {
    return this.elements.pop();
  }
  remove() {
    if (this.isEmpty()) return -404;
    this.front = this.front.next;
    if (!this.front) this.rear = null;
  }
  peekFront() {
    if (this.isEmpty()) return -404;
    return this.front.data;
  }
  // not working
  display() {
    if (this.isEmpty()) return;
    let curr = this.front;
    process.stdout.write(`(front)`);
    while (curr.next != this.rear) {
      process.stdout.write(`${curr.data}-->`);
      curr = curr.next;
    }
    process.stdout.write(`${this.rear.data} (REAR)\n`);
  }
  getSize() {
    return this.elements.length;
  }
  isEmpty() {
    return this.front === null && this.rear === null;
  }
}

const queue = new Queue();

queue.insert(5);
queue.insert(4);
queue.insert(3);
queue.insert(2);
queue.insert(1);
console.log(queue.peekFront());
