import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-5 mt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-leaf fs-4"></i>
              <h5 className="fw-bold mb-0">Curumim</h5>
            </div>
            <p className="text-white-50">
              Produtos infantis sustentáveis que unem educação, diversão e
              cuidado com o planeta.
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <h6 className="fw-bold mb-3">Navegação</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <button
                  className="btn btn-link text-white-50 text-decoration-none p-0"
                  onClick={() =>
                    document
                      .getElementById("home")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Home
                </button>
              </li>
              <li className="mb-2">
                <button
                  className="btn btn-link text-white-50 text-decoration-none p-0"
                  onClick={() =>
                    document
                      .getElementById("sobre-nos")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Sobre Nós
                </button>
              </li>
              <li className="mb-2">
                <button
                  className="btn btn-link text-white-50 text-decoration-none p-0"
                  onClick={() =>
                    document
                      .getElementById("produtos")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Produtos
                </button>
              </li>
              <li className="mb-2">
                <button
                  className="btn btn-link text-white-50 text-decoration-none p-0"
                  onClick={() =>
                    document
                      .getElementById("contato")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <h6 className="fw-bold mb-3">Redes Sociais</h6>
            <div className="d-flex flex-column gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-50 text-decoration-none d-flex align-items-center gap-2"
              >
                <i className="bi bi-facebook"></i> @Curumim
              </a>
              <a
                href="https://tiktok.com/@curumim_kids"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-50 text-decoration-none d-flex align-items-center gap-2"
              >
                <i className="bi bi-tiktok"></i> @Curumim_Kids
              </a>
              <a
                href="https://instagram.com/curumim__kids"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-50 text-decoration-none d-flex align-items-center gap-2"
              >
                <i className="bi bi-instagram"></i> @Curumim__Kids
              </a>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <h6 className="fw-bold mb-3">Valores</h6>
            <p className="text-white-50 small">
              Sustentabilidade, educação, diversão, qualidade e responsabilidade
              social.
            </p>
          </div>
        </div>

        <hr className="my-4 text-white-50" />

        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <p className="text-white-50 small mb-0">
              © 2025 Curumim. Todos os direitos reservados.
            </p>
          </div>
          <div className="col-12 col-md-6 text-md-end">
            <p className="text-white-50 small mb-0">
              Feito com <i className="bi bi-heart-fill text-danger"></i> por
              Bruno
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
