import React from "react";
import { Link } from "react-router-dom";
import style from "./tabela.css";

const TabelaPatient = ({ patient }) => {
  console.log(patient);
  return (
    <div className="tabela">
      <h1>Tabela de Pacientes</h1>
      {patient.length === 0 && <h2>Nenhum cadastro de paciente</h2>}
      {patient.length > 0 && (
        <table className="tabela">
          <thead>
            <tr>
              <th with="17%">NAME</th>
              <th>DATA DE NASCIMENTO</th>
              <th>CPF</th>
              <th>SEXO</th>
              <th>ENDEREÇO</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {patient.map((patient) => (
              <tr key={patient.nome}>
                <td>{patient.name}</td>
                <td>{patient.data_nascimento}</td>
                <td>{patient.cpf}</td>
                <td>{patient.sexo}</td>
                <td>{patient.endereço}</td>
                <td>{patient.status}</td>
                <td>
                  <button className="botao">
                    <Link to={`/editar/${patient.cpf}`}>Editar</Link>
                  </button>
                </td>
                <td>
                  <button className="botao">Status</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TabelaPatient;
