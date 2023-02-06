import { useContext } from "react"
import { NumberContext } from "../context/NumberContext"

export const TypesOfSets = () => {

    const {setSets} = useContext(NumberContext)

    const setsOptions = (number)=> {
        setSets(number)
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
                        <button className="dropdown-item" onClick={()=>setsOptions(6)}>
                            LotoMax
                        </button>
                    </li>
                    <li>
                        <button className="dropdown-item" onClick={()=>setsOptions(4)}>
                            LotoPool
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
