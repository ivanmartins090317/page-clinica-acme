import React, { useState } from "react";
import { useNavegate } from "react-router-dom";

import "./adictionPatient.css";

// const name = document.querySelector("#name").value;
// const nascimento = document.querySelector("#data_nascimento").value;
// const cpf = document.querySelector("#cpf").value;
// const endereço = document.querySelector("#endereço").value;
// const sexo = document.querySelector("#sexo").value;
// const status = document.querySelector("#status").checked;

// localStorage.setItem("name", name);
// localStorage.setItem("nascimento", nascimento);
// localStorage.setItem("cpf", cpf);
// localStorage.setItem("endereço", endereço);
// localStorage.setItem("sexo", sexo);
// localStorage.setItem("name", name);
// localStorage.setItem("status", status);

// const [patient, setPatienti] = useState([
//   {
//     id: patient.id,
//     name: patient.name,
//     data_nascimento: patient.data_nascimento,
//     cpf: patient.cpf,
//     sexo: patient.sexo,
//     endereço: patient.endereço,
//     status: true,
//   },
//   { redirecionar: false },
// ]);

// const hendlePatientForm = (event, props) => {
//   event.preventDefault();
//   if (props.editPatient) {
//     props.editPatient(props.patient);
//   } else {
//     props.pushPatient(props.patient);
//   }
//   props.setPatienti({ redirecionar: true });

//   const goRender = () => {
//     let navegate = useNavegate();
//     if (redirecionar === true) {
//       return navegate("/");
//     }
//   };
// };

const initialState = {
  name: "",
  data_nascimento: "",
  cpf: "",
  sexo: "",
  endereço: "",
  status: "",
};

const AdictionPatient = (props) => {
  const [fields, setFields] = useState(initialState);
  const handleChange = (event) =>
    setFields({
      ...fields,
      [event.currentTarget.name]: event.currentTarget.value,
    });

  const handleSubmit = (event) => {
    props.addPatient(fields);
    event.preventDefault();
    alert("Paciente criado com sucesso");
    setFields(initialState);
  };

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              value={fields.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="date"
              id="data_nascimento"
              placeholder="Data de nascimento"
              name="data_nascimento"
              value={fields.data_nascimento}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="number"
              id="cpf"
              placeholder="cpf"
              name="cpf"
              value={fields.cpf}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="text"
              id="endereço"
              placeholder="endereço"
              name="endereço"
              value={fields.endereço}
              onChange={handleChange}
            />
          </div>

          <div>
            <select
              type="select"
              id="sexo"
              placeholder="sexo"
              name="sexo"
              value={fields.value}
              onChange={handleChange}
            >
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outros">Outros</option>
            </select>
          </div>

          <div>
            <input
              type="checkbox"
              id="status"
              placeholder="status"
              name="status"
              value={fields.status}
              onChange={handleChange}
            />
            Ativo
          </div>
          <button type="submit" className="cadastro">
            Cadastar
          </button>
        </form>
      </div>
    </>
  );
};

export default AdictionPatient;
