import { IndiretaFilho } from "./IndiretaFilho";

export function IndiretaPai() {
    let dadosIniciais = { nome: "?", idade: 0, nerd: false };
    let { nome, idade, nerd } = dadosIniciais;

    function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
        nome = nomeParam;
        idade = idadeParam;
        nerd = nerdParam;
        console.log(nome, idade, nerd);
    }

    return (
        <div>
            <div>{nome}</div>
            <div>{idade}</div>
            <div>{nerd}</div>
            <IndiretaFilho quandoClicar={fornecerInformacoes} />
        </div>
    );
}
