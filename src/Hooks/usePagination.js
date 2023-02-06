import { useContext, useEffect, useState } from "react"
import { NumberContext } from "../context/NumberContext"
import { useCombination } from "./useCombination";

const inicialState = 0
export const usePagination = () => {


  const itemsPerPage = 20;

  const { combination } = useContext(NumberContext)
  const { combinations } = useCombination(inicialState)
  const { numbers, sets } = useContext(NumberContext)

  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(0)

  const firstCombinations = () => {
    if (numbers.length < 1) return
    combinations(numbers, sets, []);
    setItems([...combination].splice(0, itemsPerPage))
  }
  useEffect(() => {
    setItems([...combination].splice(currentPage, itemsPerPage))
  }, [combination])

  const nextHandlePage = () => {
    if (numbers.length < 1) return
    let nextPage = currentPage + 1
    const numbIndex = nextPage * itemsPerPage

    if (numbIndex >= combination.length) return

    setItems([...combination].splice(numbIndex, itemsPerPage))
    setCurrentPage(nextPage)
  }

  const prevHandlePage = () => {
    if (numbers.length < 1) return
    let prevPage = currentPage - 1
    const numbIndex = prevPage * itemsPerPage

    if (numbIndex < 0) return

    setItems([...combination].splice(numbIndex, itemsPerPage))
    setCurrentPage(prevPage)
  }

  return {
    firstCombinations,
    currentPage,
    items,
    nextHandlePage,
    prevHandlePage,
  }
}
