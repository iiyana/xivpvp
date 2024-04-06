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
<!-- https://stackoverflow.com/questions/68138453/how-create-a-true-sticky-header-footer-using-tailwindcss-sticks-to-bottom-even -->
<template>
    <div class="text-white flex flex-col min-h-screen">
        <AppHeader />
        <div class="flex-grow flex flex-row justify-center items-center">
            <main>
                <NuxtPage />
            </main>
        </div>
        <AppFooter />
    </div>
</template>
