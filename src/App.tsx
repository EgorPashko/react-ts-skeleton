import { ThemeProvider } from "@emotion/react";
import { MobXProviderContext } from "mobx-react";
import { Suspense, useMemo } from "react";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

import { Loader } from "./components/Loader";
import { theme } from "./components/theme";
import i18n from "./lib/i18n";
import Routes from "./routes";
import { initializeStore } from "./stores/Store";

type Props = { storeLoader: ReturnType<typeof initializeStore> };

export const AppInner = ({ storeLoader }: Props) => {
  const stores = useMemo(() => ({ store: storeLoader() }), [storeLoader]);

  return (
    <MobXProviderContext.Provider value={stores}>
      <ThemeProvider theme={theme}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error */}
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </I18nextProvider>
      </ThemeProvider>
    </MobXProviderContext.Provider>
  );
};

const App = () => (
  <Suspense fallback={<Loader />}>
    <AppInner storeLoader={initializeStore()} />
  </Suspense>
);

export default App;
