import React from 'react'
import { Form } from 'react-bootstrap';
import '../CSS/Cuerpo.css'
import logo from '../imagenes/1.jpeg'

export const Inicio = () => {
    return (
            <div className='cuerpo'>
                <Form>
                <img style={{maxHeight:`200px`, margin:`30px`}} src={logo} />
                <h2>Bienvenido a nuestra website</h2>
                <br/>
                <p>Aqui podras encontrar informacion de contacto y todo lo referente a nuestros productos. Se bienvenido. Saludos </p>
                </Form>
            </div>
    );
}
export default Inicio;