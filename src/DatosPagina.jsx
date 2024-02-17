import React from 'react';

const SubmittedDataPage = ({ submittedData }) => {
  return (
    <div className="submitted-data-page">
      <h2>Datos ingresados:</h2>
      <p>Usuario: {submittedData.username}</p>
      <p>Contraseña: {submittedData.password}</p>
      <br/>
      <br/>
      <p style={{ fontSize: 'small' }}>En este contexto se refiere a enviar datos de un 
      componente <br/> principal a un componente secundario mediante props.</p>
    </div>
  );
};

export default SubmittedDataPage;
