import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
console.log(window.location)

function AppRoutes() {
  return(
    <BrowserRouter>
      <Menu />
      
      <Routes>
        
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>
        
        <Route path="*" element={<div>Pagina nao encontrada</div>} />
      </Routes>

      <Rodape />
    
    </BrowserRouter>
  )
}

export default AppRoutes;
