export type Object = {amount : number, price : number}

export const Upgrade = (id : String, initialAmount : number, value_price : number) => {
    let object = {amount : initialAmount, price : value_price}
    return useState<Object>(id, () => object)
}

export const Cookies = (id : String) => {
    let value = {amount : 0, name : id}
    return useState<Object>(id, () => value)
}

export const addValue = (object : Object, value : number) => {
    object.amount += value
}

export const getSource = (state : number) => {
    return "/assets/obstacle"+state+".png"
}