import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Contatos from './pages/Contatos';
import MaisVendidos from './pages/MaisVendidos';
import OfertasDoDia from "./pages/OfertasDoDia";
import Produtos from "./pages/produtos";
import Usuario from "./pages/Usuario";

function AppRoutes(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contatos" element={<Contatos/>}/>
            <Route path="/MaisVendidos" element={<MaisVendidos/>}/>
            <Route path="/OfertasDoDia" element={<OfertasDoDia/>}/>
            <Route path="/Produtos" element={<Produtos/>}/>
            <Route path="/Usuario" element={<Usuario/>}/>
        </Routes>
        </BrowserRouter>
    );
};
export default AppRoutes;
