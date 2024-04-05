<script>

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

<template>
    <div class="text-white">
        <AppHeader :num="Math.random()" />
        <NuxtPage />
        <AppFooter />
    </div>
</template>
