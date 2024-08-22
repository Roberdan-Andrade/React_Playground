import { useEffect, useState } from "react"

function Tarefa() {

  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState('');

  useEffect(() => {
    if(completed){
      setTarefa('Tarefa concluida')
    } else {
      setTarefa('')
    }
  }, [completed])

  return (
    <div>
      <h2>Componente Tarefa</h2>
      <h3>{tarefa}</h3>
      <p>conclua a tarefa</p>
      <button onClick={() => setCompleted(!completed)}>Concluir tarefa</button>
    </div>
  )
}

export default Tarefa
