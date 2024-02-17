import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import './App.css';

const LoginFormCard = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.trim() === '' || password.trim() === '') {
      alert('Por favor completa los dos campos');
      return;
    }

    if (!username.includes('@')) {
      setError('El usuario debe contener un "@"');
      return;
    }

    setSubmittedData({
      username: username,
      password: password
    });

    if (typeof onLogin === 'function') {
      onLogin(username, password);
    }
  };

  return (
    <Card className="css-card">
      <Card.Body>
        <Card.Title>Iniciar sesión</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <br/>
            <Form.Control type="email" placeholder="Ingresa tu usuario" 
                          value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
          <br/>
            <Form.Control type="password" placeholder="Ingresa tu contraseña" 
                          value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <br/>
          <Button variant="info" type="submit">Ingresar</Button>
        </Form>
        <br/>
      </Card.Body>
    </Card>
  );
};

export default LoginFormCard;
