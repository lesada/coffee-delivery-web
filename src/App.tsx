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
    </ThemeProvider>
  );
}

export default App;
