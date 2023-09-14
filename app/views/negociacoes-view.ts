import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

    template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
                </thead>
                
                <tbody>

                ${model.lista().map(negociacao => {
                    return `
                            <tr>
                            <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                            </tr>
                        `;
                }).join('')}

                </tbody>
            </table>
            `;
    }

    update(model: Negociacoes): void {
        const template = this.template(model);
        console.log(template);

        this.elemento.innerHTML = template;
    }
}