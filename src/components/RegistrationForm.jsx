import React, { useState } from "react";

export const RegistrationForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-lg w-50">
        <h2 className="text-center mb-4">Formulario de Registro</h2>
        <div className="form-group mb-3">
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Correo</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Género</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="gender"
                value="Masculino"
                className="form-check-input"
                onChange={handleChange}
              />
              <label className="form-check-label">Masculino</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="gender"
                value="Femenino"
                className="form-check-input"
                onChange={handleChange}
              />
              <label className="form-check-label">Femenino</label>
            </div>
          </div>
        </div>
        <div className="form-group mb-3">
          <div className="form-check">
            <input
              type="checkbox"
              name="terms"
              className="form-check-input"
              checked={form.terms}
              onChange={handleChange}
              
            />
            <label className="form-check-label">Acepto los términos y condiciones</label>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-success w-100">
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};
