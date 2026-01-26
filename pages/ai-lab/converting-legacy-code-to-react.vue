<template>
  <main class="w-full max-w-[1600px] px-4 lg:px-8">
    <section class="w-full pt-16 sm:pt-24 z-10 pl-0">
      <!-- Title with responsive background text -->
      <div class="relative w-full -mb-4 z-10">
        <div
          class="absolute z-0 w-[110vw] select-none pointer-events-none left-0 -top-[10%] sm:top-[-5%] lg:top-[-5%] translate-x-[-5vw] font-alumni font-bold uppercase text-[clamp(6rem,14.5vw,14.5rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] opacity-25 leading-[0.72]"
          style="-webkit-text-stroke: 1px #F32929; -webkit-text-fill-color: transparent;"
        >
          Converting Legacy Code to React
        </div>
        <h1
          class="font-alumni font-bold text-black dark:text-white relative z-10 text-[clamp(5rem,13vw,13rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] xl:mr-12"
          style="line-height: 72%;"
        >
          Converting Legacy Code to React
        </h1>
      </div>

      <!-- Intro paragraph -->
      <div class="mt-12 relative z-10 ml-0 lg:ml-32 xl:ml-48 max-w-3xl">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          When you work in tech, people just assume you’re an all-around IT guy. So when my friend’s website stopped working, he assumed I knew how to fix it.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          Turns out, I did.
        </p>
      </div>

      <!-- Hero image (right-aligned) -->
      <div class="relative z-10 mt-12 max-w-[900px] ml-auto">
        <img
          src="/legacy-to-react.png"
          alt="Converting Legacy Code to React - Hero Image"
          class="-mr-4 lg:-mr-8 max-w-4xl w-full h-auto hero-drop-shadow"
        />
      </div>

      <!-- Lead-in -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          It was pretty easy to see what was wrong: the site was built on a deprecated version of PHP from more than eight years ago—his cPanel helpfully told me so. That's why it was easy to tell what was wrong. The only problem? I don’t know PHP.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          But you know who does?
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          If you’ve read anything I’ve written so far, you know these projects are experiments in agentic coding. So if he’s asking me for help, I’m going to help him <em>my</em> way. That means turning it into an experiment I can learn from, write about, and hopefully teach something along the way.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          I had a feeling this would be pretty straightforward. Which it was. So instead of overexplaining, I’m just going to break down exactly how I set this up, in case you’ve got an old website you’d like to revive too.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          Let’s go.
        </p>
      </div>

      <!-- Set Up Your Project -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          Set Up Your Project
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          To rebuild the site, you need the old code. All of it. The entire folder, the original structure—everything. Export it from your host and drop it into a folder on your computer if you haven’t already.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          You should end up with something like this:
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          <strong>Project Folder → Old Website Files</strong>
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Next, create a second folder in your project root called <strong>New Website</strong>, but don’t add anything to it. We’re going to let Cursor handle that.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Now open the root <strong>Project Folder</strong> in Cursor.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-4">
          Your folder tree should look like this:
        </p>
        <pre class="font-mono text-sm bg-white/70 dark:bg-black/30 border border-black/10 dark:border-white/10 rounded-lg p-4 whitespace-pre-wrap break-words">
Project Folder
├─ Old Website Files
└─ New Website
        </pre>
      </div>

      <!-- Step 1 -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          Step 1: Plan Your Project
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          Before we build anything, we need a plan. And for that, the agent needs to understand the old site.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Start by putting your agent into <strong>Plan Mode</strong>, then drag the <em>Old Website Files</em> folder into the chat window so it can reference everything. Think of it like handing someone a manila envelope and saying, “Read through this and do your best to understand it.”
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          This is why preserving the original folder structure matters. The agent will scan every file—starting at the root—and map includes, references, links, components, and styles. That’s how it rebuilds the site so it <em>appears</em> exactly the same.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-4">
          Here’s the exact prompt I used to kick things off:
        </p>
        <pre class="font-mono text-sm bg-white/70 dark:bg-black/30 border border-black/10 dark:border-white/10 rounded-lg p-4 overflow-x-auto">
This is an old, somewhat outdated project that I need to rebuild. It was built 8 years ago using PHP and Bootstrap. It's old, and a lot of it is deprecated.

