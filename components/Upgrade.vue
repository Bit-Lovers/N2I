<script setup lang="ts">
let station1 = Upgrade("1", 0, 2)
let station2 = Upgrade("2", 0, 5)
let cookies = Cookies()
function checkadd(cookieamount:Object, station:Object) {
    if (cookieamount.amount >= station.price) {addValue(station, 1); addValue(cookieamount, -station.price)}
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
    </div>
</template>