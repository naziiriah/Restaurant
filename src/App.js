import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./page/Home";
import "../src/Styles/index.css";
import Bills from "./page/Bills";
import Menu from "./page/Menu";
import Final from "./page/Final";
import ScrollToTop from "./components/Scroll";
import Table from "./page/Table";
import PayByCard from "./page/PayByCard";
import PayByTransfer from "./page/PayByTransfer";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
          <Routes>
            <Route path ="/" element={<Home/>} />
            <Route path ="/bill" element={<Bills/>} />
            <Route path ="/menu" element={<Menu/>} />
            <Route path ="/end" element={<Final/>} />
            <Route path ="/table" element={<Table/>} />
            <Route path ="/pay-with-card" element={<PayByCard/>} />
            <Route path ="/pay-by-transfer" element={<PayByTransfer/>} />
          </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
