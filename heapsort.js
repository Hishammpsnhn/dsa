const arr = [5, 7, 40, 8, 6, 30, 8];

function heapSort(arr) {
  let n = arr.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  console.log(arr)

  // Extract elements from heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current root to the end
    [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap

    // Call heapify on the reduced heap
    heapify(arr, i, 0);
  }
}

function heapify(arr,n,i){
    let large = i;
    let left = 2*i+1
    let right = 2*i+2;

    if(left <n && arr[left] >arr[large]){
        large = left
    }
    if(right <n && arr[right] >arr[large]){
        large = right
    }
    if(i!=large){
        [arr[i],arr[large]] = [arr[large],arr[i]]
        heapify(arr,n,large)
    }

}

// Call the heapSort function
heapSort(arr);

// Output the sorted array
console.log(arr); // [5, 6, 7, 8, 8, 30, 40]
