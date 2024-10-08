import Barranavegacion from '../componentes/Navegacion'
import CarruselImg from '../componentes/Carrusel';
import Productos from '../componentes/Productos';
function Inicio() {
  return (
    <div>
     < Barranavegacion />
     < CarruselImg />
      <h1 className="text-center" style={{ marginTop: "50px", marginBottom: "50px",color:"Highlight" }}>Productos Destacados</h1>
     <div style={{ height: "auto",width: "1400px", backgroundColor: "#fafdff", borderRadius: "20px", margin: "40px auto 50px auto" }}>
        <Productos/>
     </div>
    
    </div>
  );
}

export default Inicio;