import Footer from "components/Footer";
import Navbar from "components/NavBar";
import Lista from "pages/Lista-Pedidos";
import Login from "pages/Login";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lista" element={<Lista /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
