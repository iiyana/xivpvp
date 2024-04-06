<script setup>
const pageList = ref([
    { num: '00', name: 'GAME MODES' },
    { num: '05', name: 'JOB GUIDES' },
    { num: '10', name: 'EVENTS' },
    { num: '20', name: 'CONTRIBUTE' },
])
</script>

<template>
    <div class="grid md:grid-rows-2 md:grid-flow-col md:gap-x-10 place-content-center ">
        <!-- logo -->
        <div class="order-1 md:row-span-1 pb-6 md:pb-0">
            <div class="font-logo text-6xl tracking-tighter pb-4">
                <span>XIV</span>
                <span class="text-primary">PVP</span>
            </div>
            <div class="text-secondary">
                The definitive PvP compendium for <br> Final Fantasy XIV
            </div>
        </div>
        <!-- learn more -->
        <div class="order-3 md:order-2 md:col-span-2 md:relative">
            <div class="md:absolute md:inset-x-0 md:bottom-0 text-sm">
                <div>
                    Learn more
                </div>
                <div class="text-secondary">
                    <NuxtLink to="/" class="pr-2 hover:text-white transition-all">
                        About
                    </NuxtLink>
                    <NuxtLink to="/" class="pr-2 hover:text-white transition-all">
                        Discord
                    </NuxtLink>
                    <NuxtLink to="/" class="pr-2 hover:text-white transition-all">
                        Github
                    </NuxtLink>
                </div>
            </div>
        </div>
        <!-- pages -->
        <div class="order-2 pb-6 md:order-3 md:row-span-2 md:pb-0">
            <div v-for="(page, index) in pageList" :key="page.id" :class="{ 'pb-9': (index !== pageList.length - 1) }">
                <NuxtLink to="/">
                    <span class="text-primary font-nums inline-block align-top tracking-tighter text-sm pr-1">
                        {{ page.num }}
                    </span>
                    <span class="font-outline-secondary tracking-tighter text-black text-4xl font-logo hover:font-outline-white transition-all">
                        {{ page.name }}
                    </span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
