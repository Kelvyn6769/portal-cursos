import { NavLink, Routes, Route } from "react-router";
import Inicio from "./pages/Inicio.jsx";
import Cadastro from "./pages/Cadastro.jsx";

export default function App() {
  return (
    <div className="container">
      <header>
        {/* PERSONALIZAR: Troque pelo nome da plataforma do seu grupo */}
        <strong>TechCursos IFTO</strong>
        <nav aria-label="Menu principal">
          <NavLink to="/" end>
            Início
          </NavLink>
          <NavLink to="/cadastro">Cadastro</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="*" element={<p>Página não encontrada.</p>} />
        </Routes>
      </main>
    </div>
  );
}