<script setup lang="ts">
let cookies = Cookies()
let trees = Tree()
</script>

<template>
    <div>
        <div class="Button noselect" @click="addValue(cookies, 1)">
            <h1>Cookies : {{ cookies.amount }}</h1>
        </div> 
    </div>
</template>