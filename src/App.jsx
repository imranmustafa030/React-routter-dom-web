import { useState } from 'react'
import { Footer, Header, Home } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Home />
    <Footer />
    </>
  )
}

export default App
