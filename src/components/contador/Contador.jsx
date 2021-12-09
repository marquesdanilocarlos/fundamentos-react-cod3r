import { Component } from "react";
import "./contador.css";

export class Contador extends Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passo || 1,
    };

    incrementar = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    };

    decrementar = () => {
        const contadorZerado = this.state.numero === 0;
        this.setState({
            numero: contadorZerado ? 0 : this.state.numero - this.state.passo,
        });
    };

    render() {
        return (
            <div className="contador">
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <div>
                    <label htmlFor="passo">Passo:</label>
                    <input type="number" onChange={(e) => this.setState({ passo: +e.target.value })} />
                </div>
                <button onClick={this.incrementar}>+</button>
                <button onClick={this.decrementar}>-</button>
            </div>
        );
    }
}
