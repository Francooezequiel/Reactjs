import { useState } from "react";
import "./CheckoutForm.css"
const CheckoutForm = ({onConfirm}) => {
    const [name , setName] = useState('')
    const [email, setEmail ]= useState('')
    const [phone ,setPhone] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name,phone,email
        }
        onConfirm(userData)
    }

    return (
        <div className="formulario">
            <form onSubmit={handleConfirm}>
                <label >
                    <input className="text"
                    type='text'
                    value={name}
                    onChange={({target }) => setName(target.value)}
                    />
                </label>
                <label>
                    <input className="text"
                    type='text'
                    value={phone}
                    onChange={({target }) => setPhone(target.value)}
                    />
                </label >
                <label >
                    <input className="text"
                    type='email'
                    value={email}
                    onChange={({target}) => setEmail(target.value)}/>
                </label>
                <div className="Buttoncrearorden" >
                    <button className="crearorden" type='submit'>Crear Orden</button>
                </div>
            </form>
        </div>
    )
}



export default CheckoutForm;