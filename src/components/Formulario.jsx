import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ agregarCita }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Enviar los datos del formulario al componente App
    agregarCita(data);
    // Mostrar una alerta de que los datos fueron enviados (opcional)
    alert("Datos enviados");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre:</label>
        <input
          type="text"
          id="nombre"
          {...register("nombre", { required: true })}
          className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
        />
        {errors.nombre && <div className="invalid-feedback">Este campo es requerido</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="apellido" className="form-label">Apellido:</label>
        <input
          type="text"
          id="apellido"
          {...register("apellido", { required: true })}
          className={`form-control ${errors.apellido ? "is-invalid" : ""}`}
        />
        {errors.apellido && <div className="invalid-feedback">Este campo es requerido</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="dni" className="form-label">DNI:</label>
        <input
          type="text"
          id="dni"
          {...register("dni", { required: true })}
          className={`form-control ${errors.dni ? "is-invalid" : ""}`}
        />
        {errors.dni && <div className="invalid-feedback">Este campo es requerido</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
        />
        {errors.email && <div className="invalid-feedback">Este campo es requerido</div>}
      </div>
      <button type="submit" className="btn btn-primary mb-3">Enviar</button>
    </form>
  );
};

export default Form;
