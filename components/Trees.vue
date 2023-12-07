<script setup lang="ts">
let trees = Tree()
let cookies = Cookies()
</script>

<template>
    <div>
        <div class="Button noselect" @click="if (cookies.amount >= trees.price) {addValue(trees, 1); addValue(cookies, -trees.price)}">
            <h1>Arbres : {{ trees.amount }}</h1>
        </div> 
    </div>
</template>