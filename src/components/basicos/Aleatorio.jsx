export function Aleatorio(props) {
    const { min, max } = props;
    const randomNumber = Math.round(Math.random(min, max) * max);

    return <div>{randomNumber}</div>;
}
