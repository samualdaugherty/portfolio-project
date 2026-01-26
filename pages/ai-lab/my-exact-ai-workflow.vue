<template>
  <main class="w-full max-w-[1600px] px-4 lg:px-8">
    <section class="w-full pt-16 sm:pt-24 z-10 pl-0">
      <!-- Blog Post Title with Responsive Background Text -->
      <div class="relative w-full -mb-4 z-10">
        
        <!-- Orange Outlined Background Text (HTML with CSS Stroke) -->
        <div 
          class="absolute z-0 w-[110vw] select-none pointer-events-none left-0 -top-[10%] sm:top-[-5%] lg:top-[-5%] translate-x-[-5vw] font-alumni font-bold uppercase text-[clamp(6rem,14.5vw,14.5rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] opacity-25 leading-[0.72]"
          style="-webkit-text-stroke: 1px #F32929; -webkit-text-fill-color: transparent;"
        >
          My Exact Design Process
        </div>

        <!-- Main Blog Post Title (Responsive) -->
        <h1 
          class="font-alumni font-bold text-black dark:text-white relative z-10 text-[clamp(5rem,13vw,13rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] xl:mr-12"
          style="line-height: 72%;"
        >
          My Exact Design Process
        </h1>
      </div>

      <!-- Intro Paragraph (Full width, no social share) -->
      <div class="mt-12 relative z-10 ml-0 lg:ml-32 xl:ml-48 max-w-3xl">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          I'm often asked to detail my design process and explain where AI fits into it. I've had this conversation enough times that it felt worth documenting here. The focus of my answer is never "where does AI fit," but rather, "How has AI changed my entire process, and how do I approach work now in ways I didn't in the past?"
        </p>
      </div>

      <!-- Large Hero Image (Right-aligned) -->
      <div class="relative z-10 mt-12 max-w-[900px] ml-auto">
        <img 
          src="/ai-workflow.png" 
          alt="My Exact Design Process - Hero Image"
          class="-mr-4 lg:-mr-8 max-w-4xl w-full h-auto hero-drop-shadow"
        />
      </div>

      <!-- Paragraph Text -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          That's a loaded question with a complex answer. But at the very least, I thought I'd capture that process here for anyone who might be curious to learn about it or try it for themselves. Before I do, here's one important thing to remember: I'm not an expert. I'm a good designer with some novice coding experience, and all of this is the result of continued experimentation.
        </p>
        
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          If you want to learn how to integrate AI into your design workflow and see how it changes your processes, you just have to try. Good, bad, success, failure—it doesn't matter. Learning is the point, not expertise. We're always learning as we go.
        </p>
        
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          With that, here's what I've learned so far.
        </p>
      </div>

      <!-- Step 1 Section -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          Step 1: What Do You Want to Build?
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          While this may seem obvious, the very first things you need are an idea and a specific goal.
        </p>
        
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          You can't really build something without a plan, so every project starts with an idea or a conversation of some sort and carries forward from there. Most of the time, I have a really good idea of what I want, but a good idea doesn't make for a good starting prompt.
        </p>
        
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Take my weather app. The idea was simple: "I just want to see the weather." Too many weather apps show me more ads than forecasts, charge me a subscription, or just don't work. I hate it all. I just want a simple interface that shows me the weather.
        </p>
        
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          Okay, so what next?
        </p>
      </div>

      <!-- Step 2 Section -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          Step 2: Rubber Duck It
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          In other words, talk it out. Rubber-ducking is a term for talking out loud to a rubber duck on your desk. The theory is that explaining your idea out loud is enough to help identify gaps or missing details, while also helping you focus on what matters and get to the heart of the issue.
        </p>
        
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          In this case, my rubber duck is ChatGPT-5 (as of the time of this writing). I start by explaining my idea and encourage ChatGPT to ask questions that help me refine the idea into a tangible goal. What is the build stack? What weather API will we use, and what will it cost? What does MVP look like?
        </p>
        
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          This usually takes 5-10 minutes at most. ChatGPT is pretty good at narrowing things down. Once it does, I prompt it: <em>"Can you take all of this and provide me with an expertly-crafted prompt that I can drop into the project and open in Cursor to build? I would like the output as a project-kickoff.md file that I can download and open in Cursor, not something I copy and paste. Make sure it includes all necessary information to begin the project."</em>
        </p>
      </div>
      
      <!-- Blockquote - Full Width -->
      <div class="w-full max-w-[1600px] mt-16 mb-8">
        <div class="content-stretch flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full">
          <p class="font-alumni font-bold text-[2rem] sm:text-[2.5rem] leading-[1.17] text-black dark:text-white section-shadow tracking-[-0.96px] flex-shrink">
            You can use Claude for that, too. It's also better at creating downloadable files.
          </p>
          <div class="flex items-center justify-center flex-shrink-0 hidden sm:flex">
            <div class="h-px bg-black dark:bg-white w-[154px]"></div>
          </div>
          <p class="font-alumni font-bold text-[2rem] leading-[1.13] text-accent tracking-[-0.64px] flex-shrink-0 whitespace-nowrap">
            Quote
          </p>
        </div>
      </div>

      <!-- Step 3 Section -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          Step 3: Repo, File, Go
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          This is where the fun actually begins. Keeping with my weather app scenario, I create a repo in my GitHub. As a non-engineer, I find it easiest to use the GitHub Desktop app to create a repo and commit/push to GitHub. It makes it dead simple.
        </p>
        
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-2">
          When you create a repo, it creates a folder on your local computer. From there:
        </p>
        
        <ol class="font-lato text-body text-black dark:text-white leading-relaxed list-decimal ml-6 mb-6">
          <li>Take the project-kickoff.md file you downloaded from ChatGPT and drop it into this folder</li>
          <li>Open the root folder of that project in Cursor</li>
          <li>Find and open the .md file (right now it's the only file in the project)</li>
          <li>Drag it into the chat window to reference it</li>
          <li>Prompt Cursor to start</li>
        </ol>
        
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          An example prompt I'd use for a kickoff file is: <em>"I've referenced a markdown file with project kickoff instructions. It should contain everything you need to get started. If you have questions or if anything is unclear, ask before creating any files. Don't assume you know the answer. If you have enough info, begin creating the specified files. When you're done, start a server so I can view the project in my browser."</em>
        </p>
        
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          I find it best to avoid using "Auto" mode when doing this. By default, Cursor tries to use the cheapest AI agent it thinks can successfully complete the project. And it's wrong. Constantly. Right now, for the initial kickoff project, I make sure to select Claude Sonnet 4.5, GPT-5 Codex, or even Composer 1 for this part.
        </p>
        
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          Let it do its thing, then come back to start refining.
        </p>
      </div>

      <!-- Step 4 Section -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          Step 4: Refine, and Refine Again
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          In my experience, it'll do an okay job with that initial kickoff, but it won't be perfect. Most times, especially with a complex project, it's only going to create what's necessary and then await further instructions. Maybe it'll have part of the design, maybe it won't. This is where projects really differ.
        </p>
        
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          In the case of my weather app, I had Figma designs ready to go. The initial prompt said to create the file structure and then await designs. I connected the Figma MCP to Cursor to allow the agent access to my Figma Dev Mode files, and I started feeding it designs bit by bit, section by section, of the initial screen.
        </p>
        
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          The agent gave me suggestions along the way too, such as building with mock locations and data to refine the designs and interactions, and waiting until the end to actually tie in all of the weather API calls and make it function.
        </p>
      </div>

      <!-- Blockquote - Full Width -->
      <div class="w-full max-w-[1600px] mt-8 mb-8">
        <div class="content-stretch flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full">
          <p class="font-alumni font-bold text-[2rem] sm:text-[2.5rem] leading-[1.17] text-black dark:text-white section-shadow tracking-[-0.96px] flex-shrink">
            Refining is a long process. Take your time and don't rush it.
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
          This is the longest part of the process. Some projects I've wrapped up in under an hour, but others have taken weeks. The more complex the project or the more specific the design you've already created, the longer it will generally take.
        </p>
      </div>

      <!-- Left Aligned Image -->
      <div class="relative z-10 mt-8 lg:mt-16 max-w-[1200px]">
            <img 
            src="/break-things.png" 
            alt="Apple iPhone with a broken screen"
            class="-ml-4 lg:-ml-8 max-w-4xl w-full h-auto hero-drop-shadow"
            />
        </div>

      <!-- Step 5 Section -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          Step 5: Unbreak It and Keep Going
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          This is the important part—AI doesn't always get it right. Sometimes it'll make a change and break the entire project. You have two options:
        </p>
        
        <ol class="font-lato text-body text-black dark:text-white leading-relaxed list-decimal ml-6 mb-6">
          <li>Revert back, which is easy and takes a single click</li>
          <li>Tell it everything is broken and try to find any error messages you can paste in</li>
        </ol>
        
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Normally, I'll go with option 2. It didn't delete your entire project—there's probably just a JavaScript error. It can usually fix itself pretty quickly. Just keep experimenting and learning which prompts get you the best results. The trick is to be as specific as possible and provide examples if you can. It's more likely to get it right if you can give it a Figma MCP link than if you just explain what your design looks like. Both will get you there; one just gets you there faster.
        </p>
        
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          The rest of the project is just this: the back and forth inside the AI, saying, "This looks right, but these things are wrong." And you just talk it out until the project is done.
        </p>
      </div>

      <!-- Keep Experimenting Section -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          Keep Experimenting
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          I know you were hoping for some major breakthrough on how all of this works, and maybe I'll come back and update this if some epiphany comes my way. But the truth is, the best way to learn is by doing. Prompt. Get it wrong. Try again. Repeat.
        </p>
        
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          This is all an experiment. What we learn today will help us tomorrow, but it could all change by next year. The most important thing we can do is simply keep learning. Keep coming up with ideas. Keep finding opportunities to experiment in new ways.
        </p>
        
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          And lastly, don't get frustrated. It's going to be a lot of trial and error as you work to figure it out. Growth is never easy, but it is fun if you let it be. You're full of ideas, so now is the time to bring them to life. We've never been more empowered than we are right now. Go build.
        </p>
      </div>

    </section>
  </main>
</template>

<script setup>
// Set up dynamic meta tags for social sharing with Nuxt
useSeoMeta({
  title: 'My Exact Design Process',
  description: 'I\'m often asked to detail my design process and explain where AI fits into it. I\'ve had this conversation enough times that it felt worth documenting here.',
  ogTitle: 'My Exact Design Process',
  ogDescription: 'I\'m often asked to detail my design process and explain where AI fits into it. How has AI changed my entire process, and how do I approach work now in ways I didn\'t in the past?',
  ogImage: 'https://sambuilt.it/ai-workflow.png',
  ogUrl: 'https://sambuilt.it/ai-lab/my-exact-ai-workflow',
  ogType: 'article',
  ogSiteName: 'Sam Daugherty Portfolio',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: 'My Exact Design Process',
  twitterDescription: 'I\'m often asked to detail my design process and explain where AI fits into it. How has AI changed my entire process, and how do I approach work now in ways I didn\'t in the past?',
  twitterImage: 'https://sambuilt.it/ai-workflow.png',
  twitterImageAlt: 'My Exact Design Process'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://sambuilt.it/ai-lab/my-exact-ai-workflow' }
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
