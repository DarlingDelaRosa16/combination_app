import { useState } from 'react'
import { NumberContext } from './NumberContext'


export const NumberProvider = ({ children }) => {

    const [numbers, setNumbers] = useState([])
    const [sets, setSets] = useState(2)
    const [combination, setCombination] = useState([])
    const [alertText, setAlertText] = useState('')
    const [currentPage, setCurrentPage] = useState(0)


    return (
        <NumberContext.Provider value={{
            numbers,
            setNumbers,
            sets,
            setSets,
            combination,
            setCombination,
            alertText,
            setAlertText,
            currentPage,
            setCurrentPage
        }} >
            {children}
        </NumberContext.Provider>
    )
}