import MeuComponente from "./components/basicos/Primeiro";
import { ComProp } from "./components/basicos/ComProp";
import { Aleatorio } from "./components/basicos/Aleatorio";
import { Card } from "./components/Layout/Card";
import "./styles/App.css";
import { Familia } from "./components/basicos/Familia";
import { MembroFamilia } from "./components/basicos/MembroFamilia";

export default function App() {
    return (
        <div className="App">
            <div className="cards">
                <Card titulo="#05 - Componente com filhos" color="#774699">
                    <Familia sobreNome="Gomes">
                        <MembroFamilia nome="Danilo"></MembroFamilia>
                        <MembroFamilia nome="Arlindo"></MembroFamilia>
                        <MembroFamilia nome="Juvenal"></MembroFamilia>
                    </Familia>
                </Card>

                <Card
                    titulo="#03 - Desafio de número Aleatório"
                    color="#7cb5e9"
                >
                    <Aleatorio min={1} max={100} />
                    <Aleatorio min={1} max={100} />
                </Card>

                <Card titulo="#02 - Componente com parâmetro" color="#5fc189">
                    <ComProp
                        aluno="Pedro"
                        materia="Matemática"
                        nota={5.6}
                    ></ComProp>
                </Card>

                <Card titulo="#01 - Primeiro Componente" color="#ea77af">
                    <MeuComponente></MeuComponente>
                </Card>
            </div>
        </div>
    );
}
