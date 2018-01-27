import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppContainer } from "react-hot-loader";
import registerServiceWorker from "./registerServiceWorker";

import App from "./App";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById("root"),
  );
};

registerServiceWorker();

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./App", () => {
    render(App);
  });
}
