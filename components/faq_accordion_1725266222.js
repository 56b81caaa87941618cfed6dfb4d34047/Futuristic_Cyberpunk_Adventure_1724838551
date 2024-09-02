<template>
  <div>
    <section class="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 bg-white">
      <div class="space-y-3 text-center">
        <h1 class="text-4xl text-gray-800 font-semibold pt-10">Neon Queries</h1>
        <p class="text-gray-600 max-w-lg mx-auto text-lg">Unlock the secrets of the cyberpunk underground</p>
      </div>
      <div class="mt-14 max-w-2xl mx-auto">
        <div v-for="(item, index) in faqs" :key="index" class="space-y-5 mt-5 overflow-hidden border-b border-gray-200 hover:bg-gray-50 cursor-pointer" @click="toggleFaq(index)">
          <h4 class="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
            {{ item.q }}
            <!-- SVG adjustment depending on whether faq is selected -->
            <svg v-if="selectedFaq === index" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
          </h4>
          <div v-show="selectedFaq === index" style="overflow: hidden; transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;" :style="{ maxHeight: selectedFaq === index ? '1000px' : '0px', opacity: selectedFaq === index ? 1 : 0 }">
            <div class="px-4 py-6">
              <p class="text-gray-700 pb-4 max-w-full text-lg">{{ item.a }}</p>
            </div>
          </div>
          <br/><br/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FaqAccordion',
  data() {
    return {
      selectedFaq: null,
      faqs: [
        { q: "What's the recommended hardware for optimal gameplay?", a: "For the full immersive experience, we recommend a high-end GPU, at least 16GB RAM, and a neural-link compatible VR headset. But don't worry, street samurai - the game is optimized to run on most rigs from the last 5 years." },
        { q: "Can I customize my character's cybernetic enhancements?", a: "Absolutely! Our state-of-the-art character customization allows you to trick out your avatar with the latest in black market cyberware. From ocular implants to dermal armor, the choice is yours. Just remember, every enhancement comes with a price..." },
        { q: "Is there a multiplayer mode?", a: "You bet your last credit chip there is! Team up with other runners for high-stakes heists, or go head-to-head in our neon-drenched PvP arenas. The streets are waiting, and they're hungry for action." },
        { q: "How often will new content be released?", a: "We're jacked in and constantly uploading. Expect monthly patches with bug fixes and balance tweaks, and major content drops every quarter. New missions, gear, and even entire districts of the city are in the pipeline. Stay frosty, choombas." },
        { q: "Is there an in-game economy or trading system?", a: "Welcome to the black market, samurai. Our robust in-game economy lets you wheel and deal in everything from black ICE to military-grade chrome. Trade with NPCs or other players, but watch your back - in Night City, a deal can turn deadly in a heartbeat." }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.selectedFaq = this.selectedFaq === index ? null : index;
    }
  }
}
</script>

<style scoped>
/* Add any desired scoped CSS here */
</style>
