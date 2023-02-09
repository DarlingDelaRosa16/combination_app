import { useForm } from "../Hooks/useForm"

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
                    placeholder="Ingresa numeros"
                />

                <button
                    className='btn btn-outline-primary btnSubmit'
                    type="submit"
                >
                    Agregar
                </button>
        </form>
    )
}
