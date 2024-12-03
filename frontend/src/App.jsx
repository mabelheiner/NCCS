import { useEffect } from 'react'
import '@styles/App.scss'


import AppRoutes from './AppRoutes'

function App() {

  useEffect(() => {
    document.title = "Newton County Community Services"
  }, [])

  return (
    <>
      <AppRoutes />
    </>    
  )
}

export default App
