import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalContextProvider } from "./services/ContextState/GlobalContext.jsx";
import { store } from "../src/services/ReduxState/Store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalContextProvider>
          <App />
        </GlobalContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
