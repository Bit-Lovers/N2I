export type Object = {amount : number, price : number}

export const Tree = () => {
    let value = {amount : 0, price : 1}
    return useState<Object>("tree", () => value)
}

export const Cookies = () => {
    let value = {amount : 0}
    return useState<Object>("cookie", () => value)
}

export const addValue = (object : Object, value : number) => {
    object.amount += value
}