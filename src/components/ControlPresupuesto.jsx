import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import PropTypes from 'prop-types'

function ControlPresupuesto({setGastos, gastos, setPresupuesto, presupuesto, setIsValidPresupuesto}) {

    const [porcentaje, setPorcentaje] = useState(0)
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    //Total Gastado y Disponible
    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0 )
        const totalDisponible = presupuesto - totalGastado

        //Calcular porcentaje gastado
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)
        
        setTimeout(() =>{
            setPorcentaje(nuevoPorcentaje)
          }, 1000)
        setDisponible(totalDisponible)
        setGastado(totalGastado)
    }, [gastos])

    //Convierte cantidad a dólares
    const convertCurrency = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    const handleResetApp = () => {
        const resultado = confirm("Deseas Reiniciar tu presupuesto?")
        if(resultado){
            setGastos([])
            setPresupuesto(0)
            setIsValidPresupuesto(false)
        }

    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar 
            styles={buildStyles({
                pathColor: porcentaje > 100 ? 'red' : 'blue',
            })}
            value={porcentaje} 
            maxValue={100} 
            text={`${porcentaje}% Gastado`} 
            />
        </div>
        <div className='contenido-presupuesto'>
            <button 
            className='reset-app'
            type='button'
            onClick={() => handleResetApp()}
            >
                Resetear App
            </button>
            <p>
                <span>Presupuesto: </span>{convertCurrency(presupuesto)}
            </p>
            <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                <span>Disponible: </span>{convertCurrency(disponible)}
            </p>
            <p>
                <span>Gastado: </span>{convertCurrency(gastado)}
            </p>
        </div>
    </div>
  )
}

ControlPresupuesto.propTypes = {
    setGastos: PropTypes.any,
    gastos: PropTypes.any,
    setPresupuesto: PropTypes.any,
    presupuesto: PropTypes.any,
    setIsValidPresupuesto: PropTypes.any,
}

export default ControlPresupuesto
