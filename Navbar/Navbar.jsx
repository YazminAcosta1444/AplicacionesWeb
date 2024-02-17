import React, { useState } from 'react';
import './Navbar.css';
import logo from '../src/assets/react-js.png'; // Importa la imagen aquí
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'; // Asegúrate de importar los estilos de SweetAlert2 si no lo has hecho ya

const Navbar = ({ onNavigate }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavigation = (option) => {
        onNavigate(option);
        setIsOpen(false);

       if (option === 'Sweet Alerts') {
            showSweetAlertsAlert();
        }
    };


    const showSweetAlertsAlert = () => {
        Swal.fire({
            title: 'Sweet Alerts',
            text: '¡Este es un ejemplo de Sweet Alert!',
            icon: 'info',
            confirmButtonText: 'Entendido',
        });
    };


    return (
        <div className="navbar">
            <a href="/" className="nav_logo">
                <img src={logo} alt="React.js Logo" className="nav_logo" style={{ width: '150px', height: '40px' }} />
            </a>
            <div className={`nav_items ${isOpen ? "open" : ""}`}>
                <a href="#" onClick={() => handleNavigation("Crear PDF")}>Crear PDF</a>
                <a href="#" onClick={() => handleNavigation("Pase de parámetros")}>Pase de parámetros</a>
                <a href="#" onClick={() => handleNavigation("Sweet Alerts")}>Sweet Alerts</a>
                <a href="#">Envío de correo</a>

            </div>
            <div className="nav_toggle" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Navbar;
