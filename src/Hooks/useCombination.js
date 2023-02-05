
export const useCombination = () => {
    
    // Javascript program to print all
// combination of size r in an array of size n  
 
    /* arr[]  ---> Input Array
    data[] ---> Temporary array to store current combination
    start & end ---> Starting and Ending indexes in arr[]
    index  ---> Current index in data[]
    r ---> Size of a combination to be printed */
    const combinationUtil = (arr,data,start,end,index,r) => {
        // Current combination is ready to be printed, print it
        if (index == r)
        {
            for (let j=0; j<r; j++)
            {
                console.log(data[j]);
            }
        }
         
        // replace index with all possible elements. The condition
        // "end-i+1 >= r-index" makes sure that including one element
        // at index will make a combination with remaining elements
        // at remaining positions
        for (let i=start; i<=end && end-i+1 >= r-index; i++)
        {
            data[index] = arr[i];
            combinationUtil(arr, data, i+1, end, index+1, r);
        }
    }
     
    // The main function that prints all combinations of size r
    // in arr[] of size n. This function mainly uses combinationUtil()
    const printCombination= (arr,n,r) => {
        // A temporary array to store all combination one by one
        let data = new Array(r);
        // Print all combination using temporary array 'data[]'
        combinationUtil(arr, data, 0, n-1, 0, r);
    }
     
    /*Driver function to check for above function*/
    // let arr=[1, 2, 3, 4, 5];
    // let r = 3;
    // let n = arr.length;
    // printCombination(arr, n, r);
    

    return{
        printCombination
    }
}
