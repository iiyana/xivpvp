<script setup>
// const use0Opacity = ref(true)
// this might break things idk hahahah
// onNuxtReady(() => use0Opacity.value = false)
</script>

<!--
                     Header
    ---------------------------------------------
                |               |
       NavLeft  |    Content    |   NavRight
                |               |
                | --------------|
                |    Footer     |
 -->
<!-- https://stackoverflow.com/questions/68138453/how-create-a-true-sticky-header-footer-using-tailwindcss-sticks-to-bottom-even -->
<template>
    <div class="text-white flex flex-col min-h-screen transition-opacity duration-500">
        <AppHeader />
        <div class="flex-grow flex flex-row justify-center md:items-center">
            <main>
                <NuxtPage />
            </main>
        </div>
        <AppFooter />
    </div>
</template>

<style>
    .opacity-0 {
        opacity: .1;
    }
</style>
