import { produtos } from "../../produtos";
export function TabelaProdutos() {
    return (
        <table border="1">
            <thead>
                <th>id</th>
                <th>Nome</th>
                <th>Preço</th>
            </thead>
            <tbody>
                {produtos.map((produto) => (
                    <tr key={produto.id}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>{produto.preco}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
