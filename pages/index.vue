<script setup lang="ts">
const counter = useState('counter', () => 0)
</script>

<template>
    <div>
        <div class="Button noselect" @click="counter++">
            <h1>CLICK</h1>
        </div>
        <p>{{ counter }}</p>
    </div>
</template>