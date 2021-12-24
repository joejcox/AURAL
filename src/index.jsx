import React from "react"
import ReactDOM from "react-dom"
import App from "app/App"
import "index.css"
import { BrowserRouter } from "react-router-dom"
import { store } from "app/store"
import { Provider } from "react-redux"
import { HelmetProvider } from "react-helmet-async"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
