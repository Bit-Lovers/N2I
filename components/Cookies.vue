<script setup lang="ts">
let station1 = Upgrade("1", 0, 2)
let station2 = Upgrade("2", 0, 5)
let cookies = Cookies()
</script>

<template>
    <div>
        <div class="Button noselect" @click="addValue(cookies, 1)">
            <h1>Cookies : {{ cookies.amount }}</h1>
        </div> 
    </div>
</template>