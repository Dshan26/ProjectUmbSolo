import React from 'react'

export const Confirmation = ({ data, onExit }) => {
    return (
        <div className="text-center mt-4">
          <h2>Confirmación de Inscripción</h2>
          <p><strong>Nombre:</strong> {data.name}</p>
          <p><strong>Correo:</strong> {data.email}</p>
          <p><strong>Género:</strong> {data.gender}</p>
          <button className="btn btn-danger mt-3" onClick={onExit}>Salir</button>
        </div>
      );
}
