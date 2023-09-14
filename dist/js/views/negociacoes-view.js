import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
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
                                <td>${this.formatDateToString(negociacao.data)}</td>
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
    formatDateToString(data) {
        return new Intl.DateTimeFormat().format(data);
    }
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}
