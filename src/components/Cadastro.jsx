import React, { Fragment } from "react";
import AdictionPatient from "../components/AdictionPatient";

const Cadastro = () => {
  // const getLocalStorage = () =>
  //   JSON.parse(localStorage.getItem(dbPatient)) ?? [];
  // const setLocalStorage = (dbPatient) =>
  //   localStorage.setItem(dbPatient, JSON.stringify(dbPatient));

  const createPatient = () => {
    // const newName = localStorage.getItem("name");
    // const nascimento = localStorage.getItem("nascimento");
    // const cpf = localStorage.getItem("cpf");
    // const sexo = localStorage.getItem("sexo");
    // const endereço = localStorage.getItem("endereço");
    // const status = localStorage.getItem("status");
    // console.log(newName);
    // console.log(nascimento);
    // console.log(cpf);
    // console.log(sexo);
    // console.log(endereço);
    // console.log(status);

    const fields = localStorage.getItem("fields", JSON.stringify(fields));
    console.log(fields);
  };

  return (
    <Fragment>
      <button onClick={createPatient}>Cadastrar</button>
      <AdictionPatient />
    </Fragment>
  );
};

export default Cadastro;
