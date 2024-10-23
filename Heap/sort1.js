const arr = [5, 4, 7, 8, 9, 1];

function sort(arr){
    console.log(arr)
    let n = arr.length;
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }
    console.log(arr)
    for(let i=n-1;i>=0;i--){
        [arr[i],arr[0]] =  [arr[0],arr[i]]
        heapify(arr,i,0)
    }
}
function heapify(arr,n,i){
    let large = i;
    let left = 2*i+1
    let right = 2*i+2;
    if(left<n && arr[left]>arr[large]){
        large = left
    }
    if(right<n && arr[right]>arr[large]){
        large = right
    }
    if(i!=large){
        [arr[i],arr[large]] = [arr[large],arr[i]]
        heapify(arr,n,large)
    }
}
sort(arr)
console.log(arr)