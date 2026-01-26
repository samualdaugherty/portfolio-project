<template>
  <main class="w-full max-w-[1600px] px-4 lg:px-8">
    <section class="w-full pt-16 sm:pt-24 z-10 pl-0">
      <!-- Title with responsive background text -->
      <div class="relative w-full -mb-4 z-10">
        <div
          class="absolute z-0 w-[110vw] select-none pointer-events-none left-0 -top-[10%] sm:top-[-5%] lg:top-[-5%] translate-x-[-5vw] font-alumni font-bold uppercase text-[clamp(6rem,14.5vw,14.5rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] opacity-25 leading-[0.72]"
          style="-webkit-text-stroke: 1px #F32929; -webkit-text-fill-color: transparent;"
        >
          Building an Agentic Workflow
        </div>
        <h1
          class="font-alumni font-bold text-black dark:text-white relative z-10 text-[clamp(5rem,13vw,13rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] xl:mr-12"
          style="line-height: 72%;"
        >
          Building an Agentic Workflow
        </h1>
      </div>

      <!-- Intro paragraph -->
      <div class="mt-12 relative z-10 ml-0 lg:ml-32 xl:ml-48 max-w-3xl">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          Let me be very clear: I did not set out to build a full-blown, AI-powered content pipeline. I wanted a daily email with the best AI news so I wouldn’t have to doom-scroll for two hours. So I asked ChatGPT what to do.
        </p>
      </div>

      <!-- Hero image (right-aligned) -->
      <div class="relative z-10 mt-12 max-w-[900px] ml-auto">
        <img
          src="/building-agentic-workflow.png"
          alt="Building an Agentic Workflow - Hero Image"
          class="-mr-4 lg:-mr-8 max-w-4xl w-full h-auto hero-drop-shadow"
        />
      </div>

      <!-- Intro continuation -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          I’m sure you can relate: every morning, I open my phone to see if there are any new tips on using AI, and then spend an hour filled with rage at the definitely horrible news I’m seeing. There had to be an easier way, and that’s what robots are for.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          That’s not to say it’s something I couldn’t have figured out on my own. RSS feeds exist, after all. But I wanted to do something cool.
        </p>
      </div>

      <!-- Blockquote -->
      <div class="w-full max-w-[1600px] mt-12 mb-12">
        <div class="content-stretch flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full">
          <p class="font-alumni font-bold text-[2rem] sm:text-[2.5rem] leading-[1.17] text-black dark:text-white section-shadow tracking-[-0.96px] flex-shrink">
            By cool, I mean I wanted to be able to write about it here.
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
          I took a deep breath and made myself comfortable. I rubber-ducked with ChatGPT to come up with a plan for a hot minute. It gave me a “kickoff prompt,” I pasted that into Cursor… and suddenly I owned a moderately intelligent news robot.
        </p>
      </div>

      <!-- Step 1 -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          Step 1: “Please Build Me a Robot”
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          “Hey,” I said to ChatGPT. “I’d like to only see the news I want, and avoid the news I don’t.”
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          “Cool. Here’s a full spec, a data model, and a plan. Sound good?” Chat said back. Obviously, I’m summarizing a bit.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Did it sound good? I honestly didn’t know, because it used all those scary terms and confusing acronyms I’d read about in articles on agentic workflows. But I figured that between the two of us, my robot friend probably knew more than I did on the subject.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          “Sounds great!” I said.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          I pasted the prompt into Cursor, and it started creating files faster than I can eat a package of Oreos. For educational purposes, though, I also asked it to explain what it was doing in layman’s terms, so I’d have a general idea when the time came to write about it.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          And there was still a lot of manual work required. I did stuff! And you’ll have to do stuff too.
        </p>
      </div>

      <!-- Step 2 -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          Step 2: The Bot Gets a Brain (Claude)
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          This was my contribution. One of the manual tasks I mentioned. I had to create an API key and then paste it into a chat box. It was hard work, I promise.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-2">
          We hooked the project up to Claude (Anthropic’s AI model) so it could:
        </p>
        <ul class="font-lato text-body text-black dark:text-white leading-relaxed list-disc ml-6 mb-6">
          <li>Read articles</li>
          <li>Summarize them</li>
          <li>Extract actionable tips</li>
          <li>Score relevance</li>
        </ul>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          This part was crucial. It had to find the right articles, discard the bad ones, and focus specifically on content that provided actionable tips—how to use different models, emerging high-value tools, and things I could actually do. I wasn’t interested in generic AI news or endless think pieces about how economists believe AI will impact jobs.
        </p>
      </div>

      <!-- Reverse blockquote -->
      <div class="w-full max-w-[1600px] mt-12 mb-12">
        <div class="content-stretch flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full ">
          <p class="font-alumni font-bold text-[2rem] leading-[1.13] text-accent tracking-[-0.64px] flex-shrink-0 whitespace-nowrap">
            Quote
          </p>
          <div class="flex items-center justify-center flex-shrink-0 hidden sm:flex">
            <div class="h-px bg-black dark:bg-white w-[154px]"></div>
          </div>
          <p class="font-alumni font-bold text-[2rem] sm:text-[2.5rem] leading-[1.17] text-black dark:text-white section-shadow tracking-[-0.96px] flex-shrink">
            That shit’s depressing.
          </p>
        </div>
      </div>

      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-8">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          Why did I choose Claude? Because they have a great pay-as-you-go model that doesn’t require a monthly subscription. That’s really all there is to it. It’s incredibly inexpensive, and I think it’s excellent. It’s also the model I use most often for coding.
        </p>
      </div>

      <!-- Step 3 -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          Step 3: It Learned How to Find News
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          Instead of developing a severe case of high blood pressure from seeing all the bullshit that crosses the newsfeed every day, we taught our robot friend to find the news itself.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          Every morning at 8 a.m., it pulls from RSS feeds (AI blogs, news sites, etc.) and grabs anything new from the last ~24 hours. Some days, that’s well over 200 articles. It then scores them for relevance, extracts any actionable tips, and decides what’s worth keeping.
        </p>
      </div>

      <!-- Step 4 -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          Step 4: It Writes the Newsletter, of Course
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          This was part of the original ask when I talked to ChatGPT. The obvious solution was to email me the articles so they’re waiting when I sit down at my desk with a cup of coffee. It’s like a warm daily welcome from an old friend: The News.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          And all of this is automated. Once the best articles are collected, the system formats them as an email and sends it off.
        </p>
      </div>

      <!-- Inline image -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-8">
        <img
          src="/cat-on-laptop.png"
          alt="Cat on laptop"
          class="w-full h-auto hero-drop-shadow"
        />
      </div>

      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-8">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          The email portion was another manual task I had to handle (and you will too, if you’re playing along). I had to set up an <a href="https://kit.com" class="text-accent font-semibold hover:underline" target="_blank" rel="noopener">account with Kit</a>, grab yet another API key, configure DNS records properly, and wire everything together. Cursor can’t do all of that for you, at least not yet.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          So yes, the entire “daily email workflow” is now a robot’s job. I don’t have to do anything other than sit down at my computer in the morning.
        </p>
      </div>

      <!-- Step 5 -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          Step 5: It Shows Up on the Website
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          The same articles used in the email also appear on the website. This wasn’t part of the original plan, but after wanting to re-read articles and digging through old emails a few times, it felt like a no-brainer.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Now the email and the website are in sync. I get daily content, and everything is stored on the homepage for easy reference later.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          In summary, I went from “What is an API?” to “This thing crawls the web, filters AI content, summarizes it, emails subscribers, and updates my website automatically.”
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          And I did it in roughly a handful of hours spread across a couple of days. It’s been running for more than four months without interruption. You can head over to <a href="https://www.aidailyrundown.com/" class="text-accent font-semibold hover:underline" target="_blank" rel="noopener">AI Daily Rundown</a> to see it for yourself… and subscribe to the newsletter.
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
useSeoMeta({
  title: 'Building an Agentic Workflow',
  description: 'I wanted a daily email with the best AI news so I wouldn’t have to doom-scroll for two hours. So I asked ChatGPT what to do.',
  ogTitle: 'Building an Agentic Workflow',
  ogDescription: 'I wanted a daily email with the best AI news so I wouldn’t have to doom-scroll for two hours. So I asked ChatGPT what to do.',
  ogImage: 'https://sambuilt.it/building-agentic-workflow.png',
  ogUrl: 'https://sambuilt.it/ai-lab/building-an-agentic-workflow',
  ogType: 'article',
  ogSiteName: 'Sam Daugherty Portfolio',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Building an Agentic Workflow',
  twitterDescription: 'I wanted a daily email with the best AI news so I wouldn’t have to doom-scroll for two hours. So I asked ChatGPT what to do.',
  twitterImage: 'https://sambuilt.it/building-agentic-workflow.png',
  twitterImageAlt: 'Building an Agentic Workflow'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://sambuilt.it/ai-lab/building-an-agentic-workflow' }
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
