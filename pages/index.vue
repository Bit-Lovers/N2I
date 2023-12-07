<script setup lang="ts">
let station1 = Upgrade("1", 0, 2)
let station2 = Upgrade("2", 0, 5)
let cookies = Cookies()

</script>

<template>
    <div>
        <Cookies/>
        <Upgrade/>
    </div>
</template>