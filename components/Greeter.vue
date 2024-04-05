<script setup>
const pageList = ref([
    { num: '00', name: 'GAME MODES' },
    { num: '05', name: 'JOB GUIDES' },
    { num: '10', name: 'EVENTS' },
    { num: '20', name: 'CONTRIBUTE' },
])
</script>

<template>
    <div class="px-8 py-8 grid md:grid-cols-2">
        <!-- logo -->
        <div class="order-1 inline-block">
            <div class="font-logo text-6xl tracking-tighter">
                <span>XIV</span>
                <span class="text-primary">PVP</span>
            </div>
            <div class="text-secondary">
                The definitive PvP compendium for <br> Final Fantasy XIV
            </div>
        </div>
        <!-- learn more -->
        <div class="order-3">
            <div>
                Learn more
            </div>
            <div>
                About Discord Github
            </div>
            <NuxtLink to="/greeter2">
                About
            </NuxtLink>
        </div>
        <!-- pages -->
        <div class="order-2 md:row-span-2">
            <div v-for="page in pageList" :key="page.id">
                <span class="text-primary font-nums">
                    {{ page.num }}
                </span>
                <span class="font-outline-secondary tracking-tighter text-black text-4xl font-logo hover:font-outline-white transition-all">
                    {{ page.name }}
                </span>
            </div>
        </div>
    </div>
</template>
