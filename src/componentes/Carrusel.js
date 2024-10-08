import Carousel from 'react-bootstrap/Carousel';
import Imagen1 from '../imagenes/img-car1.png'
import Imagen2 from '../imagenes/img-car2.png'
import Imagen3 from '../imagenes/img-car3.png'
function DarkVariantExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          style={{ height: "300px", objectFit: "cover" }}
          src = {Imagen1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          style={{ height: "300px", objectFit: "cover" }}
          src = {Imagen2}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          style={{ height: "300px", objectFit: "cover" }}
          src = {Imagen3}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );

}

export default DarkVariantExample;