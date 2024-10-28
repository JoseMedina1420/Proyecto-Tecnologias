import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import React, { useState } from 'react';

function Producto({ Id, Nombre, Descripcion, Tallas, Precio, Stock, imagen }) {
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success'); // Cambia el tipo de alerta según sea necesario
  const [showAlert, setShowAlert] = useState(false);

  const handleAgregarAlCarrito = async () => {
    console.log("ID del producto:", Id);
    console.log("Nombre del producto:", Nombre);
    try {
      const response = await fetch('http://localhost/Conexion/agregar_carrito.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: Id,
          nombre: Nombre,
          descripcion: Descripcion,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      if (data.success) {
        setAlertMessage('Producto agregado al carrito');
        setAlertVariant('success');
      } else {
        setAlertMessage('Error al agregar el producto al carrito: ' + (data.error || 'Error desconocido'));
        setAlertVariant('danger');
      }
      setShowAlert(true);
    } catch (error) {
      console.error('Error en la conexión con el servidor:', error);
      setAlertMessage('Error en la conexión con el servidor: ' + error.message);
      setAlertVariant('danger');
      setShowAlert(true);
    }
  };
  

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {showAlert && (
        <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
          {alertMessage}
        </Alert>
      )}
      <Card style={{ width: '18rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <Card.Img variant="top" src={imagen} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
        <Card.Body style={{ flexGrow: 1 }}>
          <Card.Title className="text-center">{Nombre}</Card.Title>
          <Card.Text className="text-center">{Descripcion}</Card.Text>
          <Card.Text className="text-center">
            <p>Talla: {Tallas}</p>
          </Card.Text>
          <Card.Footer className="text-center">
            <p> Precio: ${Precio}</p>
            <p> Stock: {Stock}</p>
          </Card.Footer>
          <Button variant="primary" style={{ display: 'block', margin: '0 auto' }} onClick={handleAgregarAlCarrito}>
            Agregar al carrito
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Producto;
