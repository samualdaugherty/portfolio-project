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
          What I Learned Posting Every Day for 90 Days
        </div>

        <!-- Main Blog Post Title (Responsive) -->
        <h1 
          class="font-alumni font-bold text-black dark:text-white relative z-10 text-[clamp(4rem,10vw,9rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] xl:mr-12"
          style="line-height: 72%;"
        >
          What I Learned Posting Every Day for 90 Days
        </h1>
      </div>
      
      <!-- Author and Date Details -->
      <div class="mt-8 relative z-10">
        <p class="font-lato text-body text-black dark:text-white">
          4 minute read / by <span class="text-accent">Sam Daugherty</span> / April 29th, 2025
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
            <h3 class="relative bg-white dark:bg-gray-900 pr-4 font-alumni text-[1.5rem] font-bold text-black dark:text-white">
              Share
            </h3>
          </div>
          
          <!-- Social Icons -->
          <div class="flex flex-row lg:flex-col gap-3">
            <button 
              @click="shareToFacebook"
              class="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              aria-label="Share on Facebook"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
            
            <button 
              @click="shareToTwitter"
              class="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              aria-label="Share on Twitter"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </button>
            
            <button 
              @click="shareToThreads"
              class="w-10 h-10 rounded-full bg-[#000000] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              aria-label="Share on Threads"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 192 192">
                <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"/>
              </svg>
            </button>
            
            <button 
              @click="shareToBluesky"
              class="w-10 h-10 rounded-full bg-[#00A8E8] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              aria-label="Share on Bluesky"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 600 530">
                <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"/>
              </svg>
            </button>
            
            <button 
              @click="shareToLinkedIn"
              class="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
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
            I did it. I did what every guru on the internet says to do. I posted every day. I did it for 90 days straight, and made sure to engage with anyone who liked or commented on my posts. So what did I learn? Did I achieve anything noteworthy? Would I do it again? Well, in order: a lot, absolutely, and that depends.
          </p>
        </div>
      </div>

      <!-- Large Hero Image -->
      <div class="relative z-10 mt-8 lg:-mt-24 max-w-[1200px]">
        <img 
          src="/good-enough-header.png" 
          alt="What I Learned Posting Every Day for 90 Days - Hero Image"
          class="-ml-4 lg:-ml-8 max-w-4xl w-full h-auto hero-drop-shadow"
        />
        <!-- Photo credit -->
        <p class="font-lato font-light text-[12px] text-black dark:text-white mt-1">
            Photo by <a href="https://unsplash.com/@megjenson?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">Meg Jenson</a> on <a href="https://unsplash.com/photos/a-group-of-people-holding-a-sign-eDTuTktfETE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">Unsplash</a>
        </p>
      </div>

      <!-- Paragraph Text -->
      <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          The most important thing I learned, though, is it absolutely sucked. I hated it and considered quitting multiple times. But I'm no quitter, so I kept at it. But I do want to talk about what I hated about it, and discuss why. And then we can discuss whether this is something you'd like to do for yourself. Your mileage may vary.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          The important thing is you read on, so you can get some context. I don't want my story to dissuade you from trying. If you have different goals than me, you may have a different outcome. But this is where I share my experiences and knowledge in the hopes that it helps you; so take this with a grain of salt.
        </p>
      </div>

      <!-- Subtitle and Paragraph Text -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          What Did I Learn?
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 ml-4">
          <span class="-ml-5">1. </span>It's rather challenging to come up with content to write about every day. And I ultimately leaned on ChatGPT to help me come up with new topics or break my existing ones into smaller pieces of content. It's not my normal way of writing, but it was fine. But I also felt it cheapened the experience a bit, because I wasn't really writing from the heart.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 ml-4">
          <span class="-ml-5">2. </span>LinkedIn awards consistency over quality. I continued to gain reach even with posts that weren't good. Low-quality content still got high-quality growth. And that made me sad (a bonus lesson)!
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 ml-4">
          <span class="-ml-5">3. </span>It was a new part-time job. I'm not exaggerating when I say that. Between writing the posts, scheduling them, and interacting with the comments, it consumed a good portion of my week.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 ml-4">
          <span class="-ml-5">4. </span>Everyone is just trying to get noticed. Even those who commented, more often than not, did so for own their profile show up under a popular post. It wasn't engagement, it was an additional avenue of reach for them. The attention economy is depressing as hell.
        </p>
      </div>

      <!-- Right Aligned Image -->
      <div class="relative z-10 mt-8 lg:mt-16 flex flex-col items-end max-w-[1400px]">
            <img 
                src="/look-at-my-trash.png" 
                alt="Graffiti eyes on a wall looking at a trash can"
                class="-ml-4 lg:-ml-8 max-w-4xl w-full h-auto hero-drop-shadow"
            />
            <!-- Photo credit -->
            <p class="font-lato font-light text-[12px] text-black dark:text-white mt-1">
              Photo by <a href="https://unsplash.com/@jontyson?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">Jon Tyson</a> on <a href="https://unsplash.com/photos/black-and-green-trash-bin-beside-blue-wall-2IN7bPiqBCs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">Unsplash</a>
            </p>
        </div>

        <!-- Subtitle and Paragraph Text -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          What Did I Achieve?
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2">
          What do those internet influencers tell you? Turns out it's pretty true. I achieved a dramatic increase in my reach. My following grew exponentially, and people started tagging me, asking for my thoughts on other posts, or hitting me up for advice. So, in a sense, I achieved a growing audience. And a deep dread of feeling like a fraud.
        </p>
      </div>

      <!-- Blockquote and Paragraph Section -->
      <div class="w-full flex flex-col items-center lg:flex-row gap-12 mt-8 max-w-[1200px]">
        <!-- Blockquote Section -->
        <div class="flex-1 lg:max-w-md">
          <blockquote class="border-l-[0.5rem] border-accent pl-6">
            <p class="font-alumni font-bold text-[2rem] text-black dark:text-white leading-[.9]">
              They were low-quality fluff. Who am I possibly influencing with that? Certainly no one.
            </p>
          </blockquote>
        </div>

        <!-- Paragraph Section -->
        <div class="flex-1">
          <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            I achieved all of this success, and people started calling me a "UX Influencer," but I never really said much of value. I had a few posts that provided useful, valuable advice, but I ran out of ideas fairly quickly. ChatGPT provided me with some prompts, and in a few instances, wrote entire posts for me. They were low-quality fluff. Who am I possibly influencing with that? Certainly no one.
          </p>
        </div>
      </div>

      <!-- Paragraph Text -->
      <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          And my immediate next thought was, "Okay, what now?" I have followers, I have engagement, I have an audience, but what do I do with it? Which brings me to my next point.
        </p>
      </div>

      <!-- Subtitle and Paragraph Text -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          Would I Do It Again?
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          Like I said, that depends. Because “what now” is a very valid question after you've built an audience. I didn't have a newsletter, a paid SubStack, or an online course I was trying to sell. And that seems like the whole point of growing a following. I'm not sure I ever want to do any of those things. I tried once, with some success, and it sucked all the joy from my life.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          The biggest issue for me was the time. It is a high-value commodity in my life. I work a full-time job, I have two kids, I have actual friends and family in the real world who want to spend time with me, and adding some fourth thing takes away from all of it. If I had to pick between them, the work would lose every single time. And it's a real choice we have to make sometimes.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          I made it work, but it cost me. To do it well, I was reviewing metrics on my posts and finding topics that resonated the most. Then I tried to come up with new content in that same genre, outline a post, write it, find an image if I needed to, schedule it, and repeat for the next 7 days. It was exhausting.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          If your goal is to build an audience, you'll burn out. <strong>You need to have a plan for what you want to do with that audience.</strong> And it needs to be a good plan.
        </p>
      </div>

      <!-- Left Aligned Image -->
    <div class="relative z-10 mt-8 lg:mt-16 max-w-[1200px]">
        <img 
          src="/yeah-but-no.png" 
          alt="Vespa scooter with a sticker that says 'Yeah, but no'"
          class="-ml-4 lg:-ml-8 max-w-4xl w-full h-auto hero-drop-shadow"
        />
        <!-- Photo credit -->
            <p class="font-lato font-light text-[12px] text-black dark:text-white mt-1">
              Photo by <a href="https://unsplash.com/@heftiba?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">Toa Heftiba</a> on <a href="https://unsplash.com/photos/close-up-photography-of-red-motor-scooter-t5ZzmqiM8bo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">Unsplash</a>
        </p>
      </div>

      <!-- Subtitle and Paragraph Text -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
          Should You Do It?
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
          Should you sell your soul for a dollar? Up to you.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          That's only kind of a joke.
        </p>
      </div>

      <!-- Blockquote and Paragraph Section -->
      <div class="w-full flex flex-col items-center lg:flex-row gap-12 mt-8 max-w-[1200px]">
            <!-- Paragraph Section -->
            <div class="flex-1">
                <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                  Maybe you don't view it that way, but that's ultimately what it felt like to me. I wasn't providing value, I was creating noise. Just repeating the same bullshit everyone else does. Especially when I asked Chat for help, because that's what it does. It just recycles existing content in "my voice," which wasn't really my voice, and made everything sound like a sales pitch. And I hate a sales pitch.
                </p>
            </div>

            <!-- Blockquote Section -->
            <div class="flex-1 lg:max-w-md">
                <blockquote class="border-l-[0.5rem] border-accent pl-6">
                <p class="font-alumni font-bold text-[2rem] text-black dark:text-white leading-[.9]">
                  I wasn't providing value, I was creating noise. Just repeating the same bullshit everyone else does.
                </p>
                </blockquote>
            </div>
        </div>

        <!-- Paragraph Text -->
      <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          My advice, know what you want to talk about. Like, have a real goal that isn't just, “What happens if I do this?”
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          What topics will you discuss? Do you have something of value to add, and how much time are you willing to devote to doing it? Start there, not where I did. It's okay to experiment, but have a goal for it.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          What topics will you discuss? Do you have something of value to add, and how much time are you willing to devote to doing it? Start there, not where I did. It's okay to experiment, but have a goal for it.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          Ultimately, I learned I have no desire to build an audience. If that ever changes, I'll know where to start. At least I learned something along the way.
        </p>
      </div>

    </section>
  </main>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { generateBlogMeta } from '../utils/meta'

// Set up dynamic meta tags for social sharing
useHead(generateBlogMeta({
  title: 'What I Learned Posting Every Day for 90 Days | Sam Daugherty',
  description: 'I did it. I did what every guru on the internet says to do. I posted every day. I did it for 90 days straight, and made sure to engage with anyone who liked or commented on my posts. So what did I learn?',
  image: '/good-enough-header.png',
  url: '/writing/what-i-learned-posting-every-day'
}))

// Social sharing functions
const shareToFacebook = () => {
  const url = encodeURIComponent(window.location.href)
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400')
}

const shareToTwitter = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent('What I Learned Posting Every Day for 90 Days')
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'width=600,height=400')
}

const shareToThreads = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent('What I Learned Posting Every Day for 90 Days')
  window.open(`https://threads.net/intent/post?text=${text} ${url}`, '_blank', 'width=600,height=400')
}

const shareToBluesky = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent('What I Learned Posting Every Day for 90 Days')
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