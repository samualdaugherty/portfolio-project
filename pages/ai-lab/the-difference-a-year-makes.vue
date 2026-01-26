<template>
  <main class="w-full max-w-[1600px] px-4 lg:px-8">
    <section class="w-full pt-16 sm:pt-24 z-10 pl-0">
      <!-- Title with responsive background text -->
      <div class="relative w-full -mb-4 z-10">
        <div
          class="absolute z-0 w-[110vw] select-none pointer-events-none left-0 -top-[10%] sm:top-[-5%] lg:top-[-5%] translate-x-[-5vw] font-alumni font-bold uppercase text-[clamp(6rem,14.5vw,14.5rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] opacity-25 leading-[0.72]"
          style="-webkit-text-stroke: 1px #F32929; -webkit-text-fill-color: transparent;"
        >
          The Difference a Year Makes
        </div>
        <h1
          class="font-alumni font-bold text-black dark:text-white relative z-10 text-[clamp(5rem,13vw,13rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] xl:mr-12"
          style="line-height: 72%;"
        >
          The Difference a Year Makes
        </h1>
      </div>

      <!-- Intro paragraph -->
      <div class="mt-12 relative z-10 ml-0 lg:ml-32 xl:ml-48 max-w-3xl">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          A year is an interesting thing. It’s just long enough to feel like forever, but short enough that you’re amazed where it went. And in the world of AI, a year is an eternity.
        </p>
      </div>

      <!-- Hero image (right-aligned) -->
      <div class="relative z-10 mt-12 max-w-[900px] ml-auto">
        <img
          src="/difference-a-year-makes.png"
          alt="The Difference a Year Makes - Hero Image"
          class="-mr-4 lg:-mr-8 max-w-4xl w-full h-auto hero-drop-shadow"
        />
      </div>

      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Not long ago, Will Smith eating spaghetti was somehow the benchmark for generative AI. A nightmare-inducing video baffled us all and became proof to many that generative AI was all smoke and no fire.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Then it got better. And then better again. And suddenly, this past year spawned entire industries dedicated to answering a single question: <em>what’s real anymore?</em>
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          The verdict is in. We’re living in a new era of work and automation. And most corporations seem to agree.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          But I’m not here to talk about AI in the abstract. I’m here to talk about how it changed <em>my</em> work—and maybe <em>your</em> work too.
        </p>
      </div>

      <!-- Flashback Time -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          Flashback Time
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          In January 2025, inflation was still top of mind, and wages were still a source of stress for millions. I couldn’t solve that problem, but I knew how to help people <em>understand</em> it.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          So I designed an inflation calculator using data from the Bureau of Labor Statistics. You’d enter your starting salary, when you started, and what you make now. One API call later, you could see whether you were actually earning more, or less, once inflation was factored in.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          Simple idea. Big impact.
        </p>
      </div>

      <!-- Blockquote -->
      <div class="w-full max-w-[1600px] mt-12 mb-12">
        <div class="content-stretch flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full">
          <p class="font-alumni font-bold text-[2rem] sm:text-[2.5rem] leading-[1.17] text-black dark:text-white section-shadow tracking-[-0.96px] flex-shrink">
            Just one problem: I didn’t know how to make an API call.
          </p>
          <div class="flex items-center justify-center flex-shrink-0 hidden sm:flex">
            <div class="h-px bg-black dark:bg-white w-[154px]"></div>
          </div>
          <p class="font-alumni font-bold text-[2rem] leading-[1.13] text-accent tracking-[-0.64px] flex-shrink-0 whitespace-nowrap">
            Quote
          </p>
        </div>
      </div>

      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-8">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          I googled. I Stack Overflowed (RIP soon). I tried my best. I failed every time. Normally, I’d ask an engineer friend for help. I did this time, too. They were busy. All of them.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          I felt stuck.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          Then someone asked, “Have you tried Cursor?” I hadn’t. In fact… what <em>was</em> Cursor?
        </p>
      </div>

      <!-- When Everything Changed -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          When Everything Changed
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          Fast forward to March. I was in a hotel room on a cold, miserable day in Chicago. No desire to explore the city, plenty of desire to tinker.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          So I downloaded Cursor and started explaining what I wanted to build.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          I gave it screenshots of my designs, a link to the BLS API docs, and asked for help. With a bit of back-and-forth, it worked. Not only did it work; I finished the entire project and launched a live version in under three hours.
        </p>
      </div>

      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-8">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Granted, it was a simple site. But that same site had already taken me <em>months</em> without success. And now it was live before bedtime. I didn’t even have to stay up late.
        </p>
      </div>

      <!-- Blockquote -->
      <div class="w-full max-w-[1600px] mt-12 mb-12">
        <div class="content-stretch flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full">
          <p class="font-alumni font-bold text-[2rem] sm:text-[2.5rem] leading-[1.17] text-black dark:text-white section-shadow tracking-[-0.96px] flex-shrink">
            That moment changed everything for me.
          </p>
          <div class="flex items-center justify-center flex-shrink-0 hidden sm:flex">
            <div class="h-px bg-black dark:bg-white w-[154px]"></div>
          </div>
          <p class="font-alumni font-bold text-[2rem] leading-[1.13] text-accent tracking-[-0.64px] flex-shrink-0 whitespace-nowrap">
            Quote
          </p>
        </div>
      </div>

      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-8">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          Looking back, it’s easy to see that as the inflection point. Nothing about my work, or my career, has been the same since.
        </p>
      </div>

      <!-- Curiosity, Unleashed -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          Curiosity, Unleashed
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          After that, I couldn’t stop building.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Ideas I’d shelved for years suddenly felt possible. New ones showed up almost weekly. I wanted to see how far I could push what one person could do with the right tools. Keep experimenting.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          At work, I shared what I was building. It felt exciting, but also know it was self-contained. These were just personal experiments, after all. I was fascinated by creating with AI, but not yet fully applying it to improve how I worked. That’s when I knew it was time to explore deeper.
        </p>
      </div>

      <!-- Curiosity image -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <img
          src="/curiosity-sparked.png"
          alt="Curiosity sparked"
          class="w-full h-auto hero-drop-shadow"
        />
      </div>

      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-8">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          This is where the real learning began.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          Experimentation is fun. Impact takes intention and strategy. So I started studying how other people, other experts, were applying AI to their workflows.
        </p>
      </div>

      <!-- The Productivity Shift -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          The Productivity Shift
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          I began by obsessively checking AI news feeds, online courses, reading substack, all hunting for practical tips. Eventually, I automated that too. Because of course I did.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          But more importantly, I tried applying what I found. Most ideas went nowhere. A few stuck. Those became part of my daily workflow and got shared out to the rest of the organization.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          It started with automating routine tasks: summarizing meetings, synthesizing research, analyzing survey responses. Helpful, but small and incremental.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          The real shift came with code.
        </p>
      </div>

      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          When my company floated the idea of trialing Cursor for engineers, I begged for early access as a designer.
        </p>
      </div>

      <!-- Blockquote -->
      <div class="w-full max-w-[1600px] mt-12 mb-12">
        <div class="content-stretch flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full">
          <p class="font-alumni font-bold text-[2rem] sm:text-[2.5rem] leading-[1.17] text-black dark:text-white section-shadow tracking-[-0.96px] flex-shrink">
            They were reluctant. But I had a strong use case.
          </p>
          <div class="flex items-center justify-center flex-shrink-0 hidden sm:flex">
            <div class="h-px bg-black dark:bg-white w-[154px]"></div>
          </div>
          <p class="font-alumni font-bold text-[2rem] leading-[1.13] text-accent tracking-[-0.64px] flex-shrink-0 whitespace-nowrap">
            Quote
          </p>
        </div>
      </div>

      <!-- The Cursor Figma Loop -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-8">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          The Cursor Figma Loop
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          Of everything I’ve automated, prototyping has had the biggest impact.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          High-fidelity prototypes take time to produce in Figma. Especially when you’re building entire pages just to showcase a single feature. Then you do it again and again to make it clickable. The result is usually… fine. But it’s not a real working website.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Now I only design the <em>piece I need</em>. I design the feature and its components, then
          <router-link to="/ai-lab/sorry-figma-im-coding-prototypes" class="text-accent font-semibold hover:underline">build the full site in Cursor</router-link>.
          I don’t waste time mocking up artifacts I don’t need. I test against a real, working version of the product. I iterate directly in code. When it’s done, I bring the final implementation back into Figma as the source of truth.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          And I hand engineers real code.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          This reduced my time-to-test by roughly 80%. What used to take a week now takes a day. The workflow worked so well that we’ve started rolling it out as the default approach for our design team.
        </p>
      </div>

      <!-- One Year Later -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          One Year Later
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          That brings me to today.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          I’m no longer begging for engineering help. I’m no longer shelving ideas. I’ve shipped entire iOS apps solo; from idea to App Store. I’m still experimenting, still learning, still adapting as the landscape changes. You can never stop learning in the rapid environment of AI.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          But what matters more is this: I’m now the one being asked for help.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          I host weekly training sessions. I help teammates adopt Cursor. I’m part of conversations about AI wins and the future of work. The experiments I once did at night are now part of my daily job.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          A year ago, I was helpless to bring an idea to life.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          A year later, I’m teaching others how to do it.
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
useSeoMeta({
  title: 'The Difference a Year Makes',
  description: 'At the beginning of 2025, I was begging my engineer friends for help. A year later, I’m shipping and teaching others how to do it.',
  ogTitle: 'The Difference a Year Makes',
  ogDescription: 'At the beginning of 2025, I was begging my engineer friends for help. A year later, I’m shipping and teaching others how to do it.',
  ogImage: 'https://sambuilt.it/difference-a-year-makes.png',
  ogUrl: 'https://sambuilt.it/ai-lab/the-difference-a-year-makes',
  ogType: 'article',
  ogSiteName: 'Sam Daugherty Portfolio',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: 'The Difference a Year Makes',
  twitterDescription: 'At the beginning of 2025, I was begging my engineer friends for help. A year later, I’m shipping and teaching others how to do it.',
  twitterImage: 'https://sambuilt.it/difference-a-year-makes.png',
  twitterImageAlt: 'The Difference a Year Makes'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://sambuilt.it/ai-lab/the-difference-a-year-makes' }
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
