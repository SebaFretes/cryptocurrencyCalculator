import { CryptoSearchForm } from "./components/CryptoSearchForm";

export const App = () => {
  return (
    <>
      <div className="container">
        <h1 className="app-title">Cotizador de <span>Criptomonedas</span></h1>

        <div className="content">
          <CryptoSearchForm />
        </div>
      </div>
    </>
  )
};