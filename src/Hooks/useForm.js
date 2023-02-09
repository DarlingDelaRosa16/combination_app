import { useContext, useState } from 'react';
import { NumberContext } from '../context/NumberContext';

export const useForm = ( initialForm = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const {numbers, setNumbers, setAlertText} = useContext(NumberContext)

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const onSubmit = (e)=> {
        e.preventDefault()
        
        if(formState.number.length < 1 ){
            setAlertText('Debes Ingresar números')
            return
        }

        const parsedNumber = parseInt(formState.number)

        if(parsedNumber >= 100 || parsedNumber < 0 || isNaN(parsedNumber)){
            setAlertText('Debe ser un número valido')
            return
        }

        if (numbers.includes(parsedNumber)) {
            setAlertText('El número ya fue agregado')
            return
        }

        setAlertText('')
        setNumbers([...numbers, parsedNumber])
        onResetForm()
    } 

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        onSubmit,
    }
}