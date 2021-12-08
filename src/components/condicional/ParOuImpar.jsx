export function ParOuImpar(props) {
    return (
        <div>
            {props.numero % 2 === 0 ? <span>Par</span> : <span>Impar</span>}
        </div>
    );
}
