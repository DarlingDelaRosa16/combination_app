import { useContext } from "react";
import { NumberContext } from "../context/NumberContext";

export const useCombination = () => {

    const {setCombination} = useContext(NumberContext)

    const combinations = (arrList, n, result, arrayResult = []) => {

        for (let i = 0; i < arrList.length; ++i) {
            
            let newResult = arrayResult.slice();
            let newArrList = arrList.slice();
            
            newResult.push(arrList[i]);
            newArrList.splice(i, 1);

            if(i > 200){break}

            if (n > 1) {
                combinations(newArrList, n - 1, result, newResult);
            } else {
                result.push(newResult.join("-"));
                setCombination(result)
            }
        }
    }
    return {
        combinations
    }
}
