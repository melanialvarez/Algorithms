function binary_search(A, target){
    var low = 0;
    var high = A.length-1;

    while(high >= low){
        console.log(low, high);
        var mid = Math.floor((high+low)/2);
        console.log(mid);
        if(A[mid] === target) return mid;

        //If target is smaller than value in the middle search for left half
        if(target < A[mid]){
            high = mid-1;
        }

        //If target is greater than value in the middle search for right half
        if(target > A[mid]){
            low = mid+1;
        }

        console.log("news ",low, high);

    }

    return -1;
}
console.log("result ", binary_search([1,3,4,5,6,9,15],19));


