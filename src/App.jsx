import Contato from "./components/Contato";
import Footer from "./components/Footer";
import Galeria from "./components/Galeria";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projetos from "./components/Projetos";
import Servicos from "./components/Servicos";
import Sobre from "./components/Sobre";

export default function App() {
  return (
    <div className="bg-void min-h-screen overflow-y-auto">
      <Navbar />
      <Hero />
      <Sobre />
      <Projetos />
      <Servicos />
      <Galeria />
      <Contato />
      <Footer />
    </div>
  )
}