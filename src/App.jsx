import Footer from "./components/footer/footer";
import Nav from "./components/nav/nav";
import Climb from "./scenes/climb/climb";
import History from "./scenes/history/history";
import Home from "./scenes/home/home";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <History />
      <Climb />
      <Footer />
    </>
  );
}

export default App;
