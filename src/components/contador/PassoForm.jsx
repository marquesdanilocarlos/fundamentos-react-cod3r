export function PassoForm(props) {
    return (
        <div>
            <label htmlFor="passo">Passo:</label>
            <input value={props.passo} type="number" onChange={(e) => props.setPasso(+e.target.value)} />
        </div>
    );
}
