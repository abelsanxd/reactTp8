import React from "react";

const CitaCard = ({ cita }) => {
  return (
    <div className="card mb-3">
      <div className="card-header">Cita</div>
      <div className="card-body">
        <h5 className="card-title">{cita.fecha}</h5>
        <p className="card-text">Nombre: {cita.nombre}</p>
        <p className="card-text">Apellido: {cita.apellido}</p>
        <p className="card-text">DNI: {cita.dni}</p>
        <p className="card-text">Email: {cita.email}</p>
      </div>
    </div>
  );
};

export default CitaCard;
