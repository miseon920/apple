import "./css/App.scss";
import Wrap from "./component/Wrap";
import Router from "./component/Router";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <Wrap>
      <Header />
      <Router />
      <Footer />
    </Wrap>
  );
}

export default App;
