import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import CerrarBtn from '../../public/cerrar.svg'
import Mensaje from './Mensaje'

function Modal({setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar}) {
    const [mensaje, setMensaje] = useState("")
    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState(0)
    const [categoria, setCategoria] = useState("")
    const [fecha, setFecha] = useState("")
    const [id, setId] = useState("")

    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setFecha(gastoEditar.fecha)
            setId(gastoEditar.id)
        }
    },[])

    const handleCerrarModal = () => {
        setAnimarModal(false)
        setGastoEditar({})
        
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
        guardarGasto({nombre, cantidad, categoria, id, fecha});
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
            <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
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
                onChange={e => setCantidad(Number(e.target.value))}
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
            value={gastoEditar.nombre ? 'Actualizar Gasto' : 'Añadir Gasto'}
            
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
    gastoEditar: PropTypes.any,
    setGastoEditar: PropTypes.any,
}

export default Modal
