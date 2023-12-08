<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";

let station1 = Upgrade("1", 5, 2, 1)
let station2 = Upgrade("2", 0, 5, 2)
let station3 = Upgrade("3", 0, 10, 10)
let station4 = Upgrade("4", 0, 20, 50)
let station5 = Upgrade("5", 0, 50, 100)
let cookies = Cookies("current")
let ptsPerSec = 0;
let totalCookies = Cookies("total")
let steps = [0, 10, 200, 3000, 40000]
let state = {currentState : 1}
let filename = {name : "/Earth1.png"}

function checkadd(cookieamount:Object, station:Object) {
    if (cookieamount.amount >= station.price) {
        addValue(station, 1); addValue(cookieamount, -station.price)
        ptsPerSec = updatePtsPerSec(station1.amount, station2.amount, station3.amount, station4.amount, station5.amount)
        interval = buyUpgrade(interval, cookies, ptsPerSec)
    }
}

if (typeof window !== 'undefined') {
    var interval =  setInterval(() => {
    checkState(totalCookies.amount, state, steps, filename)
    periodicallyAddValue(cookies,ptsPerSec)
    periodicallyAddValue(totalCookies, ptsPerSec)
}, 1000)
}

function periodicallyAddValue(object: Object, value: number) {
    addValue(object, value);
}

function updatePtsPerSec(amount1 : number, amount2 : number, amount3 : number, amount4 : number, amount5 : number) {
    //console.log(amount1 + 2*amount2 + 10*amount3 + 50*amount4 + 100*amount5);
    return (amount1 + 2*amount2 + 10*amount3 + 50*amount4 + 100*amount5);
}

function checkState(value : number, state : State, list : number[], filename : File) {
    console.log(value)
    for (let i = 0; i < list.length; i++){
        if (value >= list[i]){
            state.currentState = i+1
            filename.name = "/Earth"+state.currentState+".png"
            var image = document.getElementById("planet")
            image.src = filename.name
        }
    }
    //console.log(filename.name)
}

function buyUpgrade(interval : Interval, object, object2 : Object, value: number){
    clearInterval(interval)
    var interval =  setInterval(() => {
        periodicallyAddValue(object,value)
        periodicallyAddValue(object2,value)
    }, 1000)
    return interval
}

</script>

<template>
    <ClientOnly>
    <div>
        <div class="Button noselect" @click="if (cookies.amount >= station1.price) {addValue(station1, 1); addValue(cookies, -station1.price); ptsPerSec = updatePtsPerSec(station1.amount, station2.amount, station3.amount, station4.amount, station5.amount); interval = buyUpgrade(interval, cookies, totalCookies, ptsPerSec)}">
            <img class="upgrade_icon" src="assets/button5.png">
            <h1>Arbres : {{ station1.amount }}</h1>
            <h1>${{ station1.price }}</h1>

        </div> 
        <div class="Button noselect" @click="if (cookies.amount >= station2.price) {addValue(station2, 1); addValue(cookies, -station2.price); ptsPerSec = updatePtsPerSec(station1.amount, station2.amount, station3.amount, station4.amount, station5.amount); interval = buyUpgrade(interval, cookies, totalCookies, ptsPerSec)}">
            <img class="upgrade_icon" src="assets/button1.png">
            <h1>Vélo : {{ station2.amount }}</h1>
            <h1>${{ station2.price }}</h1>
        </div>
        <div class="Button noselect" @click="if (cookies.amount >= station3.price) {addValue(station3, 1); addValue(cookies, -station3.price); ptsPerSec = updatePtsPerSec(station1.amount, station2.amount, station3.amount, station4.amount, station5.amount); interval = buyUpgrade(interval, cookies, totalCookies, ptsPerSec)}">
            <img class="upgrade_icon" src="assets/button2.png">
            <h1>Transports : {{ station3.amount }}</h1>
            <h1>${{ station3.price }}</h1>
        </div>
        <div class="Button noselect" @click="if (cookies.amount >= station4.price) {addValue(station4, 1); addValue(cookies, -station4.price); ptsPerSec = updatePtsPerSec(station1.amount, station2.amount, station3.amount, station4.amount, station5.amount); interval = buyUpgrade(interval, cookies, totalCookies, ptsPerSec)}">
            <img class="upgrade_icon" src="assets/button4.png">
            <h1>Panneaux solaires : {{ station4.amount }}</h1>
            <h1>${{ station4.price }}</h1>
        </div>
        <div class="Button noselect" @click="if (cookies.amount >= station5.price) {addValue(station5, 1); addValue(cookies, -station5.price); ptsPerSec = updatePtsPerSec(station1.amount, station2.amount, station3.amount, station4.amount, station5.amount); interval = buyUpgrade(interval, cookies, totalCookies, ptsPerSec)}">
            <img class="upgrade_icon" src="assets/button3.png">
            <h1>Zone protégée : {{ station5.amount }}</h1>
            <h1>${{ station5.price }}</h1>
        </div>
    </div>
    </ClientOnly>
</template>