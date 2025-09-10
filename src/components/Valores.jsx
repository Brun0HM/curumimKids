import React from "react";

const Valores = (props) => {
  return (
    <div className="bg-body p-4 rounded-4 border border-2 border-primary h-100 d-flex">
      <div className="d-flex flex-column align-items-center text-center w-100">
        <i
          className={`bi ${props.icon} text-primary fs-4 fundido p-2 rounded-circle`}
        ></i>
        <h3 className="fw-semibold text-primary mt-3 fs-5">{props.title}</h3>
        <span className="fs-6 text-break mt-3">{props.descricao}</span>
      </div>
    </div>
  );
};

export default Valores;
