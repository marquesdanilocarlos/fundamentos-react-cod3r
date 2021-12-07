import MeuComponente from "./components/basicos/Primeiro";
import { ComProp } from "./components/basicos/ComProp";

function App() {
    return (
        <div className="App">
            <MeuComponente></MeuComponente>
            <ComProp aluno="Pedro" materia="Matemática" nota={5.6}></ComProp>
        </div>
    );
}

export default App;
