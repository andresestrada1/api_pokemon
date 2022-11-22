
import './App.css';
import Pokemones from './componentes/Pokemones';
import PokemonesAxios from './componentes/PokemonesAxios';

function App() {
  return (
    <div className="App">
      {/* <Pokemones /> */}
      <PokemonesAxios/>
    </div>
  );
}

export default App;
