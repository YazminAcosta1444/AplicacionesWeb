import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import jsPDF from 'jspdf';

const FormularioPDF = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [sexo, setSexo] = useState('');
  const [error, setError] = useState('');

  const handleGenerarPDF = () => {
    if (nombre.trim() === '' || edad.trim() === '' || sexo.trim() === '') {
      setError('Completa los campos adecuadamente');
      return;
    }

    const pdf = new jsPDF();
    pdf.text(`Datos ingresados:`, 10, 10);
    pdf.text(`Nombre: ${nombre}`, 10, 20);
    pdf.text(`Edad: ${edad}`, 10, 30);
    pdf.text(`Sexo: ${sexo}`, 10, 40);
    pdf.save('Formulario.pdf');
  };

  const handleNombreChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z\s]+$/.test(value) || value === '') {
      setNombre(value);
    }
  };

  const handleEdadChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) || value === '') {
      setEdad(value);
    }
  };

  return (
    <Card className="custom-card " style={{ width: '300px', padding: '20px',boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}>
      <Card.Body>
        <Card.Title>Generar PDF</Card.Title>
        <Form>
          <Form.Group controlId="formNombre">
            <br/>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre"
              value={nombre}
              onChange={handleNombreChange}
            />
          </Form.Group>
          <Form.Group controlId="formEdad">
            <br/>
            <Form.Control
              type="text"
              placeholder="Ingresa tu edad"
              value={edad}
              onChange={handleEdadChange}
            />
          </Form.Group>
          <Form.Group controlId="formSexo">
          <br/>
            <Form.Control
              as="select"
              value={sexo}
              onChange={(e) => setSexo(e.target.value)}
            >
              <option value="">Selecciona tu sexo</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </Form.Control>
          </Form.Group>
          <br/>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Button variant="info" onClick={handleGenerarPDF}>
            Generar PDF
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FormularioPDF;
