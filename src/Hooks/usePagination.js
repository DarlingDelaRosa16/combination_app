import { useContext, useEffect, useState } from "react"
import { NumberContext } from "../context/NumberContext"
import { useCombination } from "./useCombination";

export const usePagination = () => {

  const itemsPerPage = 9;
  const { combination, setAlertText, numbers, sets, setCurrentPage, currentPage } = useContext(NumberContext)
  const { combinations } = useCombination(0)

  const [items, setItems] = useState([])

  useEffect(() => {
    setItems([...combination].splice(currentPage, itemsPerPage))
  }, [combination])

  const createCombinations = () => {
    if (numbers.length < 1 || numbers.length < sets) {
      setAlertText(`Agrega mas números para crear combinaciones de ${sets}`)
      return
    }
    setCurrentPage(0)
    setAlertText('')
    combinations(numbers, sets, []);
    setItems([...combination].splice(0, itemsPerPage))
  }

  const nextHandlePage = () => {
    setAlertText('')
    if (numbers.length < 1) return
    let nextPage = currentPage + 1
    const numbIndex = nextPage * itemsPerPage

    if (numbIndex >= combination.length) return

    setItems([...combination].splice(numbIndex, itemsPerPage))
    setCurrentPage(nextPage)
  }

  const prevHandlePage = () => {
    setAlertText('')
    if (numbers.length < 1) return
    let prevPage = currentPage - 1
    const numbIndex = prevPage * itemsPerPage

    if (numbIndex < 0) return

    setItems([...combination].splice(numbIndex, itemsPerPage))
    setCurrentPage(prevPage)
  }
  console.log(currentPage)

  return {
    createCombinations,
    items,
    itemsPerPage,
    nextHandlePage,
    prevHandlePage,
  }
}
