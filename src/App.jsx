import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Landing from './pages/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-[1920px] mx-auto">
      <Header />
      <main class="border-l border-r border-black max-w-[1200px] mx-auto">
        <Landing />
      </main>
    </div>
  )
}

export default App
