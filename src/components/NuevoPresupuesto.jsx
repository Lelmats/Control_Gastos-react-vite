import { useState } from 'react'
import PropTypes from 'prop-types';
import Mensaje from './Mensaje';

NuevoPresupuesto.propTypes = {
    presupuesto: PropTypes.any,
    setPresupuesto: PropTypes.any,
    setIsValidPresupuesto: PropTypes.any,
};

export default function NuevoPresupuesto({presupuesto, setPresupuesto, setIsValidPresupuesto}) {
    const [mensaje, setMensaje] = useState("")

    const handlePresupuestos = (e) => {
        e.preventDefault()

        if(!presupuesto || presupuesto < 0)
        {
            setMensaje("El presupuesto no es válido")
            setIsValidPresupuesto(false)
            return
        } 
    
        setMensaje("")
        setIsValidPresupuesto(true)
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form onSubmit={handlePresupuestos} className="formulario">
            <div className="campo">
                <label >Definir Presupuesto</label>
                <input
                className="nuevo-presupuesto"
                type="number"
                placeholder="Añade presupuesto"
                value={presupuesto}
                onChange={(e) => setPresupuesto(Number(e.target.value))}
                />
            </div>
            
            <input type="submit" value="Añadir" />
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
    </div>
  )
}
