import MeuComponente from "./components/basicos/Primeiro";
import { ComProp } from "./components/basicos/ComProp";
import { Aleatorio } from "./components/basicos/Aleatorio";

export default function App() {
    return (
        //<div className="App">
        <>
            <Aleatorio min={1} max={100} />
            <MeuComponente></MeuComponente>
            <ComProp aluno="Pedro" materia="Matemática" nota={5.6}></ComProp>
        </>
        //</div>
    );
}
