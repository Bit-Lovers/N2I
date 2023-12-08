export type Object = {amount : number, price : number}

export const Upgrade = (id : String, initialAmount : number, value_price : number) => {
    let object = {amount : initialAmount, price : value_price}
    return useState<Object>(id, () => object)
}

export const Cookies = () => {
    let value = {amount : 0}
    return useState<Object>("cookie", () => value)
}

export const addValue = (object : Object, value : number) => {
    object.amount += value
}