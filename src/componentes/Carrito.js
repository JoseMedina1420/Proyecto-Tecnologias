import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { MdRemoveShoppingCart, MdOutlineShoppingCartCheckout } from "react-icons/md";

function Carrito() {
  const [productosCarrito, setProductosCarrito] = useState([]);

  useEffect(() => {
    const fetchCarrito = async () => {
      try {
        const response = await fetch('http://localhost/Conexion/obtener_carrito.php');
        const data = await response.json();
        setProductosCarrito(data);
      } catch (error) {
        console.error("Error al obtener el carrito:", error);
      }
    };

    fetchCarrito();
  }, []);

  const popover = (
    <Popover id="popover-carrito" style={{ maxWidth: '300px' }}>
      <Popover.Header as="h3">Carrito</Popover.Header>
      <Popover.Body style={{ maxHeight: '200px', overflowY: 'auto' }}>
        {productosCarrito.length > 0 ? (
          productosCarrito.map((producto, index) => (
            <div key={index} className="d-flex flex-column mb-2">
              <strong>{producto.nombre}</strong>
              <span>Descripción: {producto.descripcion}</span>
              <span>Precio: ${producto.precio}</span>
            </div>
          ))
        ) : (
          <span>El carrito está vacío</span>
        )}
      </Popover.Body>
      {productosCarrito.length > 0 && (
        <div className="text-center p-2">
          <Button variant="primary" onClick={() => alert("Proceder a comprar carrito")}>
            Comprar carrito
          </Button>
        </div>
      )}
    </Popover>
  );

  return (
    <div className="d-flex justify-content-end">
      <OverlayTrigger trigger="click" placement="left" overlay={popover}>
        <Button variant="success">
          {productosCarrito.length === 0 ? (
            <MdRemoveShoppingCart size={50} />
          ) : (
            <MdOutlineShoppingCartCheckout size={50} />
          )}
        </Button>
      </OverlayTrigger>
    </div>
  );
}

export default Carrito;
