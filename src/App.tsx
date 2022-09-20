import { Provider } from "react-redux";
import "./App.css";
import { Navbar } from "./components";
import { Home } from "./pages";
import store from "./redux/store";
import { LayoutContainer } from "./styled-components";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <LayoutContainer></LayoutContainer>
      <Home />
    </Provider>
  );
}

export default App;
