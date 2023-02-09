import { useContext} from "react";
import { NumberContext } from "../context/NumberContext";

export const useCombination = () => {

    const { setCombination } = useContext(NumberContext)

    let counter = 0

    const combinations = (arrList, n, result, arrayResult = []) => {
        
        for (let i = 0; i < arrList.length; ++i) {
            
            counter = counter + 1
            
            let newResult = arrayResult.slice();
            let newArrList = arrList.slice();

            newResult.push(arrList[i]);
            newArrList.splice(i, 1);
            
            if (counter >= 200) {
                break
            } else {

                if (n > 1) {
                    combinations(newArrList, n - 1, result, newResult);
                } else {
                    result.push(newResult.sort().join("-"));
                    const noPermutationArr = Array.from(new Set(result.map(JSON.stringify)), JSON.parse)
                    setCombination(noPermutationArr)
                }
            }
        }
    }

    return {
        combinations
    }
}
