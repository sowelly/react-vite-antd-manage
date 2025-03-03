class CustomStore<T extends object> {
    private listeners: Array<(key: any, value: any) => void> = [];
    public state: T;

    constructor(initialState: T) {
        this.listeners = []
        this.state = this.createProxy(initialState)
    }

    private createProxy(initialState: T) : T{
        return new Proxy(initialState, {
            get(target: any, p: string | symbol): any {
                return p in target ? target[p] : undefined
            },
            set: (target: any, p: string | symbol, newValue: any): boolean => {
                if (target[p] === newValue) return true

                target[p] = newValue
                this.notify(p, newValue)
                return true
            }
        })
    }

    notify = (key, value) => {
        this.listeners.forEach(listener => {
            listener(key, value)
        })

    }
    addListener = (listener: (key: any, value: any) => void): void => {
        if (typeof listener === 'function') {
            this.listeners.push(listener)
        }
    }
    getState = (): T => {
        return this.state
    }
}

export default CustomStore