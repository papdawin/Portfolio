import React from 'react'
import ReactDOM from 'react-dom/client'
import "./i18n";
import MainPage from "./assets/mainPage.tsx";
import "./main.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <MainPage />
  </React.StrictMode>,
)
