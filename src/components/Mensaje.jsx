import PropTypes from 'prop-types';

Mensaje.propTypes = {
    children: PropTypes.any,
    tipo: PropTypes.any,
};
export default function Mensaje({children, tipo}) {
  return (
    <div className={`alerta ${tipo}`}>{children}</div>
  )
}
