import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar/Navbar';
import LoginFormCard from './LoginFormCard';
import SubmittedDataPage from './DatosPagina';
import FormularioPDF from '../Formulario/FormularioPDF';

function App() {
  const [submittedData, setSubmittedData] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showPDFForm, setShowPDFForm] = useState(false);

  const handleNavigation = (option) => {
    if (option === 'Pase de parámetros') {
      setShowLoginForm(true);
      setShowPDFForm(false); // Reiniciar el estado al cambiar de sección
      setSubmittedData(null); // Reiniciar el estado al cambiar de sección
    } else if (option === 'Crear PDF') {
      setShowLoginForm(false);
      setShowPDFForm(true);
      setSubmittedData(null); // Reiniciar el estado al cambiar de sección
    } else {
      setShowLoginForm(false);
      setShowPDFForm(false);
      setSubmittedData(null); // Reiniciar el estado al cambiar de sección
    }
  };

  const handleLogin = (username, password) => {
    setSubmittedData({ username, password });
  };

  return (
    <div className="App">
      <Navbar onNavigate={handleNavigation} />
      <div className="content">
        {showLoginForm && !submittedData ? <LoginFormCard onLogin={handleLogin} /> : null}
        {submittedData ? <SubmittedDataPage submittedData={submittedData} /> : null}
        {showPDFForm ? <FormularioPDF /> : null}
        {!showLoginForm && !submittedData && !showPDFForm && (
          <div className="text-container">
            <div className="text">
              <h1>¡Bienvenido!</h1>
              <br/>
              <p>React.js es una biblioteca de JavaScript que se utiliza para construir interfaces de usuario.
                <br /> La sintaxis que usa React es el JavaScript XML (JSX), el cual es una combinación del lenguaje HTML y el JavaScript.
                 Toda aplicación web React se compone de componentes reutilizables que conforman partes de la interfaz de usuario, podemos tener un componente distinto para nuestra barra de navegación, otro para el pie de página, otro para el contenido principal, etc.
                 Tener estos componentes reutilizables facilita el desarrollo porque no tenemos que repetir el código reiterativo. Sólo tendríamos que crear su lógica e importar el componente en cualquier parte del código donde se necesite.
                React también es una aplicación de una sola página. Por tanto, en lugar de enviar una petición al servidor cada vez que hay que renderizar una nueva página, el contenido de la página se carga directamente desde los componentes de React.
                 Esto conduce a una renderización más rápida sin recargas de la página.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
