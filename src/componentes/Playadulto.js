import React, { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Producto from '../componentes/Producto';
import Barranavegacion from '../componentes/Navegacion';
import Carrito from './Carrito';

function Playadulto() {
    const [productos, setProductos] = useState([]);
    const [page, setPage] = useState(1); // Página actual
    const [totalPages, setTotalPages] = useState(1); // Número total de páginas
    const productsPerPage = 12; // Productos por página

    useEffect(() => {
        // Hacer una petición GET al archivo PHP con la página y el límite
        fetch(`http://localhost/Conexion/get_play_adulto.php?page=${page}&limit=${productsPerPage}`)
            .then(response => response.json())
            .then(data => {
                setProductos(data.productos); // Actualizar el estado con los productos obtenidos
                setTotalPages(data.totalPages); // Actualizar el estado con el número total de páginas
            })
            .catch(error => console.error('Error al obtener productos:', error));
    }, [page]); // Vuelve a hacer la petición cada vez que cambia la página

    // Función para manejar el cambio de página
    const handlePageChange = (pageNumber) => {
        setPage(pageNumber);
    };

    // Generar los botones de paginación dinámicamente
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === page} onClick={() => handlePageChange(number)}>
                {number}
            </Pagination.Item>
        );
    }

    return (
        <div>
            <Barranavegacion />
            <Carrito />
            <div className='container'>
                <div className='row'>
                    {
                        productos.map(c => (
                            <div className='col-md-3' key={c.id}>
                                <Producto
                                    Id={c.id}
                                    Nombre={c.nombre}
                                    Descripcion={c.descripcion}
                                    Tallas={c.talla}
                                    Precio={c.precio}
                                    Stock={c.stock}
                                    imagen={`data:image/jpg;base64,${c.imagen}`}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            
            {/* Barra de paginación */}
            <div className="d-flex justify-content-center mt-4">
                <Pagination>{items}</Pagination>
            </div>
        </div>
    );
}

export default Playadulto;
