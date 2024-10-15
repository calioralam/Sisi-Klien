import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Selamat Datang</h1>
        <button><a href="rangkuman.jsx">Data Rangkuman</a></button>
        <button><a href="pengiriman.html">Pengriman Surat</a></button>
        <button><a href="pemasukan.html">Data pemasukan</a></button>
      </div>
    </> 
  )
}

export default App
