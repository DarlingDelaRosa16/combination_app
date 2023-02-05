import { useState } from 'react'
import { NumberContext } from './NumberContext'


export const NumberProvider = ({ children }) => {

    const [numbers, setNumbers] = useState([])
    const [sets, setSets] = useState(6)

    return(
        <NumberContext.Provider value={{numbers, setNumbers, sets, setSets}} >
            { children }
        </NumberContext.Provider>
    )
}