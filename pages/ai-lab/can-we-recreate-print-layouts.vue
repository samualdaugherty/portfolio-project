<template>
  <main class="w-full max-w-[1600px] px-4 lg:px-8">
    <section class="w-full pt-16 sm:pt-24 z-10 pl-0 max-w-7xl">
      <!-- Title with responsive background text -->
      <div class="relative w-full -mb-4 z-10">
        <div
          class="absolute z-0 w-[110vw] select-none pointer-events-none left-0 -top-[10%] sm:top-[-5%] lg:top-[-5%] translate-x-[-5vw] font-alumni font-bold uppercase text-[clamp(6rem,14.5vw,14.5rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] opacity-25 leading-[0.72]"
          style="-webkit-text-stroke: 1px #F32929; -webkit-text-fill-color: transparent;"
        >
          Recreating Magazine Layouts
        </div>
        <h1
          class="font-alumni font-bold text-black dark:text-white relative z-10 text-[clamp(5rem,13vw,13rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] xl:mr-12"
          style="line-height: 72%;"
        >
          Recreating Magazine Layouts with JavaScript
        </h1>
      </div>

      <div class="mt-16 relative z-10 ml-0 lg:ml-32 xl:ml-48 max-w-3xl">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed italic">
          <strong>Or: How I Learned to Stop Worrying and Trust the Algorithm</strong>
        </p>
      </div>

      <!-- Intro paragraph -->
      <div class="mt-8 relative z-10 ml-0 lg:ml-32 xl:ml-48 max-w-3xl">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          The web was supposed to get magazine-style layouts. Back around 2014, there was this beautiful CSS specification called "Regions" that would have let content flow naturally between different containers scattered across your page—exactly like text flows between columns in a magazine spread, but with vastly more creative control than just using CSS columns.
        </p>
      </div>

      <!-- Hero image (right-aligned) -->
      <div class="relative z-10 mt-12 max-w-[900px] ml-auto">
        <img
          src="/print-layouts-post.png"
          alt="Recreating Magazine Layouts - Hero Image"
          class="-mr-4 lg:-mr-8 max-w-4xl w-full h-auto hero-drop-shadow"
        />
      </div>

      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          It never happened.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Safari supported it briefly. Chrome experimented with it. Then browsers killed it, citing performance concerns and implementation complexity. And we were left with the same grid-based layouts that make every modern website look nearly identical.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Meanwhile, print designers continued creating these incredible, dynamic layouts where text could snake around images, flow between scattered text boxes, and create visual hierarchy that actually guided your eye through the story. The web felt static and lifeless in comparison.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed font-semibold">
          So I asked a simple question: Could we fake it with JavaScript?
        </p>
      </div>

      <!-- The Experiment -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          The Experiment
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          I didn't actually know if we could do it. I'm comfortable with HTML and CSS, and I can write basic JavaScript, but building a sophisticated text-measurement and content-flow system was absolutely beyond my skill level.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          But I had <strong>Claude</strong>.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          The entire premise of this project was to see if AI-assisted development could lower the barrier to experimental web design. Could I conceptually understand what I wanted and have AI handle the technical complexity?
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          The answer turned out to be yes. But with some fascinating complications.
        </p>
      </div>

      <!-- How it works -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          How It Actually Works
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          The core concept is deceptively simple:
        </p>
        <ol class="font-lato text-body text-black dark:text-white leading-relaxed list-decimal ml-6 mb-6">
          <li><strong>Structure your content as semantic JSON blocks</strong> (paragraphs, headings, lists)</li>
          <li><strong>Define regions</strong> as empty HTML containers positioned anywhere on the page</li>
          <li><strong>Measure</strong> how much content fits in each region using "ghost rendering"</li>
          <li><strong>Flow</strong> content progressively through regions until everything is placed</li>
          <li><strong>Recalculate</strong> everything when the viewport changes</li>
        </ol>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          The devil, of course, is in the details.
        </p>
      </div>

      <!-- Blockquote -->
      <div class="w-full max-w-[1600px] mt-12 mb-12">
        <div class="content-stretch flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full">
          <p class="font-alumni font-bold text-[2rem] sm:text-[2.5rem] leading-[1.17] text-black dark:text-white section-shadow tracking-[-0.96px] flex-shrink">
            Enter: The weird world of Ghost Rendering
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
          You can't just count characters to know if text will fit. Different fonts, sizes, line heights, and responsive breakpoints all affect the actual space text occupies. The solution was to create <strong>invisible test containers</strong> with identical styling, render content into them, measure the pixel height, then remove them. And do it all in milliseconds.
        </p>
        <pre class="font-mono text-sm bg-white/70 dark:bg-black/30 border border-black/10 dark:border-white/10 rounded-lg p-4 whitespace-pre-wrap break-words">
