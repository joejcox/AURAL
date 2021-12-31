import React from "react"
import ReactDOM from "react-dom"
import App from "app/App"
import "index.css"
import { BrowserRouter } from "react-router-dom"
import { store, persistor } from "app/store"
import { Provider } from "react-redux"
import { HelmetProvider } from "react-helmet-async"
import { PersistGate } from "redux-persist/integration/react"
import CartPreviewContextProvider from "context/CartPreviewContext"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <Provider store={store}>
          <CartPreviewContextProvider>
            <PersistGate loading={null} persistor={persistor}>
              <App />
            </PersistGate>
          </CartPreviewContextProvider>
        </Provider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
