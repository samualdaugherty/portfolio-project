<template>
  <main class="w-full max-w-[1600px] px-4 lg:px-8">
    <section class="w-full pt-16 sm:pt-24 z-10 pl-0">
      <!-- Title with responsive background text -->
      <div class="relative w-full -mb-4 z-10">
        <div
          class="absolute z-0 w-[110vw] select-none pointer-events-none left-0 -top-[10%] sm:top-[-5%] lg:top-[-5%] translate-x-[-5vw] font-alumni font-bold uppercase text-[clamp(6rem,14.5vw,14.5rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] opacity-25 leading-[0.72]"
          style="-webkit-text-stroke: 1px #F32929; -webkit-text-fill-color: transparent;"
        >
          The Case for AI in a Figma World
        </div>
        <h1
          class="font-alumni font-bold text-black dark:text-white relative z-10 text-[clamp(5rem,13vw,13rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] xl:mr-12"
          style="line-height: 72%;"
        >
          The Case for AI in a Figma World
        </h1>
      </div>

      <!-- Intro paragraph -->
      <div class="mt-12 relative z-10 ml-0 lg:ml-32 xl:ml-48 max-w-3xl">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          I have a coworker who continues to amaze me every week. We show up to design review, and they show a masterpiece in product thought and organization. They are a Figma expert. Pulling pieces from the design system, dropping them with pixel-perfect placement, and don’t even get me started about the notations and documentation. It’s honestly inspiring, and anyone who has ever worked with such a designer knows what I mean. I dream of this level of organization.
        </p>
      </div>

      <!-- Hero image (right-aligned) -->
      <div class="relative z-10 mt-12 max-w-[900px] ml-auto">
        <img
          src="/figma-world.png"
          alt="The Case for AI in a Figma World - Hero Image"
          class="-mr-4 lg:-mr-8 max-w-4xl w-full h-auto hero-drop-shadow"
        />
      </div>

      <!-- Paragraphs -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          And the next week, they’ll come back again with new iterations based on feedback. Same wonderful documentation, same mind-boggling levels of detail. Week, after week, after week.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          I don’t show up like that. I don’t present my screen and share my Figma designs, walk through my documentation, and explain every interaction and the context of the journey. I share my screen and present a <router-link to="/ai-lab/sorry-figma-im-coding-prototypes" class="text-accent font-semibold hover:underline">live, coded, working version of my idea</router-link>. I get feedback, and I make those changes in real time, and everyone sees those changes immediately.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          There’s no documentation or annotations required. No journey for context, because every single person in the review can open the link I shared and click through. Instead of seeing my journey fully curated in Figma, they can experience it in real time, like a real user.
        </p>
      </div>

      <!-- Figma is being replaced -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          Figma is Being Replaced
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          The reason my work looks and feels so different from my coworker's is that they’re designing how we all used to.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6 italic">
          Research &gt; Journey Map &gt; Ideate &gt; Design &gt; Feedback &gt; Design More &gt; Prototype &gt; Review &gt; Hand off to your engineer
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          It takes time. And each of those steps requires documentation, communication, and presents an opportunity for something to get lost in translation. And once it does finally come back from the engineer for QA, it’s going to be obvious what it was that got lost in the fray.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Figma is no longer the primary tool. AI is. As the Head of Design at Linear put it, <span class="italic">“We use Figma more as a sketch to build the final product in code.”</span>
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          That’s how I work, and it’s proved a powerful tool for creating good work and creating it fast.
        </p>
      </div>

      <!-- Blockquote -->
      <div class="w-full max-w-[1600px] mt-12 mb-12">
        <div class="content-stretch flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full">
          <p class="font-alumni font-bold text-[2rem] sm:text-[2.5rem] leading-[1.17] text-black dark:text-white section-shadow tracking-[-0.96px] flex-shrink">
            We use Figma more as a sketch to build the final product in code.
          </p>
          <div class="flex items-center justify-center flex-shrink-0 hidden sm:flex">
            <div class="h-px bg-black dark:bg-white w-[154px]"></div>
          </div>
          <p class="font-alumni font-bold text-[2rem] leading-[1.13] text-accent tracking-[-0.64px] flex-shrink-0 whitespace-nowrap">
            Quote
          </p>
        </div>
      </div>

      <!-- What was Figma -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-8">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          What Was Figma, Anyway?
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          Think about it this way: Figma isn’t where the design happens. It’s the tool I use to represent my vision. The design already exists in my mind; I can already picture it. What Figma allowed me to do was show that idea to other people in a tangible way.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Put simply, it’s an alternative to explaining my idea. But now, we can just explain our ideas. And the new listener has infinite patience to listen to us explain every tiny detail.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Because of this, I can create more than a visual representation of my idea, and in far less time. I can create a fully working prototype, or even a finished product, just by talking about my idea and explaining my vision for it.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          And instead of just nodding along, the new listener goes, “like this?” Then shows you what they understood you to mean. And you can explain what they got right, and what they got wrong. Within a handful of minutes, they fully understand your vision, and you can see it on the screen.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed font-semibold">
          The days of creating mockups are dead.
        </p>
      </div>

      <!-- Quote-style callout with fixed background text -->
      <div class="relative w-full mt-16 lg:mt-24 max-w-[1600px]">
        <div
          class="pointer-events-none select-none absolute left-0 right-0 top-[-4rem] md:top-[-6rem] opacity-25 font-alumni font-bold uppercase tracking-[-4px] text-[8rem] md:text-[10rem] text-center"
          style="-webkit-text-stroke: 1px #F32929; -webkit-text-fill-color: transparent;"
        >
          x=(t-y) / t
        </div>
        <div class="content-stretch flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full relative z-10">
          <p class="font-alumni font-bold text-[2rem] sm:text-[2.75rem] leading-[1.17] text-black dark:text-white section-shadow tracking-[-0.96px] flex-shrink">
            An 80% time savings to testing
          </p>
          <div class="flex items-center justify-center flex-shrink-0 hidden sm:flex">
            <div class="h-px bg-black dark:bg-white w-[154px]"></div>
          </div>
          <p class="font-alumni font-bold text-[2rem] leading-[1.13] text-black dark:text-white tracking-[-0.64px] flex-shrink-0 whitespace-nowrap">
            Fact
          </p>
        </div>
      </div>

      <!-- No variables -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          No Variables, No Poorly Named Layers
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          This is where, to me, a working prototype is better than a Figma mockup. In Figma, I’m designing every state of the element. I have to make a default, make an inactive, make a hover, make a focus, make an active, make a selected, and make an empty state. I’m exhausted just talking about it.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Think about creating a form in Figma. A basic form:
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed italic mb-6">
          Make an input component &gt; copy it &gt; make an active state &gt; copy it &gt; make a filled state &gt; copy it &gt; make a disabled state &gt; connect them all
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          I haven’t even set the variables yet, or made it a component, or a component group. And now I have to do that for radio buttons, selects, and submit buttons.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Making a form takes a <span class="italic">long time</span>. And you haven’t even made the rest of the page that it sits on.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          In Cursor, or Claude Code, or whatever you’re using, you can make a form in minutes. All of the states are there. You can actually type stuff in the inputs, and not just click it and make text magically appear that’s already perfectly filled.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          The time savings are enormous.
        </p>
      </div>

      <!-- Blockquote reversed -->
      <div class="w-full max-w-[1600px] mt-12 mb-12">
        <div class="content-stretch flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full sm:justify-end">
          <p class="font-alumni font-bold text-[2rem] leading-[1.13] text-accent tracking-[-0.64px] flex-shrink-0 whitespace-nowrap">
            Quote
          </p>
          <div class="flex items-center justify-center flex-shrink-0 hidden sm:flex">
            <div class="h-px bg-black dark:bg-white w-[154px]"></div>
          </div>
          <p class="font-alumni font-bold text-[2rem] sm:text-[2.5rem] leading-[1.17] text-black dark:text-white section-shadow tracking-[-0.96px] flex-shrink">
            In Cursor, you can create a fully functional form in minutes.
          </p>
        </div>
      </div>

      <!-- Figma isn't going away -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-8">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          Figma Isn’t Going Away
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          Before you freak out, I’m not saying we’re all giving up Figma. It still has a purpose, and I still use it all the time. I just use it differently now.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          It’s no longer the canvas for high-fidelity final designs. It’s my sketchbook. It’s where vague ideas find their direction.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          If I don’t have a vision to explain, I might need to sketch eight different ideas and see what starts to come together. I still build my color palette, typescale, and a smaller version of a design system there. It’s a great place to catalog ideas. I just don’t need to take them further than necessary once my vision forms.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          You’ll still need to know Figma, and you’ll still use it. The corporate overlords are not going to take away your favorite design tools. I promise.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Like all tools, the good ones allow us to work faster and more efficiently. They allow us to unleash our creativity and imagination, and bring ideas to life. Figma allowed us to communicate our designs effectively and made it easy to do so; it revolutionized the world of design for the web (or apps).
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          Now we have new tools, and they’ll revolutionize the way we work in many of the same ways. And those new tools are here. Those new ways of working are already taking shape. The time to start learning is now.
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
useSeoMeta({
  title: 'The Case for AI in a Figma World',
  description: 'I have a coworker who continues to amaze me every week. We show up to design review, and they show a masterpiece in product thought and organization. They are a Figma expert.',
  ogTitle: 'The Case for AI in a Figma World',
  ogDescription: 'I have a coworker who continues to amaze me every week. We show up to design review, and they show a masterpiece in product thought and organization. They are a Figma expert.',
  ogImage: 'https://sambuilt.it/figma-world.png',
  ogUrl: 'https://sambuilt.it/ai-lab/the-case-for-ai-in-a-figma-world',
  ogType: 'article',
  ogSiteName: 'Sam Daugherty Portfolio',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: 'The Case for AI in a Figma World',
  twitterDescription: 'I have a coworker who continues to amaze me every week. We show up to design review, and they show a masterpiece in product thought and organization. They are a Figma expert.',
  twitterImage: 'https://sambuilt.it/figma-world.png',
  twitterImageAlt: 'The Case for AI in a Figma World'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://sambuilt.it/ai-lab/the-case-for-ai-in-a-figma-world' }
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

.section-shadow {
  filter: drop-shadow(0px 1.956px 6.193px rgba(0,0,0,0.03))
          drop-shadow(0px 9.244px 24.207px rgba(0,0,0,0.04))
          drop-shadow(0px 24px 76px rgba(0,0,0,0.07));
}
</style>
