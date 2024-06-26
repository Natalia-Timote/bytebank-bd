export class Armazenador {
    private constructor() {}

    static salvar(key: string, value: any): void {
        const valorComoString = JSON.stringify(value);
        localStorage.setItem(key, valorComoString);
    }

    static obter<T>(key: string, revive?: (this: any, key: string, value: any) => any): T | null {
        const valor = localStorage.getItem(key);

        if(valor === null) {
            return null;
        }

        if(revive) {
            return JSON.parse(valor, revive) as T;
        }

        return JSON.parse(valor) as T;
    }
    
}