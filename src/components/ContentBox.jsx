import { useContext } from 'react'
import { NumberContext } from '../context/NumberContext'

export const ContentBox = () => {

    const {numbers} = useContext(NumberContext)

    return (
        <div className='col-12 border content_box mt-2 rounded d-flex p-2'>
            {
                numbers.map(item => (
                    <h6 key={item}> {item}, </h6>
                ))
            }
        </div>
    )
}
