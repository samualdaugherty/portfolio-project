<template>
  <main class="w-full max-w-[1600px] px-4 lg:px-8">
    <section class="w-full pt-16 sm:pt-24 z-10 pl-0">
      <!-- Title with responsive background text -->
      <div class="relative w-full -mb-4 z-10">
        <div
          class="absolute z-0 w-[110vw] select-none pointer-events-none left-0 -top-[10%] sm:top-[-5%] lg:top-[-5%] translate-x-[-5vw] font-alumni font-bold uppercase text-[clamp(6rem,14.5vw,14.5rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] opacity-25 leading-[0.72]"
          style="-webkit-text-stroke: 1px #F32929; -webkit-text-fill-color: transparent;"
        >
          The Perfect Handoff
        </div>
        <h1
          class="font-alumni font-bold text-black dark:text-white relative z-10 text-[clamp(5rem,13vw,13rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] xl:mr-12"
          style="line-height: 72%;"
        >
          The Perfect Handoff
        </h1>
      </div>

      <!-- Intro paragraph -->
      <div class="mt-12 relative z-10 ml-0 lg:ml-32 xl:ml-48 max-w-3xl">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          While working on a new feature, I designed a net-new component for our site. Could I use Cursor to build it myself, ready to integrate directly into our corporate codebase? There was only one way to find out: bother my engineer with a lot of questions.
        </p>
      </div>

      <!-- Hero image (right-aligned) -->
      <div class="relative z-10 mt-12 max-w-[900px] ml-auto">
        <img
          src="/perfect-handoff.png"
          alt="The Perfect Handoff - Hero Image"
          class="-mr-4 lg:-mr-8 max-w-4xl w-full h-auto hero-drop-shadow"
        />
      </div>

      <!-- First content block -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12 relative">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          One thing I quickly realized was that “we use Vue” really wasn’t enough to know where to start. So, I messaged Alex and got some information to start. What frameworks do we use? What version of Vue? What icon set do we use? Normally, we’d have those in a design system, but at this point, our design system was abandoned, partially transferred to something else, and then given up on entirely (a story for another day).
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          I should warn you here, this story doesn’t have an epiphany at the end. Did it work? Yes. Was it worth it? Probably not. But that wasn’t the point. The point was learning how well the Figma MCP worked. I had just gotten beta access to it and was keen to try it out.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          With all the framework requirements lined up and my Figma MCP connected, I wrote my planning prompt. 30 minutes later, I had a fully finished component. I showed it to my engineer, got some feedback, applied it, and two prompts later, had something I could actually merge with the codebase.
        </p>

        <!-- Decorative Pause -->
        <div class="absolute -left-12 top-40 opacity-25 pointer-events-none">
          <span
            class="font-alumni font-bold text-[clamp(5rem,10vw,8rem)] leading-[0.75] section-shadow"
            style="-webkit-text-stroke: 1px #F32929; -webkit-text-fill-color: transparent;"
          >
            Pause
          </span>
        </div>
      </div>

      <!-- Component screenshot -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-8">
        <img
          src="/promo-restriction.png"
          alt="Promo Restriction component screenshot"
          class="w-full h-auto promo-shadow rounded-md"
        />
      </div>

      <!-- What did I learn -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          What Did I Learn?
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          First, what took me 45 minutes probably would have taken my engineer about 20. It was not, after all, an in-depth component. So, vibe coding it for him didn’t really save anyone time. But it did save him from having to do it at all. He could focus on larger, more complex matters. Things that vibe coding isn’t going to solve.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Cursor was as good as a Junior Dev would have been. Good enough to make simple stuff work, a bit slow, but it succeeded in the end. What that says about the future state of junior dev roles is probably not a good thing.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          I also learned that, with the right knowledge and some strict rulesets for Cursor, a non-engineer could build something production-ready. And I did. The component on our site is the one I made. My design, fed into Cursor, submitted for approval, and merged. I don’t really care how small or simple the project was; I felt proud of my work!
        </p>
      </div>

      <!-- Participation Trophy -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          Figma for the… Participation Trophy
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          I also learned that the Figma MCP isn’t the silver bullet I hoped for. In the demo, it looked like it could produce magic with just a couple of clicks, but it missed a lot. Despite a finished design, access to Figma’s Dev Mode output, and a robust token system for colors and fonts, its initial build wasn’t great. Spacing was all wrong, fonts and icons were the wrong size, and even the corner radius was different. But it was also easy to fix without having to manually touch the code. So, a solid effort, but not the magic potion I was looking for.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          That said, I continue to use the MCP almost daily. And, with the right setup, the right rules, and the right prompting, it’s becoming more accurate. And what we started with this project turned into a completely new workflow for our Product Team. So was it a success? I guess so.
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
useSeoMeta({
  title: 'The Perfect Handoff',
  description: 'While working on a new feature, I designed a net-new component for our site. Could I use Cursor to build it myself, ready to integrate directly into our corporate codebase?',
  ogTitle: 'The Perfect Handoff',
  ogDescription: 'While working on a new feature, I designed a net-new component for our site. Could I use Cursor to build it myself, ready to integrate directly into our corporate codebase?',
  ogImage: 'https://sambuilt.it/perfect-handoff.png',
  ogUrl: 'https://sambuilt.it/ai-lab/the-perfect-handoff',
  ogType: 'article',
  ogSiteName: 'Sam Daugherty Portfolio',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: 'The Perfect Handoff',
  twitterDescription: 'While working on a new feature, I designed a net-new component for our site. Could I use Cursor to build it myself, ready to integrate directly into our corporate codebase?',
  twitterImage: 'https://sambuilt.it/perfect-handoff.png',
  twitterImageAlt: 'The Perfect Handoff'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://sambuilt.it/ai-lab/the-perfect-handoff' }
  ]
})
</script>

<style scoped>
.hero-drop-shadow {
  filter: drop-shadow(15.999px 32.249px 75px rgba(0,0,0,0.15))
          drop-shadow(10.37px 20.902px 43.924px rgba(0,0,0,0.11))
          drop-shadow(6.163px 12.422px 23.889px rgba(0,0,0,0.09))
          drop-shadow(3.2px 6.45px 12.188px rgba(0,0,0,0.08))
          drop-shadow(1.304px 2.628px 6.111px rgba(0,0,0,0.06))
          drop-shadow(0.296px 0.597px 2.951px rgba(0,0,0,0.04));
}

.promo-shadow {
  filter: drop-shadow(0px 1.998px 6.327px rgba(0,0,0,0.03))
          drop-shadow(0px 9.445px 24.732px rgba(0,0,0,0.04))
          drop-shadow(0px 24.52px 77.646px rgba(0,0,0,0.07));
}

.section-shadow {
  filter: drop-shadow(0px 1.956px 6.193px rgba(0,0,0,0.03))
          drop-shadow(0px 9.244px 24.207px rgba(0,0,0,0.04))
          drop-shadow(0px 24px 76px rgba(0,0,0,0.07));
}
</style>
