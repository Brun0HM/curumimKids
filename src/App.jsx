import React from "react";
import "./App.css";
import Valores from "./components/Valores";
import CardProdutos from "./components/CardProdutos";

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
          <div className="text-center mt-5">
            <h1 className="fw-bold">Nossos Produtos</h1>
            <span className="fs-5">
              Cada produto é desenvolvido com carinho e responsabilidade
              ambiental, garantindo diversão e aprendizado para as crianças.
            </span>
          </div>
          <div className="row g-4 mt-5 w-100 valores-container">
            <div className="col-12 col-md-6 col-lg-4">
              <CardProdutos
                produto="https://placehold.co/180x192"
                title="Livro Interativo Sustentável"
                preco="R$ 62,00"
                descricao="Um livro feito com papel reciclado, cheio de atividades educativas sobre sustentabilidade."
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <CardProdutos
                produto="https://placehold.co/180x192"
                title="Twister Sustentável"
                preco="R$ 30,00"
                descricao="Versão sustentável do clássico jogo Twister, feito com materiais recicláveis."
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <CardProdutos
                produto="https://placehold.co/180x192"
                title="Boliche Sustentável"
                preco="R$ 25,00"
                descricao="Jogo de boliche ecológico que desenvolve coordenação motora e diversão em família."
              />
            </div>
            <span className="fs-6 text-secondary text-center">
              * Os preços podem sofrer alteração.
            </span>
          </div>
          <div className="text-center mt-5">
            <h1 className="fw-bold">Contato</h1>
            <span className="fs-5">
              Interessado em encomendas personalizadas? Entre em contato conosco
              através das nossas redes sociais! Estamos sempre prontos para
              criar produtos únicos que atendam às suas necessidades.
            </span>
          </div>
          <div className="d-flex gap-3 justify-content-center flex-wrap mt-4">
            <div className="d-flex gap-3 mt-4 mb-5 ">
              <div className="bg-body-tertiary p-3 border border-2 border-primary rounded-3 d-flex justify-content-center align-items-center gap-2">
                <i className="bi bi-facebook text-primary fs-4"></i> @Curumim
                Kids
              </div>
            </div>
            <div className="d-flex gap-3 mt-4 mb-5 ">
              <div className="bg-body-tertiary p-3 border border-2 border-primary rounded-3 d-flex justify-content-center align-items-center gap-2">
                <i className="bi bi-tiktok text-primary fs-4"></i> @Curumim_Kids
              </div>
            </div>
            <div className="d-flex gap-3 mt-4 mb-5 ">
              <div className="bg-body-tertiary p-3 border border-2 border-primary rounded-3 d-flex justify-content-center align-items-center gap-2">
                <i className="bi bi-instagram text-primary fs-4"></i>{" "}
                @Curumim_Kids
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
