import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  <>
    <h1>Erro 404!</h1>

    <p>Pagina não encontrada!!</p>

    <Link to="/">Voltar para a pagina principal</Link>
  </>;
};

export default NotFound;
