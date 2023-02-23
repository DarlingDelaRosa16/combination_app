import { useContext } from 'react'
import { NumberContext } from '../context/NumberContext'
import { usePagination } from '../Hooks/usePagination'

export const ContentBox = () => {

    const { numbers, setNumbers, setCombination, setCurrentPage} = useContext(NumberContext)
    const { createCombinations } = usePagination()


    const removeNumber = (item) => {
        setNumbers(numbers.filter(num => num !== item))
    }

    const removeAllNumbers = ()=> {
        setCurrentPage(0)
        setNumbers([])
        setCombination([])
    }

    return (
        <>
            <div className='col-12 border content_box mt-2 rounded'>
                {
                    numbers.map(item => (
                        <button
                            className='btn btn-secondary btn_content_box'
                            key={item}
                            onClick={() => removeNumber(item)}
                        >
                            {item}
                        </button>
                    ))
                }

            </div>
            <button 
                className='btn btn-outline-secondary mt-1'
                onClick={removeAllNumbers}
            >
                Limpiar todo
            </button>

            <button
                className="btn btn-outline-primary mt-1 ms-1"
                onClick={() => createCombinations()}
            >
                Crear combinanciones
            </button>
        </>
    )
}
