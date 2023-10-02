import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'

function App () {
  const [msg, setMsg] = useState('')
  const handleClick = async () => {
    const data = await window.fetch('/api/users')
    const json = await data.json()
    const msg = json.msg
    setMsg(msg)
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <button onClick={handleClick}>
          Call api
        </button>
        <p>{msg}</p>
      </header>
    </div>
  )
}

export default App
