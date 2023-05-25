import { Navbar } from '@/app/components'
import { Routes } from '@/app/models'

function App() {
  return (
    <div>
      <h1> Welcome to Rick and Morty app </h1>
      <h2> Whats do you want to see?</h2>
      <Navbar
        pathNames={[Routes.PORTFOLIO, Routes.CHARACTERS, Routes.LOCATIONS]}
      />
    </div>
  )
}

export default App
