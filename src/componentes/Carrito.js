import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { MdRemoveShoppingCart, MdOutlineShoppingCartCheckout } from "react-icons/md";
import jsPDF from 'jspdf';

function Carrito() {
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [ticket, setTicket] = useState(null);
  const [total, setTotal] = useState(0);  // Nuevo estado para el total

  // Obtener datos del carrito desde el servidor
  useEffect(() => {
    const fetchCarrito = async () => {
      try {
        const response = await fetch('http://localhost/Conexion/obtener_carrito.php');
        const data = await response.json();
        setProductosCarrito(data);
        // Calcular el total de la compra
        const totalCompra = data.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
        setTotal(totalCompra);
      } catch (error) {
        console.error("Error al obtener el carrito:", error);
      }
    };

    fetchCarrito();
  }, []);

  // Función para manejar la compra del carrito
  const handleComprarCarrito = async () => {
    try {
      const response = await fetch('http://localhost/Conexion/comprar_carrito.php', {
        method: 'POST',
      });
      const data = await response.json();

      if (data.success) {
        setTicket({
          total: data.total,
          productos: data.productos
        });
        alert('Compra realizada con éxito');
        generarPDF(data); // Llamamos a la función para generar el PDF
      } else {
        alert('Error al realizar la compra: ' + data.error);
      }
    } catch (error) {
      console.error("Error al procesar la compra:", error);
      alert("Error al realizar la compra.");
    }
  };

  const generarPDF = (data) => {
    const doc = new jsPDF();

    doc.text("Ticket de Compra", 10, 10);
    let y = 20;
    data.productos.forEach((producto) => {
      doc.text(`${producto.nombre} - ${producto.cantidad} x $${producto.precio}`, 10, y);
      y += 10;
    });

    doc.text(`Total: $${data.total}`, 10, y);
    doc.save('ticket_compra.pdf'); // Genera y descarga el PDF
  };

  // Popover que muestra el contenido del carrito
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
              <span>Cantidad: {producto.cantidad}</span> {/* Muestra la cantidad */}
            </div>
          ))
        ) : (
          <span>El carrito está vacío</span>
        )}
      </Popover.Body>
      {/* Muestra el total de la compra en el popover */}
      {productosCarrito.length > 0 && (
        <div className="text-center p-2">
          <strong>Total: ${total}</strong>
        </div>
      )}
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
