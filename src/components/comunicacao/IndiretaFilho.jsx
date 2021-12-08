export function IndiretaFilho(props) {
    return (
        <>
            <div>Filho</div>
            <button onClick={(e) => props.quandoClicar("Joao", 53, true)}>Fornecer informações</button>
        </>
    );
}
