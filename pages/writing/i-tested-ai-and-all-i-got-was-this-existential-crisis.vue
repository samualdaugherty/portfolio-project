<template>
  <main class="w-full max-w-[1600px] px-4 lg:px-8">
    <section class="w-full pt-16 sm:pt-24 z-10 pl-0">
      <!-- Blog Post Title with Responsive Background Text -->
      <div class="relative w-full -mb-4 z-10">
        
        <!-- Orange Outlined Background Text (HTML with CSS Stroke) -->
        <div 
          class="absolute z-0 w-[110vw] select-none pointer-events-none left-0 -top-[10%] sm:top-[-5%] lg:top-[-5%] translate-x-[-5vw] font-alumni font-bold uppercase text-[clamp(4.5rem,11.5vw,10.5rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] opacity-25 leading-[0.72]"
          style="-webkit-text-stroke: 1px #F32929; -webkit-text-fill-color: transparent;"
        >
          I Tested AI, and All I Got Was This Existential Crisis
        </div>

        <!-- Main Blog Post Title (Responsive) -->
        <h1 
          class="font-alumni font-bold text-black dark:text-white relative z-10 text-[clamp(4rem,10vw,9rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] xl:mr-12"
          style="line-height: 72%;"
        >
          I Tested AI, and All I Got Was This Existential Crisis
        </h1>
      </div>
      
      <!-- Author and Date Details -->
      <div class="mt-8 relative z-10">
        <p class="font-lato text-body text-black dark:text-white">
          4 minute read / by <span class="text-accent">Sam Daugherty</span> / August 21st, 2025
        </p>
      </div>

      <!-- Intro and Social Share Section -->
      <div class="mt-12 relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
        
        <!-- Social Share Section (appears first on mobile, right side on desktop) -->
        <div class="order-1 lg:order-2 flex-shrink-0 lg:ml-8">
          <!-- Social Share Title with Line -->
          <div class="relative mb-0 lg:mb-4">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full h-[1px] bg-accent"></div>
            </div>
            <h3 class="relative bg-white dark:bg-black pr-4 font-alumni text-[1.5rem] font-bold text-black dark:text-white dark:text-white">
              Share
            </h3>
          </div>
          
          <!-- Social Icons -->
          <div class="flex flex-row lg:flex-col gap-3">
            <button 
              @click="shareToFacebook"
              class="w-10 h-10 rounded-full bg-transparent flex items-center justify-center text-black dark:text-white hover:opacity-80 transition-opacity"
              aria-label="Share on Facebook"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
            
            <button 
              @click="shareToTwitter"
              class="w-10 h-10 rounded-full bg-transparent flex items-center justify-center text-black dark:text-white hover:opacity-80 transition-opacity"
              aria-label="Share on Twitter"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </button>
            
            <button 
              @click="shareToThreads"
              class="w-10 h-10 rounded-full bg-transparent flex items-center justify-center text-black dark:text-white hover:opacity-80 transition-opacity"
              aria-label="Share on Threads"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 192 192">
                <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"/>
              </svg>
            </button>
            
            <button 
              @click="shareToBluesky"
              class="w-10 h-10 rounded-full bg-transparent flex items-center justify-center text-black dark:text-white hover:opacity-80 transition-opacity"
              aria-label="Share on Bluesky"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 600 530">
                <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"/>
              </svg>
            </button>
            
            <button 
              @click="shareToLinkedIn"
              class="w-10 h-10 rounded-full bg-transparent flex items-center justify-center text-black dark:text-white hover:opacity-80 transition-opacity"
              aria-label="Share on LinkedIn"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Intro Paragraph (appears second on mobile, left side on desktop) -->
        <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl">
          <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            I've grown to love AI. At first, it felt like a necessity: "I'd better learn this before it takes my job." But then I realized that I can do so much more with it, and my use of AI over the last six months has increased exponentially as a result. Every new experiment or test sparks a flood of ideas. And it's truly magical. But, every time I write a prompt, I know I'm destroying entire communities… and the planet. And I don't like the way it makes me feel.
          </p>
        </div>
      </div>

      <!-- Large Hero Image -->
      <div class="relative z-10 mt-8 lg:-mt-24 max-w-[900px]">
        <img 
          src="/existential-crisis-header.png" 
          alt="I Tested AI, and All I Got Was This Existential Crisis - Hero Image"
          class="-ml-4 lg:-ml-8 max-w-4xl w-full h-auto hero-drop-shadow"
        />
        <!-- Photo credit -->
        <p class="font-lato font-light text-[12px] text-black dark:text-white mt-1">
            Photo by <a href="https://unsplash.com/@alexdinaut?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">ALEXANDRE DINAUT</a> on <a href="https://unsplash.com/photos/person-holding-yellow-and-black-smiley-balloon-pgYPX-Cy3iE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">Unsplash</a>
        </p>
      </div>

      <!-- Paragraph Text -->
      <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
          <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
            I know I'm not alone in this either. I posed the question recently and got a mix of responses that made me feel less alone, but not any better. Every day, there's a new article about how <a href="https://futurism.com/ai-data-center-water" class="text-accent" target="_blank">AI is ruining water supplies</a>, <a href="https://www.npr.org/2024/09/20/nx-s1-5120581/three-mile-island-nuclear-power-plant-microsoft-ai" class="text-accent" target="_blank">building their own power plants</a>, or <a href="https://www.reuters.com/sustainability/climate-energy/meta-signs-power-agreement-with-constellation-nuclear-plant-2025-06-03/" class="text-accent" target="_blank">using enough energy</a> to power millions of homes.
          </p>
          <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
            And, if you sit and dwell on it, that's kind of fucked up. I mean, I'm a proponent of nuclear energy, despite all the fear-mongering around it. But cleaner sources of energy were supposed to help us save the world, not <a href="https://news.mit.edu/2025/explained-generative-ai-environmental-impact-0117" class="text-accent" target="_blank">speed up its destruction</a>.
          </p>
          <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            And if that wasn't depressing enough, there's another angle that hits me even harder: what it's doing to our kids.
          </p>
      </div>

      <!-- Subtitle and Paragraph Text -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
          <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
            It's Always About the Kids
          </h2>
          <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
            Recently, there's been a lot of research showing that increased use of AI is <a href="https://tech.co/news/another-study-ai-making-us-dumb" class="text-accent" target="_blank">making us all dumber</a>, but that's especially harmful for kids who are using it as a substitute for critical thinking at a time when they should be strengthening those skills. And, worst of all, AI can tell you <a href="https://news.northeastern.edu/2025/07/31/chatgpt-suicide-research/" class="text-accent" target="_blank">how to commit suicide</a>. Something that's already increasing amongst teens.
          </p>
          <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            The ethical problems surrounding AI are prolific. But so are the potential ways in which it can help us. It's both the problem and the solution, in more ways than one. But we haven't solved for the problematic parts yet. It's why I won't let my own children use it.
          </p>
      </div>

      <!-- Blockquote and Paragraph Section -->
      <div class="w-full flex flex-col items-center lg:flex-row gap-12 mt-8 max-w-[1200px]">
            <!-- Paragraph Section -->
            <div class="flex-1">
                <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                    Don't get me wrong. They can use it with me, like when we used ChatGPT to create a summer reading list based on their interests. And my daughter and I made Godzilla Cats in Midjourney, which is certainly fun. But I'm keeping them from it for as long as I can. I worry that it will destroy their ability to research and think for themselves. I want it to become a tool, not a crutch. Adolescent years are a crucial time in brain development.
                </p>
            </div>

            <!-- Blockquote Section -->
            <div class="flex-1 lg:max-w-md">
                <blockquote class="border-l-[0.5rem] border-accent pl-6">
                <p class="font-alumni font-bold text-[2rem] text-black dark:text-white leading-[.9]">
                    I'm keeping them from it for as long as I can. I want it to become a tool, not a crutch.
                </p>
                </blockquote>
            </div>
       </div>

        <!-- Paragraph Text -->
      <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
          <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            And, for that, I feel like a huge hypocrite. They see me use it. They hear me talk about the things I'm building with it. They know I'm a prolific user. My actions don't match my words. But my brain is done developing, or at least I think it is.
          </p>
      </div>

      <!-- Subtitle and Paragraph Text -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
          <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
            It's Social Media All Over Again
          </h2>
          <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
            As I type these paragraphs, I see a strong correlation to the rise of Social Media. When MySpace came out, it felt magical too. Humans across the globe were in this place, and we were all connected. The potential for good was calling to us. I have IRL friends that I first met online.
          </p>
      </div>

      <!-- Left Aligned Image -->
      <div class="relative z-10 mt-8 lg:mt-16 max-w-[1200px]">
            <img 
            src="/lying-in-dread.png" 
            alt="Boy lying on the floor feeling existential dread"
            class="-ml-4 lg:-ml-8 max-w-4xl w-full h-auto hero-drop-shadow"
            />
            <!-- Photo credit -->
            <p class="font-lato font-light text-[12px] text-black dark:text-white mt-1">
                Photo by <a href="https://unsplash.com/@malidesha?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">mali desha</a> on <a href="https://unsplash.com/photos/man-in-black-jacket-and-pants-sitting-on-stairs-mY-6bncc3rw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">Unsplash</a>
            </p>
        </div>

        <!-- Paragraph Text -->
      <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
          <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
            Then we let the worst people ruin it all. Once the dollars poured in, it became about data mining, rage-baiting, and doing everything algorithmically possible to <a href="https://www.bbc.com/news/technology-58570353" class="text-accent" target="_blank">destroy our self-esteem</a> and keep us scrolling. Ten years later, we used this magical connector-of-all-peoples to <a href="https://systemicjustice.org/article/facebook-and-genocide-how-facebook-contributed-to-genocide-in-myanmar-and-why-it-will-not-be-held-accountable/" class="text-accent" target="_blank">orchestrate actual genocides</a> and the <a href="https://www.bigissue.com/opinion/social-media-fascism-elon-musk-john-bird/" class="text-accent" target="_blank">rise of fascism in the West</a> again. And we continue finding new ways to make it even worse, every day.
          </p>
          <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
            Just like with social media and the organizations trying to force ethics upon it, we have organizations clamoring to create “ethical AI.” None of it is working. And again, I tell my kids it's a terrible place full of the worst of humanity, while they watch me use it and share reels with my wife.
          </p>
          <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            I know. <strong>I'm a hypocrite.</strong>
          </p>
      </div>

      <!-- Subtitle and Paragraph Text -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
          <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
            Don't Worry, I'll Live
          </h2>
          <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
            So how can I know all of this about the destruction and the hypocrisy, and still keep using AI? I wish I had some neat answer, some advice to help you not feel like shit every time you prompt it for a recipe. But I don't. That's the existential crisis I live in daily.
          </p>
      </div>

      <!-- Blockquote and Paragraph Section -->
      <div class="w-full flex flex-col items-center lg:flex-row gap-12 mt-8 max-w-[1200px]">
            <!-- Paragraph Section -->
            <div class="flex-1">
                <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                    My feed is split between “how to write better prompts” and “every time you use ChatGPT, a dolphin dies.” Okay, maybe not quite that extreme, but close enough. We're certainly inching toward making whole regions of the planet unlivable.
                </p>
            </div>

            <!-- Blockquote Section -->
            <div class="flex-1 lg:max-w-md">
                <blockquote class="border-l-[0.5rem] border-accent pl-6">
                <p class="font-alumni font-bold text-[2rem] text-black dark:text-white leading-[.9]">
                    We're certainly inching toward making whole regions of the planet unlivable.
                </p>
                </blockquote>
            </div>
       </div>

       <!-- Paragraph Text -->
      <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
          <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
            Data is powerful, but storing and processing it at this scale will destroy us.
          </p>
          <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
            Yet I'm still prompting. Still teaching people how to talk to AI for better results. I know I'm a hypocrite. But I don't know how else to be. Struggling to stay in survival mode, just for the sake of bucking the system, seems like a no-win situation. It's harming myself and my family, all for the pride of holding my head high and saying, “At least I'm not one of <em>those</em> people!”
          </p>
          <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
            Or, perhaps I've just gotten used to comfort. Embracing AI seems like the only path to maintaining that and continuing to be this. Be one of <em>those people</em>.
          </p>
          <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            One day, I'll learn how to feel about that. For now, I'll ask ChatGPT how to cope with it.
          </p>
      </div>

    </section>
  </main>
