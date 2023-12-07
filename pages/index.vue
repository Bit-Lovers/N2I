<script setup lang="ts">
const counter = useState('count', () => 0)
</script>

<template>
    <div>
        <div label="Button" @click="counter++">
            <h1>CLICK</h1>
        </div>
        <p>{{ counter }}</p>
    </div>
</template>