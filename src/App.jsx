import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";

import Header from "./components/Header";
import Menu from "./components/menu";

import TabelaPatient from "./components/Tabela";
import AdictionPatient from "./components/AdictionPatient";
import NotFound from "./components/NotFound";

function App() {
  const editPatient = (patient) => {
    const index = patient.findIndex((p) => p.id === patient.id);
    const patients = patients.slice(0, index.concat(patient.slice(index + 1)));
    const newPatients = [...patients, patient].sort((a, b) => a.id - b.id);
    setPatient({ patients: newPatients });
  };

  const [patients, setPatient] = useState([
    {
      id: 1,
      name: "ivan",
      data_nascimento: "07-01-1986",
      cpf: 35556654,
      sexo: "masculino",
      endereço: "rua...",
      status: true,
    },
  ]);

  const addPatient = (new_patient) => {
    setPatient([...patients, new_patient]);

    const verify = patients.map((pat) => pat.cpf);

    if (verify === verify) {
      alert("ERRO\ncpf duplicado, favor verifica numero!");
    } else if (verify.length < 11) {
      console.log("cpf faltando caractere");
    }
  };
  const pushPatient = (patient) => {
    patient.id = patient.length + 1;
    setPatient({ patients: [...patients, patient] });
  };

  const verifyCpf = (props) => {
    const patient = patients.find(
      (patient) => patient.cpf === props.matchRoutes.validcpf
    );
    patient ? Navigate("/cadastro") : Navigate("/");
  };

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<TabelaPatient patient={patients} />} />;
          <Route
            path="/cadastrar"
            element={<AdictionPatient addPatient={addPatient} />}
          />
          <Route element={<NotFound />} />;
          <Route
            path="/editar/:validcpf"
            element={<AdictionPatient verifyCpf={verifyCpf} />}
            // render={(props) => {
            //   const patient = patients.find(
            //     (patient) => patient.cpf === props.matchRoutes.validcpf
            //   );
            //   patient ? (
            // <>

            // editPatient={editPatient}
            // patients={patients}

            // </>
            //   ) : (
            //     <Navigate to="/" />
            //   );
            // }}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
