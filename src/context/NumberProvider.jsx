import { useState } from 'react'
import { NumberContext } from './NumberContext'


export const NumberProvider = ({ children }) => {

    const [numbers, setNumbers] = useState([])
    const [sets, setSets] = useState(4)
    const [combination, setCombination] = useState([])


    return (
        <NumberContext.Provider value={{
            numbers,
            setNumbers,
            sets,
            setSets,
            combination,
            setCombination
        }} >
            {children}
        </NumberContext.Provider>
    )
}