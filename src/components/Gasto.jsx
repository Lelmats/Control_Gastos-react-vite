import PropTypes from 'prop-types'
import {
    SwipeAction,
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    TrailingActions
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
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

const Gasto = ({gasto, setGastoEditar, eliminarGasto}) => {
    
    const {nombre, cantidad, categoria, id, fecha} = gasto;

    const leadingActions = () => (
        <LeadingActions>
          <SwipeAction onClick={() => setGastoEditar(gasto)}>
            Editar
          </SwipeAction>
        </LeadingActions>
      );
      
      const trailingActions = () => (
        <TrailingActions>
          <SwipeAction
            destructive={true}
            onClick={() => eliminarGasto(id)}
          >
            Eliminar
          </SwipeAction>
        </TrailingActions>
      );
    

  return (
    <SwipeableList>
        <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
        >
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
        </SwipeableListItem>
    </SwipeableList>

  )
}

Gasto.propTypes = {
    gasto: PropTypes.any,
    nombre: PropTypes.any,
    cantidad: PropTypes.any,
    categoria: PropTypes.any,
    fecha: PropTypes.any,
    id: PropTypes.any,
    setGastoEditar: PropTypes.any,
    eliminarGasto: PropTypes.any,
    
}

export default Gasto