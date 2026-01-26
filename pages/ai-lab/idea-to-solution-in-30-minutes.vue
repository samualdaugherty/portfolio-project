<template>
  <main class="w-full max-w-[1600px] px-4 lg:px-8">
    <section class="w-full pt-16 sm:pt-24 z-10 pl-0">
      <!-- Title with responsive background text -->
      <div class="relative w-full -mb-4 z-10">
        <div
          class="absolute z-0 w-[110vw] select-none pointer-events-none left-0 -top-[10%] sm:top-[-5%] lg:top-[-5%] translate-x-[-5vw] font-alumni font-bold uppercase text-[clamp(6rem,14.5vw,14.5rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] opacity-25 leading-[0.72]"
          style="-webkit-text-stroke: 1px #F32929; -webkit-text-fill-color: transparent;"
        >
          Idea to Solution in 30 Minutes
        </div>
        <h1
          class="font-alumni font-bold text-black dark:text-white relative z-10 text-[clamp(5rem,13vw,13rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] xl:mr-12"
          style="line-height: 72%;"
        >
          Idea to Solution in 30 Minutes
        </h1>
      </div>

      <!-- Intro paragraph -->
      <div class="mt-12 relative z-10 ml-0 lg:ml-32 xl:ml-48 max-w-3xl">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          The great thing about experimenting with AI is that it’s okay if it fails. By trade, I’m a designer, so not every problem that comes my way requires me to dive in and engineer a solution. But sometimes? Sometimes it’s just fun to try—especially when the consequences are low.
        </p>
      </div>

      <!-- Hero image (right-aligned) -->
      <div class="relative z-10 mt-12 max-w-[900px] ml-auto">
        <img
          src="/idea-to-solution.png"
          alt="Idea to Solution in 30 Minutes - Hero Image"
          class="-mr-4 lg:-mr-8 max-w-4xl w-full h-auto hero-drop-shadow"
        />
      </div>

      <!-- Lead-in -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Those consequences can ramp up quickly, though, if you’re devoting a lot of time to it. So the goal here was speed. The idea is obvious, but how quickly can I do it?
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          Turns out: about 30 minutes flat.
        </p>
      </div>

      <!-- The Problem Statement -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          The Problem Statement
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          Recently, during a meeting, we were told our User Testing credits were projected to run out before the end of our contract. That would mean no more user tests without prior approval and justification. That approval process was simple enough: Slack the Research Manager and ask. Do your best to estimate the credits you’ll use.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          For starters, there was no official form. Just a Slack message you hoped a busy person would see and respond to. On top of that, credit usage was intentionally opaque. You don’t know how many credits a test will use until after you run it.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          We also didn’t have a clear picture of how many credits we had left week to week. Credit usage and remaining balance live behind an admin account, and not everyone has admin access.
        </p>
      </div>

      <!-- The Idea -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          The Idea
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          I was confident that, with the help of some robotic research, I could figure this out. I had access to all of our previous tests and their credit usage, including detailed breakdowns. I also knew our remaining balance from a deck that had been shared earlier.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          I immediately knew what was possible. Just not how long it would take.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          If I fed all our test usage data into ChatGPT, could it analyze the data and give me a clear picture of each test type, its duration, and how many credits it used? Yes. Very easily, as it turns out.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Could I use that information to build an estimator?
          <br />
          Could that estimator include a form to request new tests?
          <br />
          And could it track our running balance so we weren’t flying blind?
        </p>
      </div>

      <!-- Blockquote -->
      <div class="w-full max-w-[1600px] mt-12 mb-12">
        <div class="content-stretch flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full">
          <p class="font-alumni font-bold text-[2rem] sm:text-[2.5rem] leading-[1.17] text-black dark:text-white section-shadow tracking-[-0.96px] flex-shrink">
            The idea is obvious, but how quickly can I do it?
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
          It was 4:30 on a Tuesday. I had about 30 minutes to find out. Any more than that, and it would start interfering with actual work.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          Fuck it. Let’s go.
        </p>
      </div>

      <!-- The Results -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          The Results
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          I don’t have to tell you that AI is great at automating tedious work, especially scanning large tables, databases, and documents. When I fed in the credit usage CSV, I had answers and a working estimation model in about 45 seconds.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          From there, I asked ChatGPT how to build the solution.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          I told it what the tool needed to do, the general rules, the build stack, where it would live internally, and asked it to generate the documents I’d need to build it in Cursor. That included a prompt I could feed directly into Cursor to generate the app (this was before Cursor had Plan Mode).
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Because this was an internal proof of concept, I didn’t spend much time designing it. I wasn’t worried about branding or perfect UX. I just wanted to see if it worked. The goal was proof, not polish. If it worked, I could get permission to build it properly and set it free.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          Here’s the wild part: it was done and working in under 14 minutes.
        </p>
      </div>

      <!-- 3-column image row -->
      <div class="w-full max-w-[1600px] mt-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src="/ut-primary-dashboard.png"
            alt="UserTesting primary dashboard"
            class="w-full h-auto hero-drop-shadow"
          />
          <img
            src="/ut-running-balance.png"
            alt="UserTesting running balance"
            class="w-full h-auto hero-drop-shadow"
          />
          <img
            src="/ut-credit-history.png"
            alt="UserTesting credit history"
            class="w-full h-auto hero-drop-shadow"
          />
        </div>
      </div>

      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          That left me with enough time to clean up the UI a bit and apply our brand colors. Is it exactly how I would have designed it? No. Was it terrible? Also no. For an internal tool used by maybe 12 people, it was more than good enough.
        </p>
      </div>

      <!-- The Wrap Up -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          The Wrap Up
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          I started at 4:30 p.m. with a simple goal: gauge the level of effort.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          By 4:50 p.m., I was back on the phone with the manager, walking through a finished solution. That 30-minute window included the presentation. How crazy is that?
        </p>
      </div>

      <!-- Blockquote -->
      <div class="w-full max-w-[1600px] mt-12 mb-12">
        <div class="content-stretch flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full">
          <p class="font-alumni font-bold text-[2rem] sm:text-[2.5rem] leading-[1.17] text-black dark:text-white section-shadow tracking-[-0.96px] flex-shrink">
            The goal was a proof of concept. I got a finished product.
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
          I set out to build a simple proof of concept, or at least confirm that the idea was viable. What I ended up with was a fully working tool, complete with documented data sources and transparent calculations for how estimates were generated. All that was left was spinning up a place to host it internally.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          There was one caveat worth mentioning: there’s no way to connect directly to our User Testing account. No API. So once a week, someone uploads a fresh usage CSV and plugs in the current balance. From there, it just works.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          The next step is to see how far we can push this. Could we automate the process of getting usage data and balance, and uploading it into the database? I bet an agent could do that.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          No API? Maybe that’s not a problem after all.
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
useSeoMeta({
  title: 'Idea to Solution in 30 Minutes',
  description: 'The goal here was speed. The idea is obvious, but how quickly can I do it? Turns out: about 30 minutes flat.',
  ogTitle: 'Idea to Solution in 30 Minutes',
  ogDescription: 'The goal here was speed. The idea is obvious, but how quickly can I do it? Turns out: about 30 minutes flat.',
  ogImage: 'https://sambuilt.it/idea-to-solution.png',
  ogUrl: 'https://sambuilt.it/ai-lab/idea-to-solution-in-30-minutes',
  ogType: 'article',
  ogSiteName: 'Sam Daugherty Portfolio',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Idea to Solution in 30 Minutes',
  twitterDescription: 'The goal here was speed. The idea is obvious, but how quickly can I do it? Turns out: about 30 minutes flat.',
  twitterImage: 'https://sambuilt.it/idea-to-solution.png',
  twitterImageAlt: 'Idea to Solution in 30 Minutes'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://sambuilt.it/ai-lab/idea-to-solution-in-30-minutes' }
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