I would like to take this site and convert it to a modern framework: React, Next.js, using Tailwind (what I'm more familiar with now), and simply duplicate it for hosting on Vercel. Don’t make any changes to the content or styles. It needs to match one-to-one.

I need you to scan this project, read the files, understand the structure, and outline what we need to do next to complete the conversion.
        </pre>
      </div>

      <!-- Blockquote -->
      <div class="w-full max-w-[1600px] mt-12 mb-12">
        <div class="content-stretch flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full">
          <p class="font-alumni font-bold text-[2rem] sm:text-[2.5rem] leading-[1.17] text-black dark:text-white section-shadow tracking-[-0.96px] flex-shrink">
            That’s it. That’s the whole prompt.
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
          You’ll watch it assemble a build plan and to-do list for itself. When it’s ready, a <strong>Build</strong> button appears. Click it, and let it work.
        </p>
      </div>

      <!-- Step 2 -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          Step 2: Lower Your Expectations
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          Maybe you’ll get lucky. But you’ll probably run into the same issue I did.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          For the most part, it built everything correctly. But after that initial build, I couldn’t see the site at all because of errors.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-2">
          This is common when coding agents attempt large, complex tasks. The <strong>context window</strong> can run out before the job is complete, which means earlier decisions or code can get lost along the way.
        </p>
      </div>

      <!-- Blockquote (reversed) -->
      <div class="w-full max-w-[1600px] mt-12 mb-12">
        <div class="content-stretch flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full">
          <p class="font-alumni font-bold text-[2rem] leading-[1.13] text-accent tracking-[-0.64px] flex-shrink-0 whitespace-nowrap">
            Quote
          </p>
          <div class="flex items-center justify-center flex-shrink-0 hidden sm:flex">
            <div class="h-px bg-black dark:bg-white w-[154px]"></div>
          </div>
          <p class="font-alumni font-bold text-[2rem] sm:text-[2.5rem] leading-[1.17] text-black dark:text-white section-shadow tracking-[-0.96px] flex-shrink">
            What’s a context window? Let me explain.
          </p>
        </div>
      </div>

      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-8">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          An AI’s context window is the amount of information it can actively “see” and remember at one time while generating a response.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Think of it like working memory. Everything inside the context window—your prompt, system instructions, conversation history, pasted documents—can influence the output. Anything outside it is effectively invisible.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          When inputs get too long, older information gets pushed out. That’s why long chats can lead to forgotten constraints, inconsistent behavior, or broken logic.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          This can happen with the AI’s <em>own work</em>, too. An average context window might be around 200,000 tokens (whatever that actually means). A large, complex build can easily exceed that—sometimes approaching a million tokens. By the second half of the task, the agent may no longer remember how it started.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          The result? Code conflicts.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          But that’s nothing to stress about, because…
        </p>
      </div>

      <!-- Step 3 -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          Step 3: Correct and Refine
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          In my case, rebuilding my friend’s site only required three additional prompts after the initial build. Total cleanup time? Maybe five minutes.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-2">
          Things like:
        </p>
        <ul class="font-lato text-body text-black dark:text-white leading-relaxed list-disc ml-6 mb-6">
          <li>“Can you spin up a server so I can see the site?”</li>
          <li>“The site doesn’t load—can you debug it?”</li>
        </ul>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          At first, all I saw was a React error. I copied the error from the console, pasted it into the chat, and let the agent debug its own code.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          About 30 seconds later, it was fixed.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          And it looked identical. Page for page. Interaction for interaction. You’d never guess it was a different site, except that it worked, and everything loaded <em>fast</em>.
        </p>
      </div>

      <!-- Step 4 -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          Step 4: Go Have a Snack
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          Once you’re happy, you’re done. Go grab some cookies or something.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          In my case—a simple eight-page informational site—the entire process took just under nine minutes. I often set a timer when running experiments so I can track how long I spend on them.
        </p>
      </div>

      <!-- Blockquote -->
      <div class="w-full max-w-[1600px] mt-12 mb-12">
        <div class="content-stretch flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full">
          <p class="font-alumni font-bold text-[2rem] sm:text-[2.5rem] leading-[1.17] text-black dark:text-white section-shadow tracking-[-0.96px] flex-shrink">
            I wrote those em dashes. Not AI. Em Dash Gang for life.
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
          It was surprisingly easy to take a broken, outdated website and rebuild it in a modern framework. And chances are, you’ve got old projects sitting around that could benefit from the same treatment.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          So why not give it a try?
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-6">
          Let me know how it goes.
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
useSeoMeta({
  title: 'Converting Legacy Code to React',
  description: 'When you work in tech, people just assume you’re an all-around IT guy. So when my friend’s website stopped working, he assumed I knew how to fix it.',
  ogTitle: 'Converting Legacy Code to React',
  ogDescription: 'When you work in tech, people just assume you’re an all-around IT guy. So when my friend’s website stopped working, he assumed I knew how to fix it.',
  ogImage: 'https://sambuilt.it/legacy-to-react.png',
  ogUrl: 'https://sambuilt.it/ai-lab/converting-legacy-code-to-react',
  ogType: 'article',
  ogSiteName: 'Sam Daugherty Portfolio',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Converting Legacy Code to React',
  twitterDescription: 'When you work in tech, people just assume you’re an all-around IT guy. So when my friend’s website stopped working, he assumed I knew how to fix it.',
  twitterImage: 'https://sambuilt.it/legacy-to-react.png',
  twitterImageAlt: 'Converting Legacy Code to React'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://sambuilt.it/ai-lab/converting-legacy-code-to-react' }
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
