<!-- 
INSTRUCTION: Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
INSTRUCTION: It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
-->

<template>
  <section id="cta-section-container">
    <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6 bg-red-50">
      <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden">

        <!-- Radial gradient -->
        <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
          <div id="radial-gradient-outer" class="bg-red-500 absolute inset-0 translate-z-0 rounded-full blur-[120px] opacity-70"></div>
          <div id="radial-gradient-inner" class="absolute w-1/4 h-1/4 translate-z-0 rounded-full blur-[40px] bg-red-400"></div>
        </div>

        <!-- Blurred shape -->
        <div id="blurred-shape" class="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
            <defs>
              <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                <stop offset="0%" stop-color="#EF4444" />
                <stop offset="100%" stop-color="#DC2626" stop-opacity="0" />
              </linearGradient>
            </defs>
            <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
          </svg>
        </div>

        <!-- Content -->
        <div id="content" class="max-w-3xl mx-auto text-center">
          <div id="content-subtitle" class="flex">
            <div id="content-subtitle-text" class="flex-1 font-medium bg-clip-text pb-3 text-transparent bg-gradient-to-r from-red-500 to-red-200">
              Best game from all time: Cybernetic Upgrades. Ruthless Corporations. Endless Possibilities.
            </div>
          </div>
          <div class="flex" id="content-title-container">
            <h2 id="content-title" class="flex-1 h2 bg-clip-text pb-4 bg-gradient-to-r from-red-200/60 via-red-200 to-red-200/60 animate-pulse">
              Enter the Neon-Drenched Future
            </h2>
          </div>
          <div class="flex" id="content-body-container">
            <p id="content-body" class="flex-1 text-lg mb-8 text-red-300 animate-fade-in">
              Dive into a gritty, high-tech world where cyber-enhanced humans fight for survival in a corporate-controlled dystopia. Hack, shoot, and augment your way through neon-lit streets and towering megastructures.
            </p>
          </div>
          <a id="content-cta-button" href="#0" class="btn transition duration-150 ease-in-out group text-white bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-500 hover:via-red-400 hover:to-red-500 shadow-lg hover:shadow-xl transform hover:scale-105">
            Get Started
            <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-red-200">-&gt;</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PurpleBackgroundCtaComponent",
  data() {
    return {
      expanded: false,
      tab: null
    };
  }
};
</script>

<style scoped>
@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.animate-fade-in {
  animation: fade-in 1.5s ease-in-out;
}
</style>
