import React from 'react';
import Producto from '../componentes/Producto'
import img1 from '../imagenes/IMG-20240918-WA0004.jpg'
import img2 from '../imagenes/IMG-20240918-WA0005.jpg'
import img3 from '../imagenes/IMG-20240918-WA0009.jpg'
import img4 from '../imagenes/IMG-20240918-WA0008.jpg'
import img5 from '../imagenes/IMG-20240918-WA0011.jpg'
import img6 from '../imagenes/IMG-20240918-WA0020.jpg'
import img7 from '../imagenes/IMG-20240918-WA0015.jpg'
import img8 from '../imagenes/IMG-20240918-WA0026.jpg'
import img9 from '../imagenes/IMG-20240918-WA0012.jpg'
import img10 from '../imagenes/IMG-20240918-WA0016.jpg'
import img11 from '../imagenes/IMG-20240918-WA0017.jpg'
import img12 from '../imagenes/IMG-20240918-WA0018.jpg'
const productos=[
    {
        id: 1,
        Nombre: 'Catrina papel picado',
        Descripcion: 'Playera negra Unisex',
        Tallas: 'Adulto: CH,M,G,XL',
        Precio: '$120',
        imagen: img1,
    },
    {
        id: 2,
        Nombre: 'Jack ',
        Descripcion: 'Playera negra Unisex',
        Tallas: 'Adulto: CH,M,G,XL',
        Precio: '$100',
        imagen: img2,
    },
    {
        id: 3,
        Nombre: 'Catrina perfil',
        Descripcion: 'Playera negra Unisex',
        Tallas: 'Adulto: CH,M,G,XL',
        Precio: '$120',
        imagen: img3,
    },
    {
        id: 4,
        Nombre: 'Catrina Bicicleta',
        Descripcion: 'Playera negra Unisex',
        Tallas: 'Adulto: CH,M,G,XL',
        Precio: '$120',
        imagen: img4,
    },
    {   id: 5,
        Nombre: 'Calavera Cempasúchil',
        Descripcion: 'Playera negra Unisex',
        Tallas: 'Adulto: CH,M,G,XL',
        Precio: '$120',
        imagen: img5,

    },
    {
        id: 6,
        Nombre: 'Calavera Guitarra',
        Descripcion: 'Playera negra Unisex',
        Tallas: 'Adulto: CH,M,G,XL',
        Precio: '$120',
        imagen: img6,
    },
    {
        id: 7,
        Nombre: 'Calavera Tequila',
        Descripcion: 'Playera negra Unisex',
        Tallas: 'Adulto: CH,M,G,XL',
        Precio: '$120',
        imagen: img7,
    },
    {
        id: 8,
        Nombre: 'Beetlejuice',
        Descripcion: 'Playera negra Unisex',
        Tallas: 'Adulto: CH,M',
        Precio: '$100',
        imagen: img8,
    },
    {
        id: 9,
        Nombre: 'Calavera Ojo-diseño 2',
        Descripcion: 'Playera negra Unisex',
        Tallas: 'Adulto: CH,M,G,XL',
        Precio: '$120',
        imagen: img9,
    },
    {
        id: 10,
        Nombre: 'Catrina Sombrero Morado',
        Descripcion: 'Playera negra Unisex',
        Tallas: 'Adulto: CH,M,G,XL',
        Precio: '$120',
        imagen: img10,
    },
    {
        id: 11,
        Nombre: 'Guerrero Jaguar',
        Descripcion: 'Playera negra Unisex',
        Tallas: 'Adulto: CH,M,G,XL',
        Precio: '$120',
        imagen: img11,
    },
    {
        id: 12,
        Nombre: 'Calavera quetzal',
        Descripcion: 'Playera negra Unisex',
        Tallas: 'Adulto: CH,M,G,XL',
        Precio: '$120',
        imagen: img12,
    }

]
function Productos(){
        console.log(productos)
        return(
            <div className='container d-flex justify-content-center align-items-center h-500'>
                <div className='row'>
                    {
                        productos.map(c =>(
                            <div className='col-md-3' key={productos.id}>
                                <Producto
                                    key={c.id}
                                    Nombre={c.Nombre}
                                    Descripcion={c.Descripcion}
                                    Tallas={c.Tallas}
                                    Precio={c.Precio}
                                    imagen={c.imagen}
                                    style={{ width: '200px', height: '200px' }}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
}
export default Productos