import { useContext } from "react";
import { NumberContext } from "../context/NumberContext";

export const useCombination = () => {

    let endArray = [];
    function combinationUtil(arr, data, start, end, index, r) {

        if (endArray.length == 2000) return;

        if (index == r) {
            let tempArr = [];
            for (let j = 0; j < r; j++) {
                tempArr[j] = data[j];
            }
            tempArr.sort((x) => Math.random() - 0.5);
            endArray.push(tempArr.join("-"));
        }

        for (let i = start; i <= end && end - i + 1 >= r - index; i++) {
            data[index] = arr[i];
            combinationUtil(arr, data, i + 1, end, index + 1, r);
        }
    }

    function printCombination(arr, n, r) {
        let data = new Array(r);
        combinationUtil(arr, data, 0, n - 1, 0, r);
    }

    // let arr = [
    //     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    // ];
    // let r = 5;
    // let n = arr.length;

    return {
        printCombination,
        endArray
    }
}
