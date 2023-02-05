import { useContext } from "react"
import { NumberContext } from "../context/NumberContext"
import { useCombination } from "../Hooks/useCombination"

export const ResultBox = () => {

    const { printCombination } = useCombination() 
    const {numbers, sets} = useContext(NumberContext)

    
    const createCombinations = ()=>{
        printCombination(numbers, numbers.length, sets);
    } 

    return (
        <>
        <div className='col-12 border result_box mt-2 rounded'>
            <ol>

            </ol>
        </div>
        <button 
            className="btn btn-outline-primary mt-2"
            onClick={createCombinations}
        >
            crear combinanciones
        </button>
        </>
    )
}
