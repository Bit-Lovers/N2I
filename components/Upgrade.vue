<script setup lang="ts">
let station1 = Upgrade("1", 0, 2)
let station2 = Upgrade("2", 0, 5)
let cookies = Cookies()
</script>

<template>
    <div>
        <div class="Button noselect" @click="if (cookies.amount >= station1.price) {addValue(station1, 1); addValue(cookies, -station1.price)}">
            <h1>Arbres : {{ station1.amount }}</h1>
        </div> 
        <div class="Button noselect" @click="if (cookies.amount >= station2.price) {addValue(station2, 1); addValue(cookies, -station2.price)}">
            <h1>Vélo : {{ station2.amount }}</h1>
        </div> 
    </div>
</template>