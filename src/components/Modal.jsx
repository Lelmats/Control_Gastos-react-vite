import { useState } from 'react'
import PropTypes from 'prop-types'
import CerrarBtn from '../../public/cerrar.svg'
import Mensaje from './Mensaje'
import { generarId } from '../helpers'

function Modal({setModal, animarModal, setAnimarModal, guardarGasto}) {
    const [mensaje, setMensaje] = useState("")
    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState(0)
    const [categoria, setCategoria] = useState("")

    const handleCerrarModal = () => {
        setAnimarModal(false)

        setTimeout(() =>{
            setModal(false) 
        }, 500)
    }
    const handleSubmit = e => {
        e.preventDefault();

        if([nombre, cantidad, categoria].includes('')){
            setMensaje("Todos los campos son obligatorios")

            setTimeout(() =>{
                setMensaje("")
            }, 2000)
            return;
        }
        handleCerrarModal();
        guardarGasto({nombre, cantidad, categoria});
    }

  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img 
            src={CerrarBtn} 
            alt="CerrarModal"
            onClick={() => handleCerrarModal()}
            />
        </div>

        <form 
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
        >
            <legend>Nuevo Gasto</legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            <div className='campo'>
                <label htmlFor="nombre">Nombre Gasto</label>

                <input 
                id='nombre'
                type="text" 
                placeholder='Añade el nombre del gasto'
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className='campo'>
                <label htmlFor="cantidad">Cantidad</label>

                <input 
                id='cantidad'
                type="number" 
                placeholder='Añade la cantidad de gastos'
                value={cantidad}
                onChange={e => setCantidad(e.target.value)}
                />
            </div>
            <div className='campo'>
                <label htmlFor="categoria">Categoría</label>
                
                <select 
                id="categoria"
                value={categoria}
                onChange={e => setCategoria(e.target.value)}
                >
                    <option value="">
                        Seleccione
                    </option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>
            <input 
            type="submit" 
            value="Añadir Gasto"
            
            />
        </form>
    </div>
  )
}

Modal.propTypes = {
    setModal: PropTypes.any,
    animarModal: PropTypes.any,
    setAnimarModal: PropTypes.any,
    guardarGasto: PropTypes.any,
}

export default Modal