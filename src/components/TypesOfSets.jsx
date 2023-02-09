import { useContext, useEffect } from "react"
import { NumberContext } from "../context/NumberContext"

export const TypesOfSets = () => {

    const { setSets, sets, alertText, setAlertText } = useContext(NumberContext) 
    
    const setsOptions = (number) => {
        setAlertText('')
        setSets(number)
    }

    return (
        <div className="d-flex">
            <span className="alert"><i> {alertText}</i></span>
            <div className="dropdown">
                <button className="btn btn-outline-primary dropdown-toggle ms-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {sets}
                </button>
                <div className="dropdown-menu">
                    <button className="dropdown-item" onClick={() => setsOptions(2)}> 2 </button>
                    <button className="dropdown-item" onClick={() => setsOptions(3)}> 3 </button>
                    <button className="dropdown-item" onClick={() => setsOptions(4)}> 4 </button>
                    <button className="dropdown-item" onClick={() => setsOptions(5)}> 5 </button>
                    <button className="dropdown-item" onClick={() => setsOptions(6)}> 6 </button>
                    <button className="dropdown-item" onClick={() => setsOptions(7)}> 7 </button>
                    <button className="dropdown-item" onClick={() => setsOptions(8)}> 8 </button>
                    <button className="dropdown-item" onClick={() => setsOptions(9)}> 9 </button>
                    <button className="dropdown-item" onClick={() => setsOptions(10)}> 10 </button>
                </div>
            </div>
        </div>
    )
}
