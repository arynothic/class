import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const firstElt = <h2>This is my new element </h2>

function laptop() {
    return(
        <div><h3>This is laptop function</h3></div>
    )
}

function Box(){
  return(
    <div>
      <h2>This is box component</h2>
      <laptop />
      <laptop />
    </div>
  )
}

class Student extends React.Component{
  render(){
    return(
      <div>
        <h1>
          This is student class
        </h1>
      </div>
    )
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Box />
    <Student />
  </StrictMode>,
)
