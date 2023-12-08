<script setup lang="ts">
let station1 = Upgrade("1", 0, 2)
let station2 = Upgrade("2", 0, 5)
let cookies = Cookies("current")
let totalCookies = Cookies("total")
let steps = [0, 10, 20, 30]
let state = 1
</script>

<template>
    <div>
        <Cookies/>
        <Upgrade/>
    </div>
    <div>
        <img :src = getSource(state) alt = "there was a problem"/>
    </div>
</template>