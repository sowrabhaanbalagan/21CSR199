import { useState } from 'react'
import './App.css'
import Products from './components/Products'
import TopProducts from './components/Topproduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className="App">
      <header className="App-header">
        <h1>Laptops</h1>
        <Products />
       
      </header>
    </div>
   
    </>
  )
}

export default App
