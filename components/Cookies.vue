<script setup lang="ts">
let station1 = Upgrade("1", 0, 2)
let station2 = Upgrade("2", 0, 5)
let station3 = Upgrade("3", 0, 10)
let station4 = Upgrade("4", 0, 20)
let station5 = Upgrade("5", 0, 50)
let cookies = Cookies("current")
let totalCookies = Cookies("total")
let steps = [0, 10, 20, 30]
let state = {currentState : 1}
let filename = {name : "/obstacle1.png"}
</script>

<template>
    <div>
        <div class="Button noselect" @click="addValue(cookies, 1); addValue(totalCookies, 1)">
            <h1>Cookies : {{ cookies.amount }}</h1>
        </div> 
        <div class="Button noselect">
            <h1>Total Cookies earned : {{ totalCookies.amount }}</h1>
        </div>
    </div>
</template>