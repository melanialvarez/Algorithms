function binary_search(A, target){
    var low = 0;
    var high = A.length-1;

    while(high >= low){
        // console.log(low, high);
        var mid = Math.floor((high+low)/2);
        // console.log("mid", mid);
        if(A[mid] === target) return mid;

        //If left side of the array is correctly sorted
        if(A[mid] <= A[high]){ //Right side is correctly sorted
            //If target is greater than value in the middle search for right half
            if(target > A[mid] && target <= A[high]){
                low = mid+1;
            } else {
                high = mid - 1;
            }
        }


        //If left side of the array is correctly sorted
        if(A[low] <= A[mid]){ //left side correctly sorted

            //If target is smaller than value in the middle search for left half
            if(target < A[mid] && A[low]<= target){
                high = mid-1;
            } else {
                low = mid +1;
            }

        }

    }

    return -1;
}

console.log("result ",binary_search([4,5,6,7,9,0,1,2], 0));
