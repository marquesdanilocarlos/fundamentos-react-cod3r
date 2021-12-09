import { Component } from "react";
import { Botoes } from "./Botoes";
import "./contador.css";
import { Display } from "./Display";
import { PassoForm } from "./PassoForm";

export class Contador extends Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passo || 1,
    };

    setPasso = (passo) => {
        this.setState({
            passo: passo,
        });
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
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes incrementar={this.incrementar} decrementar={this.decrementar} />
            </div>
        );
    }
}
