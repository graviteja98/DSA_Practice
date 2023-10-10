let maxArray = []
const k  = 6
function findLargestSumSubarray(arr) {
    if (arr.length === 0) {
      return 0; // Handle the case of an empty array
    }
  
    let currentMax = arr[0];
    let maxSum = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      // Calculate the maximum sum ending at the current element
      currentMax = Math.max(arr[i], currentMax + arr[i]);
       
      // Update the overall maximum sum
      maxSum = Math.max(maxSum, currentMax);
      maxArray.push(maxSum)
    
    }
  
    return maxSum;
  }
  
  const arr = [ 10, -10, 20, -40 ];
  const largestSum = findLargestSumSubarray(arr);
  console.log(`Largest sum contiguous subarray: ${largestSum}`);
  console.log(`large sums ${maxArray}`)
  console.log(`kth largest sums ${maxArray[k-1]}`)
  