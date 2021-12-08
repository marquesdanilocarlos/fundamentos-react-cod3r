export function IndiretaFilho(props) {
    function geraIdade() {
        return Math.round(Math.random() * 80);
    }

    function geraNerd() {
        return Math.round(Math.random()) > 0.5 ? true : false;
    }
    return (
        <>
            <div>Filho</div>
            <button onClick={(e) => props.quandoClicar("Joao", geraIdade(), geraNerd())}>Fornecer informações</button>
        </>
    );
}
