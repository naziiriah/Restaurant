import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./page/Home";
import "../src/Styles/index.css";
import Bills from "./page/Bills";
import Menu from "./page/Menu";
import Final from "./page/Final";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Home/>} />
          <Route path ="/bill" element={<Bills/>} />
          <Route path ="/menu" element={<Menu/>} />
          <Route path ="/end" element={<Final/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
