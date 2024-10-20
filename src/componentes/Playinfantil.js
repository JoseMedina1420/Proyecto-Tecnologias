import React, { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Producto from '../componentes/Producto';
import Barranavegacion from '../componentes/Navegacion';

function Playadulto() {
    const [productos, setProductos] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const productsPerPage = 12;

    useEffect(() => {
        fetch(`http://localhost/Conexion/get_play_infantil.php?page=${page}&limit=${productsPerPage}`)
            .then(response => response.json())
            .then(data => {
                setProductos(data.productos); 
                setTotalPages(data.totalPages);
            })
            .catch(error => console.error('Error al obtener productos:', error));
    }, [page]); 

   
    const handlePageChange = (pageNumber) => {
        setPage(pageNumber);
    };

    
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
            <div className='container'>
                <div className='row'>
                    {
                        productos.map(c => (
                            <div className='col-md-3' key={c.id}>
                                <Producto
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
