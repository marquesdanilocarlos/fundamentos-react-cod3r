import { Membro } from "./MembroFamilia";

export function Familia(props) {
    return (
        <div>
            <Membro nome="Danilo" {...props}></Membro>
            <Membro nome="Arlindo" sobreNome={props.sobreNome}></Membro>
            <Membro nome="Juvenal" sobreNome="Ferreira"></Membro>
        </div>
    );
}
