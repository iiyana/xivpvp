<script>
const num = ref(0)

setInterval(() => {
    num.value += 1
}, 1000)
</script>

<template>
    <div class="text-white">
        <AppHeader />
        <NuxtPage />
    </div>
</template>
