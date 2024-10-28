import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

function Producto({ Id, Nombre, Descripcion, Tallas, Precio, Stock, imagen }) {
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');
  const [showAlert, setShowAlert] = useState(false);
  const [cantidad, setCantidad] = useState(1); // Estado para la cantidad de productos

  const handleAgregarAlCarrito = async () => {
    console.log("ID del producto:", Id);
    console.log("Nombre del producto:", Nombre);
    console.log("Cantidad del producto:", cantidad);
    
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
          precio: Precio,
          cantidad: cantidad, // Incluye la cantidad
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

  // Función para manejar el cambio en la cantidad
  const handleCantidadChange = (e) => {
    const nuevaCantidad = parseInt(e.target.value, 10);
    if (nuevaCantidad > 0 && nuevaCantidad <= Stock) {
      setCantidad(nuevaCantidad);
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
          <Form.Group className="text-center">
            <Form.Label>Cantidad:</Form.Label>
            <Form.Control 
              type="number" 
              value={cantidad} 
              min="1" 
              max={Stock} 
              onChange={handleCantidadChange} 
              style={{ width: '60px', margin: '0 auto' }}
            />
          </Form.Group>
          <Button variant="primary" style={{ display: 'block', margin: '0 auto' }} onClick={handleAgregarAlCarrito}>
            Agregar al carrito
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Producto;
