import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { MdRemoveShoppingCart, MdOutlineShoppingCartCheckout } from "react-icons/md";

function Carrito() {
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [totalCompra, setTotalCompra] = useState(0);

  // Obtener datos del carrito desde el servidor
  useEffect(() => {
    const fetchCarrito = async () => {
      try {
        const response = await fetch('http://localhost/Conexion/obtener_carrito.php');
        const data = await response.json();
        setProductosCarrito(data);
        calcularTotal(data); // Calcula el total cuando se carguen los productos
      } catch (error) {
        console.error("Error al obtener el carrito:", error);
      }
    };

    fetchCarrito();
  }, []);

  // Función para calcular el total de la compra
  const calcularTotal = (productos) => {
    const total = productos.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    setTotalCompra(total);
  };

  // Función para manejar la compra del carrito
  const handleComprarCarrito = async () => {
    try {
      const response = await fetch('http://localhost/Conexion/comprar_carrito.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        alert('Compra realizada con éxito. Se ha generado el ticket.');
        setProductosCarrito([]); // Limpia el carrito visualmente
        setTotalCompra(0); // Resetea el total a cero
        // Aquí podrías mostrar o descargar el ticket generado
      } else {
        alert('Error al realizar la compra.');
      }
    } catch (error) {
      console.error('Error en la conexión con el servidor:', error);
      alert('Error en la conexión con el servidor.');
    }
  };

  // Popover que muestra el contenido del carrito
  const popover = (
    <Popover id="popover-carrito" style={{ maxWidth: '300px' }}>
      <Popover.Header as="h3">Carrito</Popover.Header>
      <Popover.Body style={{ maxHeight: '200px', overflowY: 'auto' }}>
        {productosCarrito.length > 0 ? (
          <>
            {productosCarrito.map((producto, index) => (
              <div key={index} className="d-flex flex-column mb-2">
                <strong>{producto.nombre}</strong>
                <span>Descripción: {producto.descripcion}</span>
                <span>Precio: ${producto.precio}</span>
                <span>Cantidad: {producto.cantidad}</span>
              </div>
            ))}
            <div className="d-flex justify-content-between mt-3">
              <strong>Total:</strong>
              <span>${totalCompra.toFixed(2)}</span>
            </div>
          </>
        ) : (
          <span>El carrito está vacío</span>
        )}
      </Popover.Body>
      {/* Botón para comprar el carrito */}
      {productosCarrito.length > 0 && (
        <div className="text-center p-2">
          <Button variant="primary" onClick={handleComprarCarrito}>
            Comprar carrito
          </Button>
        </div>
      )}
    </Popover>
  );

  // Icono del carrito, cambia si está vacío o tiene productos
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
