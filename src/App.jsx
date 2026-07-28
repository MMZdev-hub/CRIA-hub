import { Routes, Route } from 'react-router-dom'
import Contato from './components/Contato';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projetos from './components/Projetos';
import Servicos from './components/Servicos';
import Sobre from './components/Sobre';
import ProjetoPage from './components/ProjetoPage'

export default function App() {
  return (
    <div className="bg-void min-h-screen overflow-y-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <Sobre />
            <Projetos />
            <Servicos />
            <Contato />
          </main>
        } />
        <Route path="/projetos/:slug" element={<ProjetoPage />} />
      </Routes>
      <Footer />
    </div>
  )
}