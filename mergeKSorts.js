const a = [1, 6, 7, 9];
const b = [2, 3, 5, 8, 14];
const c = [4, 10, 13, 15, 65];
const d = [102, 109, 121, 123, 301,707];
let finalArray = [];
class maxHeap {
  constructor() {
    this.heap = [];
  }

  insert(n) {
    this.heap.push(n);
    let N = this.heap.length;
    for (let i = N - 1; i >= 0; i--) {
      this.heapify(N, i);
    }
    //  console.log(n, "Inserted the array is", this.heap);
  }

  pop() {
    const t = this.heap.shift();
    let N = this.heap.length;
    for (let i = N - 1; i >= 0; i--) {
      this.heapify(N, i);
    }
    //   console.log("Popped the array element is", t);
    return t;
  }

  heapify(N, i) {
    let smallest = i;
    const r = 2 * i + 2;
    const l = 2 * i + 1;
    if (r < N && this.heap[r] < this.heap[smallest]) smallest = r;
    if (l < N && this.heap[l] < this.heap[smallest]) smallest = l;
    if (smallest != i) {
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      this.heapify( N, smallest);
    }
  }
}

const mergeArrays = (allArrays) => {
  let maxArrays = [...allArrays];

  let i = 0;
  let k = maxArrays.length;
  const arrLengths = maxArrays.map((arr) => arr.length);
  arrLengths.sort();
  const max = arrLengths[arrLengths.length - 1];
  const myHeap = new maxHeap();
  for (let i = 0; i < max ; i++) {
    maxArrays = maxArrays.map((arr) => {
      //  console.log("arr",arr)
        if(!!arr?.[0])
      myHeap.insert(arr[0]);
      arr?.shift();
      return arr;
    });

    // console.log("maxArrays", maxArrays);
    finalArray.push(myHeap.pop());
    //  console.log("intermediate finalarray",finalArray)
  }

  while (myHeap.heap.length > 0) {
    finalArray.push(myHeap.pop());
    //   console.log("intermediate finalarray",finalArray)
  }
};

mergeArrays([a, b, c, d]);
console.log("Merged Array", finalArray);
