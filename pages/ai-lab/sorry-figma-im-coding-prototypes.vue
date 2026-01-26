<template>
  <main class="w-full max-w-[1600px] px-4 lg:px-8">
    <section class="w-full pt-16 sm:pt-24 z-10 pl-0">
      <!-- Title with responsive background text -->
      <div class="relative w-full -mb-4 z-10">
        <div
          class="absolute z-0 w-[110vw] select-none pointer-events-none left-0 -top-[10%] sm:top-[-5%] lg:top-[-5%] translate-x-[-5vw] font-alumni font-bold uppercase text-[clamp(6rem,14.5vw,14.5rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] opacity-25 leading-[0.72]"
          style="-webkit-text-stroke: 1px #F32929; -webkit-text-fill-color: transparent;"
        >
          Sorry, Figma! I’m Coding Prototypes
        </div>
        <h1
          class="font-alumni font-bold text-black dark:text-white relative z-10 text-[clamp(5rem,13vw,13rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] xl:mr-12"
          style="line-height: 72%;"
        >
          Sorry, Figma! I’m Coding Prototypes
        </h1>
      </div>

      <!-- Intro paragraph -->
      <div class="mt-12 relative z-10 ml-0 lg:ml-32 xl:ml-48 max-w-3xl">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          I used to pride myself on my Figma prototypes. Dragging arrows around and creating a mass of digital spiderwebs, screens, and interactions. I felt like a magician! But, damned if that didn’t take a lot of time. Entire weeks were spent turning the design into something we could actually test with users. Now, I can do it in a couple of hours. And I never have to touch Figma to do it.
        </p>
      </div>

      <!-- Hero image (right-aligned) -->
      <div class="relative z-10 mt-12 max-w-[900px] ml-auto">
        <img
          src="/eat-sleep-code.png"
          alt="Sorry, Figma! I’m Coding Prototypes - Hero Image"
          class="-mr-4 lg:-mr-8 max-w-4xl w-full h-auto hero-drop-shadow"
        />
      </div>

      <!-- First content block -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          The first time I did this was an endeavor unrelated to my design work. We had been using AI for most of the year at this point, but always to do simple things—analyzing data, summarizing meeting transcripts. (I used that em dash, damn it! That’s not AI! But that isn’t the revolutionary type of work that Leadership was hoping for.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          They tasked us, “AI Champions,” to push the boundaries a bit. Not to figure out how to speed up the work we do, but to change it completely. With these tools in place and creative minds working with them, could we develop entirely new processes? Flip our workflow on its head and do things differently. But also better. Faster. More efficient.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          I’m like Robocop, but with comfy clothes instead of armor.
        </p>
      </div>

      <!-- Blockquote (full width) -->
      <div class="w-full max-w-[1600px] mt-12 mb-12">
        <div class="content-stretch flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full">
          <p class="font-alumni font-bold text-[2rem] sm:text-[2.5rem] leading-[1.17] text-black dark:text-white section-shadow tracking-[-0.96px] flex-shrink">
            I’m like Robocop, but with comfy clothes instead of armor
          </p>
          <div class="flex items-center justify-center flex-shrink-0 hidden sm:flex">
            <div class="h-px bg-black dark:bg-white w-[154px]"></div>
          </div>
          <p class="font-alumni font-bold text-[2rem] leading-[1.13] text-accent tracking-[-0.64px] flex-shrink-0 whitespace-nowrap">
            Not True
          </p>
        </div>
      </div>

      <!-- A new process -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-8">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          A new process
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          I was in the beginning stages of an entirely new user journey for onsite promotions when the idea came to me. I had just wrapped up my journey maps, identifying happy paths, unhappy paths, and edge cases. At this point, I would have started crafting wireframes.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Instead, I turned to Cursor. Well, first, ChatGPT. Cursor didn’t have planning mode yet. I fed it my journeys, put it in thinking mode, and explained the rough idea I had about what this flow might look like. And then I had it write me a project kickoff prompt in markdown.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          I dropped it in the local repo folder, opened it in Cursor, and said, “Here you go!”
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          What happened next changed the way I work forever.
        </p>
      </div>

      <!-- Full width image -->
      <div class="w-full max-w-[1600px] mt-12">
        <img
          src="/journey-to-code.png"
          alt="Journey to code screenshot"
          class="w-full h-auto hero-drop-shadow"
        />
      </div>

      <!-- Wait, when did you make this? -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          Wait, When Did You Make This?
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          The prompt had 17 items in the to-do list, and ran for several minutes straight. The end result looked like a wireframe you could click. Not great. But a solid start. Enough to give me some ideas and a sense of direction of what to prompt next.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          We were working in wireframe mode, so we were using a wireframe token set I had. It was basically our brand tokens, but grayscale, pared down, and made minimal. It looked roughly like our site.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          I had worked with coding agents enough to have a decent workflow and knowledge. I created a to-do list of design tweaks and ran down the list, prompting specific designs. And before lunch rolled around, I had a fully working, lo-fi, interactive prototype of the entire journey (including all the edge cases). It was mobile responsive right out of the gate and ready to use for feedback and testing.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          When I shared a link to it with my team, they were amazed. I had nothing started in our morning stand up, and here it was, not even lunch, and I’m passing around a working version for them to interact with.
        </p>
      </div>

      <!-- The new workflow -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          The New Workflow
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          What we started here set the tone for how we work now. With that two-hour prototype, I spun up a short test in UserTesting and got immediate feedback from 5 participants. I pasted the transcripts into ChatGPT, had it summarize them, and gave me a new feedback and change-log prompt to paste back into Cursor. And an hour later, I was ready for a new round of iterative testing and feedback.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          In a single day, I went from idea to a lo-fi functional prototype that we were testing with real users, iterating, and testing again. By the end of the day (plus an extra hour), I had a settled design direction. I took screenshots of every net-new component I mocked up and jumped into Figma to convert them to hi-fidelity components.
        </p>
      </div>

      <!-- Full width image -->
      <div class="w-full max-w-[1600px] mt-12">
        <img
          src="/nav-components.png"
          alt="Navigation components screenshot"
          class="w-full h-auto hero-drop-shadow"
        />
      </div>

      <!-- Closing paragraphs -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          I then fed those components, one by one, into Cursor via the Figma MCP once the designs were done and critiqued. Cursor used them to convert my lo-fi prototype into a hi-fidelity, pixel-perfect, fully coded prototype of the entire journey. And we completed it all in half the time it normally would have taken.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          I’ve never looked back since that moment. Using Cursor to code prototypes has cut that portion of the work by 80% or more. I’ve shared this process with other designers on staff, and several people are skipping Figma for prototyping altogether. The time- and cost-saving has been remarkable across the entire workflow.
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
useSeoMeta({
  title: 'Sorry, Figma! I’m Coding Prototypes',
  description: 'I used to pride myself on my Figma prototypes. Dragging arrows around and creating a mass of digital spiderwebs, screens, and interactions. I felt like a magician!',
  ogTitle: 'Sorry, Figma! I’m Coding Prototypes',
  ogDescription: 'I used to pride myself on my Figma prototypes. Dragging arrows around and creating a mass of digital spiderwebs, screens, and interactions. I felt like a magician!',
  ogImage: 'https://sambuilt.it/eat-sleep-code.png',
  ogUrl: 'https://sambuilt.it/ai-lab/sorry-figma-im-coding-prototypes',
  ogType: 'article',
  ogSiteName: 'Sam Daugherty Portfolio',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Sorry, Figma! I’m Coding Prototypes',
  twitterDescription: 'I used to pride myself on my Figma prototypes. Dragging arrows around and creating a mass of digital spiderwebs, screens, and interactions. I felt like a magician!',
  twitterImage: 'https://sambuilt.it/eat-sleep-code.png',
  twitterImageAlt: 'Sorry, Figma! I’m Coding Prototypes'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://sambuilt.it/ai-lab/sorry-figma-im-coding-prototypes' }
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
