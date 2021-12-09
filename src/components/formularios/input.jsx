import { useState } from "react";

export function Input(props) {
    const [valor, setValor] = useState("inicial");
    return (
        <div>
            <h2>{valor}</h2>
            {/*Componente controlado lida com estado e deve utilizar a função de manipulação de estado para alterar o valor */}
            <input type="text" value={valor} onChange={(e) => setValor(e.target.value)} />
            {/* Componente que não lida com estado deve ser readonly */}
            <input type="text" value={valor} readOnly />
            {/**Componente não controlado deve possuir undefined como value */}
            <input type="text" value={undefined} />
        </div>
    );
}
