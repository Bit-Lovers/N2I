export type Object = {amount : number, price : number}
export type State = {currentState : number}
export type File = {name : String}
export type State = {currentState : number}
export type File = {name : String}

export const Upgrade = (id : String, initialAmount : number, value_price : number) => {
    let object = {amount : initialAmount, price : value_price}
    return useState<Object>(id, () => object)
}

export const Cookies = (id : String) => {
    let value = {amount : 0, name :id}
    return useState<Object>(id, () => value)
}

export const addValue = (object : Object, value : number) => {
    object.amount += value
}

export function periodicallyAddValue(object: Object, value: number, interval: number) {
    setInterval(() => {
        addValue(object, value);
        console.log('Amount:', object.amount);
    }, interval);
}

export const getSource = (state : number) => {
    let str = "/obstacle"+state+".png"
    console.log(str)
    return str
}

export const checkState = (amount : number, state : State, list : number[], filename : File) => {
    for (let i = 0; i < list.length; i++){
        if (amount >= list[i]){
            state.currentState = i+1
            filename.name = "/obstacle"+state.currentState+".png"
            var image = document.getElementById("planet")
            image.src = filename.name
        }
    }
}