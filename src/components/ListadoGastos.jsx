import PropTypes from 'prop-types'
import Gasto from './Gasto'

function ListadoGastos({gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados}) {
  return (
        <div className='listado-gastos contenedor'>
            { filtro ? (    
                    <>
                        <h2>{gastosFiltrados.length ? "Hay gastos" : "No hay gastos en esta categoría"}</h2>
                        {gastosFiltrados.map( gasto => (
                            <Gasto 
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}
                    </>            
                ) : (
                    <>
                        <h2>{gastos.length ? "Hay gastos" : "No hay gastos aún"}</h2>
                        {gastos.map( gasto => (
                            <Gasto 
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}
                    </>
                )
            }
        </div>
    )
}

ListadoGastos.propTypes = {
    gastos: PropTypes.any,
    setGastoEditar: PropTypes.any,
    eliminarGasto: PropTypes.any,
    filtro: PropTypes.any,
    gastosFiltrados: PropTypes.any,
}

export default ListadoGastos
