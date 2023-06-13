import { useState, useEffect } from 'react'
import IconoNuevoGasto from '../public/nuevo-gasto.svg'
import Header from './components/Header'
import Modal from './components/Modal'
import { generarId } from './helpers'
import ListadoGastos from './components/ListadoGastos'
import Filtros from './components/Filtros'

function App() {
  const [gastos, setGastos] = useState(JSON.parse(localStorage.getItem('gastos')) ?? [])

  const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('presupuesto')) ?? 0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastoEditar, setGastoEditar] = useState({})
  
  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])

  // LocalStorage presupuesto get
  useEffect(() =>{ 
    const presupuestoLS = localStorage.getItem('presupuesto') ?? 0

    if(presupuestoLS > 0)
    {
      setIsValidPresupuesto(true)
    }
  }, [])

  // LocalStorage presupuesto
  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  },[presupuesto])

  // LocalStorage gastos
  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos))
  },[gastos])

  //Modal Editar Gato
  useEffect(() => {
    if (filtro) {
      //Filtrar gastos por categoria
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
      setGastosFiltrados(gastosFiltrados)
    } 

  }, [filtro])

  //Filtro
  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true)

      setTimeout(() =>{
        setAnimarModal(true)
      }, 150)
    } 
  }, [gastoEditar])

  //Modal Nuevo Gasto
  const handleNuevoGasto = () =>
  {
    setModal(true)
    setGastoEditar({})

    setTimeout(() =>{
      setAnimarModal(true)
    }, 150)
  }

  //Guardamos el gasto

  const guardarGasto = gasto => {
    if (gasto.id){
      //Actualizar
      const gastosAcualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosAcualizados)

    } else {
      //Editar
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto])
    }
  }
  const eliminarGasto = id => {
    const gastosAcualizados = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosAcualizados)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos = {gastos}
        setGastos={setGastos}
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        isValidPresupuesto = {isValidPresupuesto}
        setIsValidPresupuesto = {setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <>
          <main>
          <Filtros
          filtro={filtro}
          setFiltro={setFiltro}
          />
          <ListadoGastos
          eliminarGasto={eliminarGasto}
          setGastoEditar={setGastoEditar}
          gastos={gastos}
          filtro={filtro}
          gastosFiltrados={gastosFiltrados}
          />
          </main>
          <div className='nuevo-gasto'>
            <img 
            src={IconoNuevoGasto} 
            alt="NuevoGasto" 
            onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && 
      <Modal
      setGastoEditar={setGastoEditar}
      gastoEditar={gastoEditar}
      setModal={setModal}
      animarModal={animarModal}
      setAnimarModal={setAnimarModal}
      guardarGasto={guardarGasto}
      />}
    </div>
  )
}

export default App
