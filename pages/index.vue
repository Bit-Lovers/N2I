<script setup lang="ts">
let station1 = Upgrade("1", 0, 2)
let station2 = Upgrade("2", 0, 5)
let cookies = Cookies("current")
let totalCookies = Cookies("total")
let steps = [0, 10, 20, 30]
let state = {currentState : 1}
let filename = {name : "/obstacle1.png"}
</script>

<template>
    <div>
        <Cookies/>
        <Upgrade/>
    </div>
    <img id="planet" src="/obstacle1.png" alt="There was a problem">
</template>