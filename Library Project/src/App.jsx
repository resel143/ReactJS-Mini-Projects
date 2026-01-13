import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home />
       <Toaster
          position="top-right" 
          toastOptions={{
            duration: 3000,
            style: {
              borderRadius: '8px',
              background: '#1e293b',
              color: '#fff',
            },
          }}
        />
    </>
  )
}

export default App
