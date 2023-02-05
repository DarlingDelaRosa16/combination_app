import { useForm } from "../Hooks/useForm"
import "./NumbersForm.css"

export const NumbersForm = () => {

    const { number, onInputChange, onSubmit } = useForm({ number: '' })

    return (
        <form onSubmit={onSubmit} className="d-flex"  autoComplete="off">

                <input
                    name="number"
                    value={number}
                    className='form-control'
                    type="text"
                    onChange={onInputChange}
                    placeholder="Numeros"
                />

                <button
                    className='btn btn-outline-primary btnSubmit'
                    type="submit"
                >
                    enviar
                </button>
        </form>
    )
}
