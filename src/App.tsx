/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ThemeProvider } from "@emotion/react";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

import { theme } from "./components/theme";
import i18n from "./lib/i18n";
import Routes from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* @ts-expect-error */}
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default App;
