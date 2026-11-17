import { Link } from "react-router";

export default function Inicio() {
  return (
    <section>
      <h1>Bem-vindo à Academia DevIFTO</h1>
      <p>
        Escolha sua trilha de aprendizado abaixo e acesse a aba Cadastro para
        garantir sua vaga na próxima turma.
      </p>

      <div className="grade-cursos">
        <div className="card-curso">
          <h3>Web Full Stack</h3>
          <p>React, Node.js e criação de interfaces modernas do zero.</p>
        </div>

        <div className="card-curso">
          <h3>Banco de Dados</h3>
          <p>Modelagem relacional, consultas SQL e otimização.</p>
        </div>

        <div className="card-curso">
          <h3>Segurança Digital</h3>
          <p>Boas práticas de proteção de aplicações e redes.</p>
        </div>
      </div>

      <Link to="/cadastro">
        <button type="button">Ir para o formulário de inscrição</button>
      </Link>
    </section>
  );
}