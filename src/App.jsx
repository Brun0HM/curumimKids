import React from "react";
import "./App.css";
import Valores from "./components/Valores";

const App = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h3 className="text-center bg-primary text-white p-3 fs-6 rounded-3 d-flex gap-2">
            <i className="bi bi-leaf"></i>
            Sustentabilidade & Diversão
          </h3>
          <div className="display-3 text-center">
            <span className="fw-bold">
              Produtos infantis <br /> sustentáveis que unem <br />{" "}
              <span className="text-body-tertiary">educação,</span>
              <span className="text-primary">diversão </span> e <br />{" "}
              <span className="text-primary">cuidado com o planeta</span>
            </span>
            <p className="fs-5 mt-4 text-center fw-medium">
              Na Curumim Kids, acreditamos que brincar e aprender podem andar
              juntos, sempre respeitando nosso planeta.
            </p>
          </div>
          <div className="d-flex gap-3 mt-4">
            <button className="btn btn-primary btn-lg rounded-3">
              Conheça Mais
            </button>
            <button className="btn btn-outline-primary btn-lg rounded-3">
              Ver Produtos
            </button>
          </div>
          <div className="text-center mt-5">
            <h1 className="fw-bold">Sobre Nós</h1>
            <span className="fs-5">
              A Curumim Kids nasceu do sonho de criar produtos que não apenas
              divirtam as crianças, mas também as eduquem sobre a importância de
              cuidar do nosso planeta. Cada produto é cuidadosamente
              desenvolvido com materiais sustentáveis, promovendo valores de
              responsabilidade ambiental desde a infância.
            </span>
          </div>
          <div className="row g-4 mt-5 w-100 valores-container">
            <div className="col-12 col-md-6 col-lg-4">
              <Valores
                icon="bi-bullseye"
                title="Missão"
                descricao="Desenvolver produtos infantis sustentáveis que promovam educação ambiental, diversão e aprendizado, contribuindo para a formação de cidadãos conscientes."
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <Valores
                icon="bi-leaf"
                title="Visão"
                descricao="Ser referência nacional em produtos infantis sustentáveis, inspirando uma geração mais consciente e responsável com o meio ambiente."
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <Valores
                icon="bi-heart"
                title="Valores"
                descricao="Sustentabilidade, educação, diversão, qualidade, responsabilidade social e amor pelo planeta que deixaremos para as próximas gerações."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
