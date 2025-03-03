// class CustomStore {
//     constructor(initialState) {
//         this.listeners = []
//         this.state = this.createProxy(initialState)
//     }
//
//     createProxy(initialState) {
//         return new Proxy(initialState, {
//             get(target: any, p: string | symbol, receiver: any): any {
//                 return p in target ? target[p] : undefined
//             },
//             set: (target: any, p: string | symbol, newValue: any, receiver: any): boolean => {
//                 if (target[p] === newValue) return true
//
//                 target[p] = newValue
//                 this.notify(p, newValue)
//                 return true
//             }
//         })
//     }
//
//     notify = (key, value) => {
//         this.listeners.forEach(listener => {
//             listener(key, value)
//         })
//
//     }
//     addListener = (listener) => {
//         if (typeof listener === 'function') {
//             this.listeners.push(listener)
//         }
//     }
//     getState = () => {
//         return this.state
//     }
// }
//
// export default CustomStore