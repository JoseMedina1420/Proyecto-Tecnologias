import React from 'react';
import Producto from '../componentes/Producto'
import Barranavegacion from '../componentes/Navegacion';
import img1 from '../imagenes_infantil/IMG-20240925-WA0036.jpg'
import img2 from '../imagenes_infantil/IMG-20240925-WA0037.jpg'
import img3 from '../imagenes_infantil/IMG-20240925-WA0038.jpg'
import img4 from '../imagenes_infantil/IMG-20240925-WA0039.jpg'
import img5 from '../imagenes_infantil/IMG-20240925-WA0040.jpg'
import img6 from '../imagenes_infantil/IMG-20240925-WA0041.jpg'
import img7 from '../imagenes_infantil/IMG-20240925-WA0042.jpg'
import img8 from '../imagenes_infantil/IMG-20240925-WA0043.jpg'
import img9 from '../imagenes_infantil/IMG-20240925-WA0044.jpg'
import img10 from '../imagenes_infantil/IMG-20240925-WA0045.jpg'
import img11 from '../imagenes_infantil/IMG-20240925-WA0046.jpg'
import img12 from '../imagenes_infantil/IMG-20240925-WA0047.jpg'
const productos=[
    {
        id: 1,
        Nombre: 'Playera Nezuko',
        Descripcion: 'Playera infantil',
        Tallas: 'Infantil: CH,M,G',
        Precio: '$40',
        imagen: img1,
    },
    {
        id: 2,
        Nombre: 'Playera Smiling Critters ',
        Descripcion: 'Playera infantil',
        Tallas: 'Infantil: CH,M,G',
        Precio: '$40',
        imagen: img2,
    },
    {
        id: 3,
        Nombre: 'Playera One pice',
        Descripcion: 'Playera infantil',
        Tallas: 'Infantil: CH,M,G',
        Precio: '$40',
        imagen: img3,
    },
    {
        id: 4,
        Nombre: 'Playera Goku-Rosa',
        Descripcion: 'Playera infantil',
        Tallas: 'Infantil: CH,M,G',
        Precio: '$40',
        imagen: img4,
    },
    {   id: 5,
        Nombre: 'Playera Dragon-ball',
        Descripcion: 'Playera infantil',
        Tallas: 'Infantil: CH,M,G',
        Precio: '$40',
        imagen: img5,

    },
    {
        id: 6,
        Nombre: 'Playera paw-patrol',
        Descripcion: 'Playera infantil',
        Tallas: 'Infantil: CH,M,G',
        Precio: '$40',
        imagen: img6,
    },
    {
        id: 7,
        Nombre: 'Playera Spider-man',
        Descripcion: 'Playera infantil',
        Tallas: 'Infantil: CH,M,G',
        Precio: '$40',
        imagen: img7,
    },
    {
        id: 8,
        Nombre: 'Playera Bluey',
        Descripcion: 'Playera infantil',
        Tallas: 'Infantil: CH,M,G',
        Precio: '$40',
        imagen: img8,
    },
    {
        id: 9,
        Nombre: 'Digital circus',
        Descripcion: 'Playera infantil',
        Tallas: 'Infantil: CH,M,G',
        Precio: '$40',
        imagen: img9,
    },
    {
        id: 10,
        Nombre: 'Playera dragon-ball-fases',
        Descripcion: 'Playera infantil',
        Tallas: 'Infantil: CH,M,G',
        Precio: '$40',
        imagen: img10,
    },
    {
        id: 11,
        Nombre: 'Playera Skibidi toilet',
        Descripcion: 'Playera infantil',
        Tallas: 'Infantil: CH,M,G',
        Precio: '$40',
        imagen: img11,
    },
    {
        id: 12,
        Nombre: 'Playera Catrina colibri',
        Descripcion: 'Playera infantil',
        Tallas: 'Infantil: CH,M,G',
        Precio: '$40',
        imagen: img12,
    }

]
function Playinfantil(){
        console.log(productos)
        return(
            <div> <Barranavegacion/>
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
            </div>
        )
}
export default Playinfantil