import { If } from "./If";

export function UsuarioInfo(props) {
    const usuario = props.usuario || {};
    return (
        <div>
            <If test={usuario && usuario.nome}>
                <span>Olá {usuario.nome}, seja bem-vindo!</span>
            </If>

            <If test={!usuario || !usuario.nome}>
                <span>Olá queridão, seja bem-vindo!</span>
            </If>
        </div>
    );
}