function measureContent(block, targetRegion) {
  const testDiv = document.createElement('div');
  testDiv.className = targetRegion.className;
  testDiv.style.visibility = 'hidden';
  testDiv.style.position = 'absolute';
  testDiv.style.width = getComputedStyle(targetRegion).width;
  
  testDiv.innerHTML = renderBlock(block);
  document.body.appendChild(testDiv);
  
  const height = testDiv.scrollHeight;
  document.body.removeChild(testDiv);
  
  return height;
}
        </pre>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-6">
          It sounds inefficient, but browsers are <em>fast</em>. The entire measurement and flow process happens in about 50-100 milliseconds, even with complex layouts. Gotta love the modern internet!
        </p>
      </div>

      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <h3 class="font-alumni text-[2.25rem] font-bold text-black dark:text-white mb-2 leading-[1.1]">
          The Flow Algorithm
        </h3>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Once you can measure content accurately, the flow logic becomes manageable. Loop through each region, progressively add blocks until you run out of space, then move to the next region with the remaining content.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          The actual implementation included dozens of edge cases—orphan protection, keeping headings with their following paragraphs, handling images and special formatting—but the fundamental concept stayed simple.
        </p>
      </div>

      <!-- Image -->
      <div class="w-full max-w-[1200px] mt-12">
        <img
          src="/experimental-layouts-1.png"
          alt="Experimental layouts example"
          class="w-full h-auto hero-drop-shadow"
        />
      </div>

      <!-- What We Built -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          What We Built
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          Using this system, we created four completely different experimental layouts:
        </p>
        <ol class="font-lato text-body text-black dark:text-white leading-relaxed list-decimal ml-6 mb-6">
          <li><strong>The Intro</strong>: Dramatic "EXPERI-MENTAL" typography with three-column responsive flow</li>
          <li><strong>Algorithm Sadness</strong>: <a href="https://www.experimental-layouts.com/algorithm/index.html" class="text-accent font-semibold hover:underline" target="_blank" rel="noopener">Emotional narrative</a> about AI and recommendation systems</li>
          <li><strong>Stoic Drama</strong>: Horizontal scrolling with Slack-style dark UI and ancient philosophy</li>
          <li><strong>How We Did It</strong>: A technical deep dive with magazine-style grid columns</li>
        </ol>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          Each page uses the same underlying flow system but with completely different visual treatments. The <a href="https://www.experimental-layouts.com/" class="text-accent font-semibold hover:underline" target="_blank" rel="noopener">intro page</a> has that bold, fragmented magazine aesthetic. The <a href="https://www.experimental-layouts.com/stoic-drama/" class="text-accent font-semibold hover:underline" target="_blank" rel="noopener">horizontal page</a> feels like a physical scroll. That <a href="https://www.experimental-layouts.com/how-we-did-it/" class="text-accent font-semibold hover:underline" target="_blank" rel="noopener">technical page</a> uses a responsive CSS Grid where columns wrap to new 100vh "rows" as the viewport shrinks, just like pages in a magazine.
        </p>
      </div>

      <!-- The AI Development Process -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          The AI Development Process
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          Here's the part that won't surprise you: <strong>I could not have built this alone.</strong>
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          The JavaScript measurement logic, the responsive reflow calculations, the DOM manipulation performance optimizations; these required expertise I simply don't have. But through conversation with Claude in Cursor, we:
        </p>
        <ul class="font-lato text-body text-black dark:text-white leading-relaxed list-disc ml-6 mb-6">
          <li><strong>Conceptualized the architecture</strong> through back-and-forth discussion</li>
          <li><strong>Generated complex algorithms</strong> with detailed prompts</li>
          <li><strong>Debugged edge cases</strong> by describing observed behavior</li>
          <li><strong>Iterated on performance</strong> through targeted refinements</li>
          <li><strong>Built responsive systems</strong> I didn't fully understand at first</li>
        </ul>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          My process looked like this:
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-2">
          "I want text to flow between scattered containers, like CSS Regions would have done."
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-2">
          "The columns are getting too narrow on wide screens. Can we use utility classes for min/max widths?"
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          "The scroll snap isn't working. It's still scrolling normally."
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          And Claude would generate working solutions, explain the approach, and help me understand what was actually happening under the hood.
        </p>
      </div>

      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-8">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          What would have been <strong>months</strong> of research and trial-and-error became <strong>hours</strong> of directed problem-solving.
        </p>
      </div>

      <!-- What Did We Actually Learn -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          What Did We Actually Learn?
        </h2>

        <h3 class="font-alumni text-[2.25rem] font-bold text-black dark:text-white mb-2 leading-[1.1] mt-6">
          1. Magazine Layouts Are Possible (But Are They Worth It?)
        </h3>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          We proved it's technically feasible to recreate print-style layouts with JavaScript. The performance is good, the responsive behavior works, and the visual results feel genuinely different from typical websites.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          But was it worth the effort? <strong>I'm gonna go with no.</strong>
        </p>

      </div>

      <div class="w-full max-w-[1200px] mt-8">
        <img
          src="/experimental-layouts-2.png"
          alt="Experimental layouts comparison"
          class="w-full h-auto hero-drop-shadow"
        />
      </div>

      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-8">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-8 mb-6">
          For starters, it stopped making sense below roughly 900px, where it just had to revert to a traditional stacked website. This took significantly more time than building a traditional site, and it really only looks cool on <em>really big</em> monitors.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Secondly, the responsiveness created cascading problems we had to solve through iteration. Content authoring is more complex because of the JSON structure. And while the results might look cool, I'm not convinced they meaningfully improve the user experience.
        </p>

        <h3 class="font-alumni text-[2.25rem] font-bold text-black dark:text-white mb-2 leading-[1.1] mt-8">
          2. AI Development Is Transformative (But Requires New Skills)
        </h3>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          The way we work <em>is</em> <router-link to="/ai-lab/the-difference-a-year-makes" class="text-accent font-semibold hover:underline">changing forever</router-link>. Complex technical challenges that would normally require specialized expertise can now be tackled through conversation and iteration with AI tools.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          But this isn't "AI does everything for you." It's a different kind of skill and expertise:
        </p>
        <ul class="font-lato text-body text-black dark:text-white leading-relaxed list-disc ml-6 mb-6">
          <li><strong>Knowing what to ask for</strong> and how to describe problems clearly</li>
          <li><strong>Understanding when AI needs context</strong> and what that context should be</li>
          <li><strong>Recognizing when solutions are wrong</strong> and iterating toward correctness</li>
          <li><strong>Debugging AI-generated code</strong> by explaining observed behavior</li>
        </ul>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          My prompting skills improved drastically through this project. I learned to provide Figma links for extracting content, to specify column placement explicitly, to break complex requests into sequential steps.
        </p>

        <h3 class="font-alumni text-[2.25rem] font-bold text-black dark:text-white mb-2 leading-[1.1] mt-8">
          3. Creative Constraints Breed Innovation (Sometimes)
        </h3>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Structuring everything as semantic JSON blocks actually improved our content authoring. Thinking about "regions" and "flow order" forced us to consider reading patterns more deliberately than we might have with traditional layouts.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          But there's a flip side: <strong>sometimes constraints just make things harder without adding value.</strong> There were moments where I just wanted to write HTML and this system felt like fighting the platform. I can't help but think the AI struggled with it because it even <em>it</em> was thinking, "This doesn't make sense. Why are we doing this?"
        </p>
      </div>

      <!-- Blockquote -->
      <div class="w-full max-w-[1600px] mt-12 mb-12">
        <div class="content-stretch flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full">
          <p class="font-alumni font-bold text-[2rem] sm:text-[2.5rem] leading-[1.17] text-black dark:text-white section-shadow tracking-[-0.96px] flex-shrink">
            No, really. Why are we doing this?
          </p>
          <div class="flex items-center justify-center flex-shrink-0 hidden sm:flex">
            <div class="h-px bg-black dark:bg-white w-[154px]"></div>
          </div>
          <p class="font-alumni font-bold text-[2rem] leading-[1.13] text-accent tracking-[-0.64px] flex-shrink-0 whitespace-nowrap">
            Quote
          </p>
        </div>
      </div>

      <!-- The Honest Conclusion -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          The Honest Conclusion
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          Would I use this approach for a real client project? <strong>Definitely not.</strong> Unless they intentionally wanted it to be weird.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          The development complexity, maintenance overhead, and edge cases don't justify the aesthetic gains for most use cases. Especially when those gains are really only noticeable <em>above</em> 1600px. Which rules out most site visitors. There are diminishing returns on visual distinctiveness when users just want to read your content on their phone.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          But would I recommend this kind of experimental project to other developers? <strong>Absolutely.</strong>
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-2">
          The value wasn't in shipping a production-ready text flow system. The value was in:
        </p>
        <ul class="font-lato text-body text-black dark:text-white leading-relaxed list-disc ml-6 mb-6">
          <li><strong>Learning how AI can accelerate experimental development</strong></li>
          <li><strong>Understanding the tradeoffs between visual creativity and practical functionality</strong></li>
          <li><strong>Pushing the boundaries of what's possible</strong> on the web</li>
          <li><strong>Improving my ability to collaborate with AI tools</strong> through better prompting and iteration</li>
        </ul>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          This was less about "look what we built" and more about "look what we learned by building it."
        </p>
      </div>

      <!-- Try It Yourself -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          Try It Yourself
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          The full codebase is open source <a href="https://github.com/samualdaugherty/experimental-layouts" class="text-accent font-semibold hover:underline" target="_blank" rel="noopener">on my repo</a>. You can see all four experimental pages, read through the text flow algorithm, and adapt it for your own projects.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Will you use it? I don't know. Should you use it? That depends on whether you really enjoy being frustrated several evenings in a row.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          But if you want to experiment with magazine-style layouts on the web, the code is there. And if you want to see what AI-assisted development looks like in practice, the entire conversation history is documented.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Because in the end, that might be the most interesting part of all: <strong>this entire project is a case study in human-AI collaboration.</strong> The code, the designs, the problem-solving process is all a conversation between a designer with a vision and an AI with technical implementation skills.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          The web may not have gotten CSS Regions.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          But with a little creativity (and a lot of JavaScript), we can fake it pretty convincingly.
        </p>
        <hr class="border-black/10 dark:border-white/10 my-8" />
        <p class="font-lato text-body text-black dark:text-white leading-relaxed font-semibold">
          <strong>Thank you for coming to my TED Talk.</strong>
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
useSeoMeta({
  title: 'Recreating Magazine Layouts with JavaScript (and a Little Help from AI)',
  description: 'The web was supposed to get magazine-style layouts. So I asked a simple question: Could we fake it with JavaScript?',
  ogTitle: 'Recreating Magazine Layouts with JavaScript (and a Little Help from AI)',
  ogDescription: 'The web was supposed to get magazine-style layouts. So I asked a simple question: Could we fake it with JavaScript?',
  ogImage: 'https://sambuilt.it/print-layouts-post.png',
  ogUrl: 'https://sambuilt.it/ai-lab/can-we-recreate-print-layouts',
  ogType: 'article',
  ogSiteName: 'Sam Daugherty Portfolio',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Recreating Magazine Layouts with JavaScript (and a Little Help from AI)',
  twitterDescription: 'The web was supposed to get magazine-style layouts. So I asked a simple question: Could we fake it with JavaScript?',
  twitterImage: 'https://sambuilt.it/print-layouts-post.png',
  twitterImageAlt: 'Recreating Magazine Layouts with JavaScript (and a Little Help from AI)'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://sambuilt.it/ai-lab/can-we-recreate-print-layouts' }
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
