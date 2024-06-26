export class Armazenador {
    constructor() { }
    static salvar(key, value) {
        const valorComoString = JSON.stringify(value);
        localStorage.setItem(key, valorComoString);
    }
    static obter(key, revive) {
        const valor = localStorage.getItem(key);
        if (valor === null) {
            return null;
        }
        if (revive) {
            return JSON.parse(valor, revive);
        }
        return JSON.parse(valor);
    }
}
