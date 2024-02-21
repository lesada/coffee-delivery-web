import { ThemeProvider } from "styled-components";

import Routes from "./routes";
import theme from "./theme";
import GlobalStyle from "./theme/globals";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
