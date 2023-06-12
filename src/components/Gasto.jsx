import PropTypes from 'prop-types'
import { formatearFecha } from '../helpers';

import IconoAhorro from '../../public/icono_ahorro.svg'
import IconoCasa from '../../public/icono_casa.svg'
import IconoComida from '../../public/icono_comida.svg'
import IconoGastos from '../../public/icono_gastos.svg'
import IconoOcio from '../../public/icono_ocio.svg'
import IconoSalud from '../../public/icono_salud.svg'
import IconoSuscripciones from '../../public/icono_suscripciones.svg'

const diccionarioIconos = {
    ahorro : IconoAhorro,
    comida : IconoComida,
    casa : IconoCasa,
    gastos : IconoGastos,
    ocio : IconoOcio,
    salud : IconoSalud,
    suscripciones : IconoSuscripciones
}

const Gasto = ({gasto}) => {
    
    const {nombre, cantidad, categoria, id, fecha} = gasto;

  return (
    <div className="gasto sombra">
        <div className="contenido-gasto">
            <img 
            src={diccionarioIconos[categoria]}
            alt="IconoGasto" 
            />
            <div className="descripcion-gasto">
                <p className="categoria">{categoria}</p>
                <p className="nombre-gasto">{nombre}</p>
                <p className="fecha-gasto">Agregado el: {' '}
                <span>{formatearFecha(fecha)}</span>
                </p>
            </div>
        </div>
            <p className='cantidad-gasto'>${cantidad}</p>
    </div>
  )
}

Gasto.propTypes = {
    gasto: PropTypes.any,
    nombre: PropTypes.any,
    cantidad: PropTypes.any,
    categoria: PropTypes.any,
    fecha: PropTypes.any,
    id: PropTypes.any,
    
}

export default Gasto