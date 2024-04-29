import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from './components/Formulario.jsx'
import CitaCard from './components/CitaCard.jsx'

const App = () => {
  const [citas, setCitas] = useState([]); // Eliminar las citas agregadas por defecto

  const agregarCita = (nuevaCita) => {
    const newId = citas.length + 1;
    setCitas([...citas, { id: newId, ...nuevaCita }]);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Citas</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Formulario agregarCita={agregarCita} />
          {citas.map((cita) => (
            <CitaCard key={cita.id} cita={cita} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
