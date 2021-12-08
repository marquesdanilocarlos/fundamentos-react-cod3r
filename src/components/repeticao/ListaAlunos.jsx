import { alunos } from "../../alunos";

export function ListaAlunos() {
    const listaAlunos = alunos.map((aluno) => (
        <li key={aluno.id}>
            {aluno.id}) {aluno.nome} = {aluno.nota}
        </li>
    ));

    return <ul style={{ listStyle: "none" }}>{listaAlunos}</ul>;
}
