import { useEffect, useState } from "react";

export function Mega(props) {
    const [numeros, setNumeros] = useState([]);
    const [qteNumeros, setQteNumeros] = useState(props.quantidadeNumeros || 6);
    const valorMax = 60;

    function criaNumeros() {
        let numerosGerados = [];
        for (let total = 0; total < qteNumeros; total++) {
            let numero = Math.round(Math.random() * valorMax);

            if (numerosGerados.find((element) => element === numero)) {
                total--;
                continue;
            }

            numerosGerados.push(numero);
        }
        return numerosGerados.sort((n1, n2) => n1 - n2);
    }

    function setarNumeros() {
        setNumeros([...criaNumeros()]);
    }

    useEffect(() => {
        setarNumeros();
    }, []);

    return (
        <div>
            {numeros.map((numero) => `${numero} `)}
            <br />
            <input type="number" value={qteNumeros} onChange={(e) => setQteNumeros(e.target.value)} />
            <br />
            <button onClick={setarNumeros}>Gerar</button>
        </div>
    );
}
