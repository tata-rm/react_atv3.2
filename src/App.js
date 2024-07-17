import './App.css';
import Alternar from '../src/componentes/Alternar';
import { ProviderTema } from '../src/Context/useContext';

function App() {
  return (
    <ProviderTema>
      <div className="App">
        <Alternar />
      </div>
    </ProviderTema>
  );
}

export default App;

