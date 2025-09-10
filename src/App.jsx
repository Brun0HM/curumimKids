import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h3 className="text-center bg-primary p-3 fs-6 rounded-3 d-flex gap-2">
            <i className="bi bi-leaf"></i>
            Sustentabilidade & Diversão
          </h3>
          <div className="display-4">
            <span className="fw-semibold">
              Produtos infantis <br /> sustentáveis que unem <br />{" "}
              <span className="text-secondary">educação,</span>
              <span className="text-primary">diversão </span> e <br />{" "}
              <span className="text-primary">cuidado com o planeta</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
