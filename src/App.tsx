import './App.css'
import Contador from './pages/contador/Contador'
import Home from './pages/home/Home'
import Tarefa from './pages/tarefa/Tarefa'

function App() {

  //const [nome_estado, função_setState] = useState(valor_inicial_do_estado)

  return (
    <>
        {/* <Home 
          titulo='Minha primeira postagem'
          texto='Texto da postagem'
        />

        <br />

        <Contador />

        <br /> */}

        <Tarefa />
    </>
  )
}

export default App
