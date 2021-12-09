export function Botoes(props) {
    return (
        <div>
            <button onClick={props.incrementar}>+</button>
            <button onClick={props.decrementar}>-</button>
        </div>
    );
}
