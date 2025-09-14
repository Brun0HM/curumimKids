import React from "react";
import "./App.css";
import Valores from "./components/Valores";
import CardProdutos from "./components/CardProdutos";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        {/* Seção Home */}
        <section id="home" className="section-spacing">
          <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h3 className="text-center bg-secondary text-white p-3 fs-6 rounded-3 d-flex gap-2">
                <i className="bi bi-leaf"></i>
                Sustentabilidade & Diversão
              </h3>
              <div className="display-3 text-center">
                <span className="fw-bold">
                  Produtos infantis <br /> sustentáveis que unem <br />{" "}
                  <span className="text-primary">educação,</span>
                  <span className="text-secondary">diversão </span> e <br />{" "}
                  <span className="text-secondary">cuidado com o planeta</span>
                </span>
                <p className="fs-5 mt-4 text-center fw-medium">
                  Na Curumim Kids, acreditamos que brincar e aprender podem
                  andar juntos, sempre respeitando nosso planeta.
                </p>
              </div>
              <div className="d-flex gap-3 mt-4">
                <button
                  className="btn btn-primary text-white btn-lg rounded-3"
                  onClick={() =>
                    document
                      .getElementById("sobre-nos")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Conheça Mais
                </button>
                <button
                  className="btn btn-outline-primary btn-lg rounded-3"
                  onClick={() =>
                    document
                      .getElementById("produtos")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Ver Produtos
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Sobre Nós */}
        <section id="sobre-nos" className="section-spacing">
          <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="text-center mb-5">
                <h1 className="fw-bold">Sobre Nós</h1>
                <span className="fs-5">
                  A Curumim Kids nasceu do sonho de criar produtos que não
                  apenas divirtam as crianças, mas também as eduquem sobre a
                  importância de cuidar do nosso planeta. Cada produto é
                  cuidadosamente desenvolvido com materiais sustentáveis,
                  promovendo valores de responsabilidade ambiental desde a
                  infância.
                </span>
              </div>
              <div className="row g-4 w-100 valores-container">
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
        </section>

        {/* Seção Produtos */}
        <section id="produtos" className="section-spacing">
          <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="text-center mb-5">
                <h1 className="fw-bold">Nossos Produtos</h1>
                <span className="fs-5">
                  Cada produto é desenvolvido com carinho e responsabilidade
                  ambiental, garantindo diversão e aprendizado para as crianças.
                </span>
              </div>
              <div className="row g-4 w-100 valores-container">
                <div className="col-12 col-md-6 col-lg-4">
                  <CardProdutos
                    produto="/src/assets/Livro.jpg"
                    title="Livro Interativo Sustentável"
                    preco="R$ 62,00"
                    descricao="Um livro feito com papel reciclado, cheio de atividades educativas sobre sustentabilidade."
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <CardProdutos
                    produto="/src/assets/Twister.jpg"
                    title="Twister Sustentável"
                    preco="R$ 30,00"
                    descricao="Versão sustentável do clássico jogo Twister, feito com materiais recicláveis."
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <CardProdutos
                    produto="/src/assets/boliche.jpg"
                    title="Boliche Sustentável"
                    preco="R$ 25,00"
                    descricao="Jogo de boliche ecológico que desenvolve coordenação motora e diversão em família."
                  />
                </div>
              </div>
              <span className="fs-6  text-center mt-4">
                * Os preços podem sofrer alteração.
              </span>
            </div>
          </div>
        </section>

        {/* Seção Contato */}
        <section id="contato" className="section-spacing">
          <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="text-center mb-5">
                <h1 className="fw-bold">Contato</h1>
                <span className="fs-5">
                  Interessado em encomendas personalizadas? Entre em contato
                  conosco através das nossas redes sociais! Estamos sempre
                  prontos para criar produtos únicos que atendam às suas
                  necessidades.
                </span>
              </div>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <div className="bg-body-tertiary p-3 border border-2 border-primary rounded-3 d-flex justify-content-center align-items-center gap-2">
                    <i className="bi bi-facebook text-primary fs-4"></i>{" "}
                    @Curumim Kids
                  </div>
                </a>
                <a
                  href="https://tiktok.com/@curumim_kids"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <div className="bg-body-tertiary p-3 border border-2 border-primary rounded-3 d-flex justify-content-center align-items-center gap-2">
                    <i className="bi bi-tiktok text-primary fs-4"></i>{" "}
                    @Curumim_Kids
                  </div>
                </a>
                <a
                  href="https://instagram.com/curumim__kids"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <div className="bg-body-tertiary p-3 border border-2 border-primary rounded-3 d-flex justify-content-center align-items-center gap-2">
                    <i className="bi bi-instagram text-primary fs-4"></i>{" "}
                    @Curumim__Kids
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default App;
