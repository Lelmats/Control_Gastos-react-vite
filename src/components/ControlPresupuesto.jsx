import PropTypes from 'prop-types'

function ControlPresupuesto({presupuesto}) {
    //Convierte cantidad a dólares
    const convertCurrency = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Gráfica Aquí</p>
        </div>
        <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto: </span>{convertCurrency(presupuesto)}
            </p>
            <p>
                <span>Disponible: </span>{convertCurrency(0)}
            </p>
            <p>
                <span>Gastado: </span>{convertCurrency(0)}
            </p>
        </div>
    </div>
  )
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.any,
}

export default ControlPresupuesto
