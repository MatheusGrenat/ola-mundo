import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
console.log(window.location)

const pagina = window.location.pathname === '/' ? <Inicio /> : <div><SobreMim /></div>
function App() {
  return pagina
}

export default App;
