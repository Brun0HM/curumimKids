import React from "react";

const CardProdutos = (props) => {
  return (
    <div className="bg-body p-4 rounded-4 border border-2 border-primary h-100 d-flex">
      <div className="d-flex flex-column align-items-center text-center w-100">
        <img
          className="rounded-3 img img-fluid"
          src={props.produto}
          alt="Imagem do produto"
        />
        <h3 className="fw-semibold text-primary mt-3 fs-5 text-break">
          {props.title}
        </h3>
        <h2 className="text-primary fw-bold">{props.preco}</h2>
        <span className="fs-6 text-break mt-3">{props.descricao}</span>
        <button className="btn btn-primary text-white rounded-3 mt-3">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default CardProdutos;
