import PropTypes from 'prop-types'
import Gasto from './Gasto'

function ListadoGastos({gastos}) {
  return (
        <div className='listado-gastos contenedor'>
            <h2>{gastos.length ? "Hay gastos" : "No hay gastos aún"}</h2>

                {gastos.map(gasto => (
                    <Gasto 
                    gasto={gasto}
                    key={gasto.id}/>
                ))}
        </div>
    )
}

ListadoGastos.propTypes = {
    gastos: PropTypes.any
}

export default ListadoGastos
