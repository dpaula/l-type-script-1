export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function (
        target: any,  //
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        // target: referencia ao elemento que esta sendo decorado
        const metodoOriginal = descriptor.value;

        // onde args é um array com os parâmetros passados para o método decorado
        descriptor.value = function(...args: any[]) {

            let unidade = 'ms';
            let divisor = 1;
            if (emSegundos) {
                unidade = 'segundos';
                divisor = 1000;
            }

            console.log(`parâmetros passados para o método ${propertyKey}: ${JSON.stringify(args)}`);
            const t1 = performance.now();
            // onde this é a instância do objeto cujo método foi decorado
            // onde args é um array com os parâmetros passados para o método decorado
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`O retorno do método ${propertyKey} é ${JSON.stringify(retorno)}`);
            console.log(`O método ${propertyKey} demorou ${(t2 - t1)/divisor} ${unidade} para executar.`);
            retorno;
        }

        return descriptor;
    }

}