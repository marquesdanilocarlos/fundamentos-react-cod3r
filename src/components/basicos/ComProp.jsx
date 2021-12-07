export function ComProp(props) {
    //Erro
    //props.nota = Math.ceil(props.nota);
    let { aluno, materia, nota } = props;
    const status = nota >= 7 ? "Aprovado" : "Reprovado";

    return (
        <div>
            <p>
                {aluno} tem nota {nota} em {materia} e está {status}
            </p>
        </div>
    );
}
