import './App.css';
import Inicio from './componentes/Inicio';
import Playadulto from './componentes/Playadulto';
import Playinfantil from './componentes/Playinfantil';
import { BrowserRouter, Routes, Route } from'react-router-dom';
function App() {
  return (
    <div className="App">
       <div>
      <BrowserRouter>
        <Routes>
         <Route path='/playera-adulto' element={<Playadulto/>}/>
         <Route index path='/' element={<Inicio/>}/>
         <Route path='/playera-infantil' element={<Playinfantil/>}/>
       </Routes>
      </BrowserRouter>
     
     </div>
     </div>
  );
}

export default App;
