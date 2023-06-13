import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";
import PropTypes from 'prop-types';

Header.propTypes = {
    setGastos: PropTypes.any,
    gastos: PropTypes.any,
    presupuesto: PropTypes.any,
    setPresupuesto: PropTypes.any,
    isValidPresupuesto: PropTypes.any,
    setIsValidPresupuesto: PropTypes.any,
  };

export default function Header({setGastos, gastos, presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) {
  return (
    <header>
        <h1>
            Planificador de gastos
        </h1>
        {isValidPresupuesto ? (
            <ControlPresupuesto
            setGastos = {setGastos}
            gastos = {gastos}
            presupuesto = {presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
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