</template>

<script setup lang="ts">
// Set up dynamic meta tags for social sharing with Nuxt
useSeoMeta({
  title: 'I Tested AI, and All I Got Was This Existential Crisis',
  description: 'I\'ve grown to love AI. At first, it felt like a necessity: "I\'d better learn this before it takes my job." But then I realized that I can do so much more with it, and my use of AI over the last six months has increased exponentially as a result. Every new experiment or test sparks a flood of ideas. And it\'s truly magical. But, every time I write a prompt, I know I\'m destroying entire communities… and the planet. And I don\'t like the way it makes me feel.',
  ogTitle: 'I Tested AI, and All I Got Was This Existential Crisis',
  ogDescription: 'I\'ve grown to love AI. At first, it felt like a necessity: "I\'d better learn this before it takes my job." But then I realized that I can do so much more with it, and my use of AI over the last six months has increased exponentially as a result. Every new experiment or test sparks a flood of ideas. And it\'s truly magical. But, every time I write a prompt, I know I\'m destroying entire communities… and the planet. And I don\'t like the way it makes me feel.',
  ogImage: 'https://sambuilt.it/existential-crisis-header.png',
  ogUrl: 'https://sambuilt.it/writing/i-tested-ai-and-all-i-got-was-this-existential-crisis',
  ogType: 'article',
  ogSiteName: 'Sam Daugherty Portfolio',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: 'I Tested AI, and All I Got Was This Existential Crisis',
  twitterDescription: 'I\'ve grown to love AI. At first, it felt like a necessity: "I\'d better learn this before it takes my job." But then I realized that I can do so much more with it, and my use of AI over the last six months has increased exponentially as a result. Every new experiment or test sparks a flood of ideas. And it\'s truly magical. But, every time I write a prompt, I know I\'m destroying entire communities… and the planet. And I don\'t like the way it makes me feel.',
  twitterImage: 'https://sambuilt.it/existential-crisis-header.png',
  twitterImageAlt: 'I Tested AI, and All I Got Was This Existential Crisis'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://sambuilt.it/writing/i-tested-ai-and-all-i-got-was-this-existential-crisis' }
  ]
})

// Social sharing functions
const shareToFacebook = () => {
  const url = encodeURIComponent(window.location.href)
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400')
}

const shareToTwitter = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent('I Tested AI, and All I Got Was This Existential Crisis')
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'width=600,height=400')
}

const shareToThreads = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent('I Tested AI, and All I Got Was This Existential Crisis')
  window.open(`https://threads.net/intent/post?text=${text} ${url}`, '_blank', 'width=600,height=400')
}

const shareToBluesky = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent('I Tested AI, and All I Got Was This Existential Crisis')
  window.open(`https://bsky.app/intent/compose?text=${text} ${url}`, '_blank', 'width=600,height=400')
}

const shareToLinkedIn = () => {
  const url = encodeURIComponent(window.location.href)
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=600,height=400')
}
</script>

<style scoped>
.hero-drop-shadow {
  filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
}
</style>
