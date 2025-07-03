<template>
  <main class="w-full max-w-[1600px] px-4 lg:px-8">
    <section class="w-full pt-16 sm:pt-24 z-10 pl-0">
      <!-- Blog Post Title with Responsive Background Text -->
      <div class="relative w-full -mb-4 z-10">
        
        <!-- Orange Outlined Background Text (HTML with CSS Stroke) -->
        <div 
          class="absolute z-0 w-[110vw] select-none pointer-events-none left-0 -top-[10%] sm:top-[-5%] lg:top-[-5%] translate-x-[-5vw] font-alumni font-bold uppercase text-[clamp(6rem,15.5vw,14.5rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] opacity-25 leading-[0.72]"
          style="-webkit-text-stroke: 1px #F32929; -webkit-text-fill-color: transparent;"
        >
          Kids, It's Time to Build the Thing
        </div>

        <!-- Main Blog Post Title (Responsive) -->
        <h1 
          class="font-alumni font-bold text-black dark:text-white relative z-10 text-[clamp(5rem,14vw,13rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] xl:mr-12"
          style="line-height: 72%;"
        >
          Kids, It's Time to Build the Thing
        </h1>
      </div>
      
      <!-- Author and Date Details -->
      <div class="mt-8 relative z-10">
        <p class="font-lato text-body text-black dark:text-white">
          4 minute read / by <span class="text-accent">Sam Daugherty</span> / June 20th, 2025
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
            I know. I know! All these posts about vibe coding are getting old and annoying. But I felt compelled to write one, because it's something that all Designers should attempt. Not just attempt either, but, like, really dive in. Try to take that idea you've had brewing for years and try to build it. Because I did that, and it was shockingly easy.
          </p>
        </div>
      </div>

      <!-- Large Hero Image -->
      <div class="relative z-10 mt-8 lg:-mt-24 max-w-[900px]">
        <img 
          src="/eat-sleep-code.png" 
          alt="Kids, It's Time to Build the Thing - Hero Image"
          class="-ml-4 lg:-ml-8 max-w-4xl w-full h-auto hero-drop-shadow"
        />
        <!-- Photo credit -->
        <p class="font-lato font-light text-[12px] text-black dark:text-white mt-1">
            Photo by <a href="https://unsplash.com/@next_academy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent">NEXT Academy</a> on <a href="https://unsplash.com/@next_academy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent">Unsplash</a>
        </p>
      </div>

      <!-- Paragraph Text -->
      <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            There are plenty of good articles on Vibe Coding, so I don't necessarily need to add to the noise. This is more my story about bringing an idea to life, and how it motivated me to keep going and try new things. I even learned some foundational skills along the way, like getting a much better grasp on Tailwind. So, hopefully, it inspires you to bring your idea to life!
        </p>
      </div>

      <!-- My Failed Idea Section -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          My Failed Idea
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2">
            Background info: I used to teach Econ in another life and—shocker—I'm someone who considers himself a big advocate for workers and fair pay. So, something I've always been adamantly aware of is how inflation eats our wages year after year. And it happens slowly enough that we don't realize it. That annual 3% pay increase? It seems normal, but it's half the reason you're no better off despite years of hard work.
        </p>
      </div>

      <!-- Blockquote and Paragraph Section -->
      <div class="w-full flex flex-col items-center lg:flex-row gap-12 mt-8 max-w-[1200px]">
        <!-- Blockquote Section -->
        <div class="flex-1 lg:max-w-md">
          <blockquote class="border-l-[0.5rem] border-accent pl-6">
            <p class="font-alumni font-bold text-[2rem] text-black dark:text-white leading-[.9]">
              For years, I worked on an idea of building my own calculator that laid it all out in plain language. But I could never figure out how to build it.
            </p>
          </blockquote>
        </div>

        <!-- Paragraph Section -->
        <div class="flex-1">
          <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            One way to know is to enter your starting wage and start date into the Bureau of Labor Statistics' inflation calculator and see what it says. And it'll spit out a number, but you need context for it to make sense. For years, I worked on an idea to create my own calculator that spelled it out in plain language. But I could never figure out how to build it. I could code the UI just fine and get it working right, but making API calls and JavaScript failed every time. For years, I attempted this! And never once succeeded.
          </p>
        </div>
      </div>

      <!-- Fateful Evening Section -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
            The Fateful Evening
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2">
            Then came a cold winter day, when I was traveling for work, and found myself in a hotel with several hours to kill. My software engineering friends had been talking about Cursor for days, and how much it's helped them. It was too cold to go outside (if you've ever experienced a Chicago winter, you know what I'm talking about). So I downloaded Cursor, uploaded a screenshot of my design, typed up what I was trying to do, and… meh.
        </p>
      </div>

      <!-- Two Images Section -->
      <div class="ml-0 xl:ml-72 max-w-6xl mt-12 max-w-[1200px]">
        <div class="flex flex-col lg:flex-row gap-4">
          <!-- Mobile Image -->
          <div class="flex-shrink-0">
            <img 
              src="/wvi-mobile.png" 
              alt="WVI Mobile Screenshot"
              class="w-full lg:h-[400px] lg:w-auto object-contain hero-drop-shadow"
            />
          </div>
          
          <!-- Desktop Image -->
          <div class="flex-grow-0">
            <img 
              src="/wvi-desktop.png" 
              alt="WVI Desktop Screenshot"
              class="w-full lg:h-[400px] object-contain hero-drop-shadow"
            />
          </div>
        </div>
      </div>

      <!-- Three Paragraphs -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
            But that's learning, right? Turns out it couldn't really "see" my screenshot in the same way that you or I can see an image. It was trying to read metadata, and it did okay. But that's when I started my long journey of learning how to write better prompts. And, by long journey, I mean about an hour of trial and error.
        </p>

        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
            What I thought would be another failed attempt turned into a fully functioning, online calculator that was <a href="https://wagevsinflation.com" class="text-accent font-bold hover:underline" target="_blank" rel="noopener noreferrer">live for the world to use</a> in just under 90 minutes. Granted, this is a single page and fairly simple, but something I spent years trying to do myself was finished faster than watching a movie on Netflix. It blew my mind!
        </p>

        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            But, more importantly, it inspired me to dust off some of my other ideas.
        </p>
      </div>

      <!-- Working on Now Section -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
            What I'm working on now
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2">
            So far, I've tried building a native iOS app. It's an interval timer for working out (still working on that one), and it's stupid how complicated it is. Not the development of it, but all the rules around a timer, and what Apple will and won't let you do. I'll write a post about that process soon, depending on whether I succeed or fail. I'll write the post either way, but the outcome will dictate what I write.
        </p>
      </div>

        <!-- Blockquote and Paragraph Section -->
        <div class="w-full flex flex-col items-center lg:flex-row gap-12 mt-8 max-w-[1200px]">
            <!-- Paragraph Section -->
            <div class="flex-1">
                <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                    It also helped me realize I could ditch expensive no-code subscriptions like Framer and just vibe code my portfolio from scratch. Yes, this very website you're reading right now. I was paying $120/yr to host my portfolio on Framer, and I rebuilt the whole thing in the evenings over a couple of weeks, and I'm hosting it on Vercel for free. It even built a whole ass blog for me that would have cost extra to create in Framer. I didn't even have to pay the $20/mo for Cursor (although I did).
                </p>
            </div>

            <!-- Blockquote Section -->
            <div class="flex-1 lg:max-w-md">
                <blockquote class="border-l-[0.5rem] border-accent pl-6">
                <p class="font-alumni font-bold text-[2rem] text-black dark:text-white leading-[.9]">
                    It also helped me realize I could ditch expensive no-code subscriptions like Framer, and just vibe code it for free.
                </p>
                </blockquote>
            </div>
        </div>

        <!-- Two Paragraphs -->
        <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-8">
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                Yes, using AI saved me money. Even though it costs money.
            </p>

            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                Next, I've been considering getting my old consulting website back online, building a different blog not related to my job, and even planning and designing a social media app that will probably go nowhere because I'm one person and don't know how to moderate content. And we all know how much the worst people in society will ruin something if you can't stop them from uploading shit to it.
            </p>
        </div>

        <!-- Working on Now Section -->
        <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
            <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
                So What About You?
            </h2>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
                That was ultimately the point of this post: What ideas do you have, and how can you bring them to life? As designers, it's incredibly hard to build something if you're not an engineer, and learning code feels like having a second job. Because, well, it kind of is?
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                If you haven't tried it yet, I can't stress enough how this is a turning point in the way we work. I truly believe it is. Whether it's a good one or not, I don't know. But that shouldn't stop you from bringing your ideas to life. That thing you've always wanted to build? Go build it! That portfolio you designed but had to settle for a Squarespace template? Go fucking build it! Because nothing is stopping you now. If you can type, you can create it.
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                What a wild time to be alive.
            </p>
        </div>


    </section>
  </main>
