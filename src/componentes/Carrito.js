import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

function Carrito() {
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCarrito = async () => {
      try {
        const response = await fetch('http://localhost/Conexion/calcular_total.php');
        const data = await response.json();
        setProductosCarrito(data.productos);
        setTotal(data.total);
      } catch (error) {
        console.error("Error al obtener la nota:", error);
      }
    };

    fetchCarrito();
  }, []);

  const handlePago = async () => {
    try {
      const response = await fetch('http://localhost/Conexion/crear_link_pago.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      
      // Redirigir a Mercado Pago
      window.location.href = data.init_point;
    } catch (error) {
      console.error("Error al crear el link de pago:", error);
    }
  };

  const popover = (
    <Popover id="popover-carrito" style={{ maxWidth: '300px' }}>
      <Popover.Header as="h3">Nota de Compra</Popover.Header>
      <Popover.Body style={{ maxHeight: '200px', overflowY: 'auto' }}>
        {productosCarrito.length > 0 ? (
          productosCarrito.map((producto, index) => (
            <div key={index} className="mb-2">
              <strong>{producto.nombre}</strong>
              <span>Descripción: {producto.descripcion}</span>
              <span>Precio unitario: ${producto.precio}</span>
              <span>Cantidad: {producto.cantidad}</span>
              <span>Subtotal: ${producto.subtotal}</span>
            </div>
          ))
        ) : (
          <span>El carrito está vacío</span>
        )}
        <div className="text-center mt-3">
          <strong>Total a pagar: ${total}</strong>
        </div>
      </Popover.Body>
      {productosCarrito.length > 0 && (
        <div className="text-center p-2">
          <Button variant="primary" onClick={handlePago}>
            Pagar
          </Button>
        </div>
      )}
    </Popover>
  );

  return (
    <div className="d-flex justify-content-end">
      <OverlayTrigger trigger="click" placement="left" overlay={popover}>
        <Button variant="success">
          <MdOutlineShoppingCartCheckout size={50} />
        </Button>
      </OverlayTrigger>
    </div>
  );
}

export default Carrito;
