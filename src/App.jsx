import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import PitchForm from './components/PitchForm'
import OutputCard from './components/OutputCard'

function App() {
  const [pitch, setPitch] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
  <Header />

  <Routes>
    <Route path="/" element={<Hero />} />

    <Route
      path="/generate"
      element={
        <main className="flex-grow bg-black p-4 max-w-4xl mx-auto">
          <PitchForm setPitch={setPitch} setLoading={setLoading} />
          {loading && <p className="mt-4 text-center">Generating pitch...</p>}
          {pitch && <OutputCard content={pitch} />}
        </main>
      }
    />
  </Routes>

  <Footer />
</div>

  )
}

export default App
