// Responsável por inicializar a apicação

import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/global.css' // Arquivos .js ou .jsx não é necessário colcoar a extensão no import. Porém, .css precisa

import {Home} from './pages/Home' // Colocar entre {} para no arquivo que está sendo chaamndo, não precisar usar "export default home", e ja escrever direto "export function Home"

ReactDOM.createRoot(document.getElementById('root')).render( // Acessa o id root e insere tudo o que está dentro do componente App
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
