import { useContext } from "react"
import { NumberContext } from "../context/NumberContext"

export const TypesOfSets = () => {

    const {setNumbers, setSets} = useContext(NumberContext)

    const setsOptions = (number)=> {
        setSets(number)
        setNumbers([])
    }
    
    return (
        <div>
            <div className="dropdown">
                <button className="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Conjunto
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <button className="dropdown-item" onClick={()=>setsOptions(4)}>
                            Loteca
                        </button>
                    </li>
                    <li>
                        <button className="dropdown-item" onClick={()=>setsOptions(3)}>
                            LotoMax
                        </button>
                    </li>
                    <li>
                        <button className="dropdown-item" onClick={()=>setsOptions(2)}>
                            LotoPool
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
