let arr = [2, 5, 3, 1012, 34, 12, 4, 77];
let sorted = [];
let count = 0;
let heapify = (arr, N, i) => {
  var largest = i; // Initialize largest as root
  var l = 2 * i + 1; // left = 2*i + 1
  var r = 2 * i + 2; // right = 2*i + 2

  // If left child is larger than root
  if (l < N && arr[l] > arr[largest]) largest = l;

  // If right child is larger than largest so far
  if (r < N && arr[r] > arr[largest]) largest = r;

  // If largest is not root
  if (largest != i) {
    var swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;

    // Recursively heapify the affected sub-tree
    heapify(arr, N, largest);
    console.log("count", count);
    count = count + 1;
  }
};

function buildHeap(arr) {
  var N = arr.length;

  // Build heap (rearrange array)
  for (var i = Math.floor(N / 2) - 1; i >= 0; i--) heapify(arr, N, i);
}

function printArray(arr) {
  var N = arr.length;
  var s = "";
  for (var i = 0; i < N; i++) {
    s += arr[i] + " ";
  }
  console.log(s);
}

var N = arr.length;

// Function call
for (i = N - 1; i >= 0; i--) {
  buildHeap(arr);
  const a = arr.shift();
  sorted.push(a);
  console.log("counting", count);
  count = count + 1;
}

console.log("Array representation of Heap is: ");
printArray(arr, N);
console.log("Array representation of Sorted Heap is: ");
printArray(sorted);
