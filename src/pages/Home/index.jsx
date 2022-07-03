import './style.css';

import {Card} from '../../components/Card'; // Importanto componente criado
import { useState, useEffect } from 'react'; // lib que perimete a criação de estados

export function Home() {

  const [studentName, setStudentName] = useState(); // studentName = estado atual. setStudentName = função que altera o estado. Dentro do useState(Valor incial)
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({name: '', avatar: ''});

  function handleAddStudent(){
    const newStudant = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br",{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    setStudents(prevState => [...prevState, newStudant]); // Isso faz com que se crie um vetor sem perder o que foi adicionado antes. O prevState podia ser outro nome
  }

  useEffect(() => {
    fetch('https://api.github.com/users/Geracneto').then(response => response.json()).then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    })
    

  }, [])

  return (
    <div className='container'>
    <header>
      <h1>Lista de Presença</h1>
      <div>
        <strong>{user.name}</strong>
        <img src={user.avatar}/>
      </div>
    </header>
    
      <input 
      type="text" 
      placeholder="Digite o nome..." 
      onChange={e => setStudentName(e.target.value)}
      />


      <button id="button-home" type="button" onClick={handleAddStudent}> 
      Adicionar
      </button>

      {
        students.map(item => 
        <div className='card-button'>
        <Card key={item.time} name={item.name} time={item.time}/>
        <button>X</button>
        </div>
        ) // Para cada estudante, renderiza um Card. A propriedade key serve apenas para identificar e não dar erro no console log
      }
    </div>
  )
}


