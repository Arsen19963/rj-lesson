export default class Stack {
  _stack = [];
  push = (elem) => {
    this._stack.push(elem);
  };
  pop = () => {
    this._stack.pop();
  };
}

const stack = new Stack();
stack.push("hgfdhf")
console.log(stack)
stack.pop()
console.log(stack)
