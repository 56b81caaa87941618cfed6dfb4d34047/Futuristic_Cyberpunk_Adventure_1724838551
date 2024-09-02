<template>
    <section id="hero-section" class="bg-white dark:bg-gray-900 flex-1">
        <div id="hero-container" class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <!-- Left section containing title and buttons -->
            <div id="hero-text-container" class="mr-auto place-self-center lg:col-span-7">
                <div id="hero-title-container-text" class="flex">
                    <h1 id="hero-title" class="flex-1 max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Enter the Neon-Drenched Dystopia</h1>
                </div>
                <div id="hero-subtitle-container" class="flex">
                    <p id="hero-subtitle" class="flex-1 max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Hack, Fight, and Survive in a Corporate-Controlled Future</p>
                </div>
                <div id="hero-buttons-container" class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <div id="hero-button-1-container" class="flex">
                        <a id="hero-button-1" href="https://github.com/themesberg/landwind" class="flex-1 items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Jack In</a>
                    </div>
                    <div id="hero-button-2-container" class="flex">
                        <a id="hero-button-2" href="https://www.figma.com/community/file/1125744163617429490" class="flex-1 items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Explore the Undercity</a>
                    </div>
                </div>
            </div>
            <!-- Right section containing image -->
            <div id="hero-image-container" class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img id="hero-image" src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Futuristic_Cyberpunk_Adventure_1724838551/main/images/45e05ae0311e4b8c89af9fda4066c2db.jpeg" alt="hero image">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "SimpleHeroComponent",
    data() {
        return {
            expanded: false,
            tab: null
        };
    }
};
</script>