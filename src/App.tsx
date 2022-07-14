import { I18nextProvider } from "react-i18next";
import { HashRouter } from "react-router-dom";

import i18n from "./lib/i18n";
import Routes from "./routes";

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <HashRouter>
        <Routes />
      </HashRouter>
    </I18nextProvider>
  );
};

export default App;
