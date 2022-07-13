import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
//import CantidadPokemon from "./components/cantidadPokemon";
//import ComprarPokemon from "./components/comprarPokemon";
import { Provider } from "react-redux"
import store from "./redux/store"
import CantidadPokeFuncion from "./components/CantidadPokeFuncion";
import ComprarPokeFuncion from "./components/ComprarPokeFuncion";
import BuscadorPokemon from "./components/buscador/BuscadorPokemon";
import ResultadoPokemon from "./components/buscador/ResultadoPokemon";

function App() {
  return (
    <Provider store={store}>
    <div className="App container">
      <div className="row">
        <div className="col-12">
          <div className="card mt-5" style={{ maxWidth: "365px" }}>
            <div className="row no-gutters">
              <div className="col-4">
                <img
                  src={require("./img/pokemon.jpg")}
                  alt="pokemon"
                  className="card-img"
                  style={{height: '145px', width: '120px'}}
                />
              </div>
              <div className="col-8">
                <div className="card-body">
                  <div className="card-title h3 text-center">
                    <CantidadPokeFuncion/>
                    
                  </div>
                  <ComprarPokeFuncion/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mt-4 border-top pt-3">
            <BuscadorPokemon/>
        </div>
        <div className="col-12">
            <ResultadoPokemon/>
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
