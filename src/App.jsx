import MeuComponente from "./components/basicos/Primeiro";
import { ComProp } from "./components/basicos/ComProp";
import { Aleatorio } from "./components/basicos/Aleatorio";
import { Card } from "./components/Layout/Card";
import "./styles/App.css";
import { Familia } from "./components/basicos/Familia";
import { MembroFamilia } from "./components/basicos/MembroFamilia";
import { ListaAlunos } from "./components/repeticao/ListaAlunos";
import { TabelaProdutos } from "./components/repeticao/TabelaProdutos";
import { ParOuImpar } from "./components/condicional/ParOuImpar";
import { UsuarioInfo } from "./components/condicional/UsuarioInfo";
import { DiretaPai } from "./components/comunicacao/DiretaPai";
import { IndiretaPai } from "./components/comunicacao/IndiretaPai";
import { Input } from "./components/formularios/input";
import { Contador } from "./components/contador/Contador";

export default function App() {
    return (
        <div className="App">
            <div className="cards">
                <Card titulo="#12 - Comunicação indireta" color="#d8238d">
                    <Contador numeroInicial={10} passo={5} />
                </Card>

                <Card titulo="#11 - Comunicação indireta" color="#23d89c">
                    <Input />
                </Card>

                <Card titulo="#10 - Comunicação indireta" color="#d82323">
                    <IndiretaPai />
                </Card>

                <Card titulo="#09 - Comunicação direta" color="#596235">
                    <DiretaPai />
                </Card>

                <Card titulo="#08 - Condicional" color="#9e00ad">
                    <UsuarioInfo usuario={{ nome: "Danilo" }} />
                    <UsuarioInfo />
                    <ParOuImpar numero={13} />
                </Card>

                <Card titulo="#06 - Repetição" color="#006699">
                    <TabelaProdutos />
                    <ListaAlunos />
                </Card>

                <Card titulo="#05 - Componente com filhos" color="#774699">
                    <Familia sobreNome="Gomes">
                        <MembroFamilia nome="Danilo"></MembroFamilia>
                        <MembroFamilia nome="Arlindo"></MembroFamilia>
                        <MembroFamilia nome="Juvenal"></MembroFamilia>
                    </Familia>
                </Card>

                <Card titulo="#03 - Desafio de número Aleatório" color="#7cb5e9">
                    <Aleatorio min={1} max={100} />
                    <Aleatorio min={1} max={100} />
                </Card>

                <Card titulo="#02 - Componente com parâmetro" color="#5fc189">
                    <ComProp aluno="Pedro" materia="Matemática" nota={5.6}></ComProp>
                </Card>

                <Card titulo="#01 - Primeiro Componente" color="#ea77af">
                    <MeuComponente></MeuComponente>
                </Card>
            </div>
        </div>
    );
}