</template>

<script setup>
// Set up dynamic meta tags for social sharing with Nuxt
const { $config } = useNuxtApp()

useSeoMeta({
  title: 'Kids, It\'s Time to Build the Thing | Sam Daugherty',
  description: 'I know. I know! All the posts about vibe coding are getting old and annoying, but I felt compelled to write one, because it\'s something that all Designers should attempt. Like, really try to take that idea you\'ve had brewing for years and try to build it. Because I did that, and it was shockingly easy.',
  ogTitle: 'Kids, It\'s Time to Build the Thing | Sam Daugherty',
  ogDescription: 'I know. I know! All the posts about vibe coding are getting old and annoying, but I felt compelled to write one, because it\'s something that all Designers should attempt. Like, really try to take that idea you\'ve had brewing for years and try to build it. Because I did that, and it was shockingly easy.',
  ogImage: 'https://sambuilt.it/eat-sleep-code.png',
  ogUrl: 'https://sambuilt.it/writing/kids-time-to-build',
  ogType: 'article',
  ogSiteName: 'Sam Daugherty Portfolio',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Kids, It\'s Time to Build the Thing | Sam Daugherty',
  twitterDescription: 'I know. I know! All the posts about vibe coding are getting old and annoying, but I felt compelled to write one, because it\'s something that all Designers should attempt. Like, really try to take that idea you\'ve had brewing for years and try to build it. Because I did that, and it was shockingly easy.',
  twitterImage: 'https://sambuilt.it/eat-sleep-code.png',
  twitterImageAlt: 'Kids, It\'s Time to Build the Thing'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://sambuilt.it/writing/kids-time-to-build' }
  ]
})

// Social sharing functions
const shareToFacebook = () => {
  const url = encodeURIComponent(window.location.href)
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
}

const shareToTwitter = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent("Kids, It's Time to Build the Thing")
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank')
}

const shareToThreads = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent("Kids, It's Time to Build the Thing")
  window.open(`https://threads.net/intent/post?text=${text} ${url}`, '_blank')
}

const shareToBluesky = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent("Kids, It's Time to Build the Thing")
  window.open(`https://bsky.app/intent/compose?text=${text} ${url}`, '_blank')
}

const shareToLinkedIn = () => {
  const url = encodeURIComponent(window.location.href)
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank')
}
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
</style>  