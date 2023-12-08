<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";

let station1 = Upgrade("1", 5, 2)
let station2 = Upgrade("2", 0, 5)
let station3 = Upgrade("3", 0, 10)
let station4 = Upgrade("4", 0, 20)
let station5 = Upgrade("5", 0, 50)
let cookies = Cookies()
let ptsPerSec = 0;

function checkadd(cookieamount:Object, station:Object) {
    if (cookieamount.amount >= station.price) {addValue(station, 1); addValue(cookieamount, -station.price)}
}

var interval =  setInterval(() => {
    periodicallyAddValue(cookies,ptsPerSec)
}, 1000)

function periodicallyAddValue(object: Object, value: number) {
    addValue(object, value);
    console.log('Amount:', object.amount);
}

function updatePtsPerSec(amount1 : number, amount2 : number, amount3 : number, amount4 : number, amount5 : number) {
    console.log(amount1 + 2*amount2 + 10*amount3 + 50*amount4 + 100*amount5);
    return (amount1 + 2*amount2 + 10*amount3 + 50*amount4 + 100*amount5);
}

function buyUpgrade(interval : Interval, object : Object, value: number){
    clearInterval(interval)
    var interval =  setInterval(() => {
        periodicallyAddValue(object,value)
    }, 1000)
    return interval
}

</script>

<template>
    <div>
        <div class="Button noselect" @click="checkadd(cookies, station1)">
            <h1>Arbres : {{ station1.amount }}</h1>
        </div> 
        <div class="Button noselect" @click="checkadd(cookies, station2)">
            <h1>Vélo : {{ station2.amount }}</h1>
        </div>
        <div class="Button noselect" @click="checkadd(cookies, station3)">
            <h1>éolienne : {{ station3.amount }}</h1>
        </div>
        <div class="Button noselect" @click="checkadd(cookies, station4)">
            <h1>Panneaux solaires : {{ station4.amount }}</h1>
        </div>
        <div class="Button noselect" @click="checkadd(cookies, station5)">
            <h1>Zone protégée : {{ station5.amount }}</h1>
        </div>
    </div>
</template>