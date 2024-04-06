<script setup>
const pageList = ref([
    { num: '00', name: 'GAME MODES' },
    { num: '05', name: 'JOB GUIDES' },
    { num: '10', name: 'EVENTS' },
    { num: '20', name: 'CONTRIBUTE' },

])
</script>

<template>
    <div class="grid md:grid-rows-2 md:grid-flow-col md:gap-4 place-content-center ">
        <!-- logo -->
        <div class="order-1 md:row-span-1">
            <div class="font-logo text-6xl tracking-tighter">
                <span>XIV</span>
                <span class="text-primary">PVP</span>
            </div>
            <div class="text-secondary">
                The definitive PvP compendium for <br> Final Fantasy XIV
            </div>
        </div>
        <!-- learn more -->
        <div class="order-3 md:order-2 md:col-span-2 md:relative">
            <div class="md:absolute md:inset-x-0 md:bottom-0">
                <div>
                    Learn more
                </div>
                <div class="text-secondary">
                    About Discord Github
                </div>
            </div>
        </div>
        <!-- pages -->
        <div class="order-2 md:order-3 md:row-span-2">
            <div v-for="(page, index) in pageList" :key="page.id" :class="{ 'pb-8': (index !== pageList.length - 1) }">
                <span class="text-primary font-nums inline-block align-top">
                    {{ page.num }}
                </span>
                <span class="font-outline-secondary tracking-tighter text-black text-4xl font-logo hover:font-outline-white transition-all">
                    {{ page.name }}
                </span>
            </div>
        </div>
    </div>
</template>
