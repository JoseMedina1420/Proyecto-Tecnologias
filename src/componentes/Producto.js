import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
function Producto({id,Nombre,Descripcion,Talla,Precio,Stock,imagen}) {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
    <Card style={{ width: '18rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
      <Card.Img variant="top" src={imagen} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
      <Card.Body style={{ flexGrow: 1 }}>
        <Card.Title className='text-center' >{Nombre}</Card.Title>
        <Card.Text className='text-center'>
          {Descripcion}
        </Card.Text>
        <Card.Text className='text-center'>
          <p>Talla: {Talla}</p>
        </Card.Text>
        <Card.Footer className='text-center'>
         <p> Precio: ${Precio}</p> 
         <p> Stock: {Stock}</p>
        </Card.Footer>
        <Button  variant="primary"  style={{ display: 'block', margin: '0 auto' }}>Agregar al carrito</Button>
      </Card.Body>
    </Card>
    </div>
    
  );
}

export default Producto;