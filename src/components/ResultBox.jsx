import { useContext } from "react"
import { NumberContext } from "../context/NumberContext"
import { usePagination } from "../Hooks/usePagination"

export const ResultBox = () => {

    const { items, nextHandlePage, prevHandlePage } = usePagination()
    const { currentPage } = useContext(NumberContext)


    return (
        <>
            <div className='col-12 border result_box rounded mt-2'>
                <ul className="listOfItems">
                    {
                        items.map((item, index) => (
                            <li key={index} >{item}</li>
                        ))
                    }
                </ul>
            </div>

            <nav aria-label="Page navigation ">
                <ul className="pagination mt-2 mb-1">

                    <li className="page-item">
                        <button
                            className="page-link"
                            onClick={prevHandlePage}
                        >
                            Anterior
                        </button>
                    </li>

                    <li className="page-link">{currentPage}</li>

                    <li className="page-item">
                        <button
                            className="page-link"
                            onClick={nextHandlePage}
                        >
                            Siguiente
                        </button>
                    </li>

                </ul>
            </nav>

            
        </>
    )
}
