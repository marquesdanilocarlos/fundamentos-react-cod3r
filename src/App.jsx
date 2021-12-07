import MeuComponente from "./components/basicos/Primeiro";
import { ComProp } from "./components/basicos/ComProp";
import { Aleatorio } from "./components/basicos/Aleatorio";
import { Card } from "./components/Layout/Card";

export default function App() {
    return (
        //<div className="App">
        <>
            <Card titulo="#03 - Desafio de número Aleatório">
                <Aleatorio min={1} max={100} />
                <Aleatorio min={1} max={100} />
            </Card>

            <Card titulo="#02 - Componente com parâmetro">
                <ComProp
                    aluno="Pedro"
                    materia="Matemática"
                    nota={5.6}
                ></ComProp>
            </Card>

            <Card titulo="#01 - Primeiro Componente">
                <MeuComponente></MeuComponente>
            </Card>
        </>
        //</div>
    );
}
