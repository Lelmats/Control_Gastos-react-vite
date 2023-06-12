import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";
import PropTypes from 'prop-types';

Header.propTypes = {
    presupuesto: PropTypes.any,
    setPresupuesto: PropTypes.any,
    isValidPresupuesto: PropTypes.any,
    setIsValidPresupuesto: PropTypes.any,
  };

export default function Header({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) {
  return (
    <header>
        <h1>
            Planificador de gastos
        </h1>
        {isValidPresupuesto ? (
            <ControlPresupuesto
            presupuesto = {presupuesto}
            />
        ) : (
            <NuevoPresupuesto
            presupuesto = {presupuesto}
            setPresupuesto = {setPresupuesto}
            setIsValidPresupuesto = {setIsValidPresupuesto}
        />
        )}

    </header>
  )
}
