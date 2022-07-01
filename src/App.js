import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./page/Home";
import "../src/Styles/index.css";
import Bills from "./page/Bills";
import Menu from "./page/Menu";
import Final from "./page/Final";
import ScrollToTop from "./components/Scroll";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
          <Routes>
            <Route path ="/" element={<Home/>} />
            <Route path ="/bill" element={<Bills/>} />
            <Route path ="/menu" element={<Menu/>} />
            <Route path ="/end" element={<Final/>} />
          </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
