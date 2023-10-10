const arr = [43,23,12,56,23,13,4,75,123,22,1,642,4]
const k = 4

class maxHeap{
constructor(){
    this.heap =[]
}

 heapify(i) {
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // left = 2*i + 1
    var r = 2 * i + 2; // right = 2*i + 2
  
    // If left child is larger than root
    if (l < N && this.heap[l] > this.heap[largest]) largest = l;
  
    // If right child is larger than largest so far
    if (r < N && this.heap[r] > this.heap[largest]) largest = r;
  
    // If largest is not root
    if (largest != i) {
      var swap = this.heap[i];
      this.heap[i] = this.heap[largest];
      this.heap[largest] = swap;
  
      // Recursively heapify the affected sub-tree
      heapify(largest);
    //   console.log("count", count);
    //   count = count + 1;
    }
  };
}

