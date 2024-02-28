import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";

import { CartContextProvider } from "./contexts/cart";
import Routes from "./routes";
import theme from "./theme";
import GlobalStyle from "./theme/globals";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>
        <Routes />
      </CartContextProvider>
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
