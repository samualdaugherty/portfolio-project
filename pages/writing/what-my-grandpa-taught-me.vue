<template>
  <main class="w-full max-w-[1600px] px-4 lg:px-8">
    <section class="w-full pt-16 sm:pt-24 z-10 pl-0">
      <!-- Blog Post Title with Responsive Background Text -->
      <div class="relative w-full -mb-4 z-10">
        
        <!-- Orange Outlined Background Text (HTML with CSS Stroke) -->
        <div 
          class="absolute z-0 w-[110vw] select-none pointer-events-none left-0 -top-[5%] sm:top-[-5%] lg:top-[-5%] translate-x-[-5vw] font-alumni font-bold uppercase text-[clamp(4.25rem,11vw,10.5rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] opacity-25 leading-[0.72]"
          style="-webkit-text-stroke: 1px #F32929; -webkit-text-fill-color: transparent;"
        >
          What My Grandpa Taught Me About Hard Work and Happiness
        </div>

        <!-- Main Blog Post Title (Responsive) -->
        <h1 
          class="font-alumni font-bold text-black dark:text-white relative z-10 text-[clamp(4rem,10vw,9rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] xl:mr-12"
          style="line-height: 72%;"
        >
          What My Grandpa Taught Me About Hard Work and Happiness
        </h1>
      </div>
      
      <!-- Author and Date Details -->
      <div class="mt-8 relative z-10">
        <p class="font-lato text-body text-black dark:text-white">
          5 minute read / by <span class="text-accent">Sam Daugherty</span> / July 16th, 2025
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
            Like most people, I spent a good deal of time trying to figure out what I wanted to do with my life. And, like most people, that usually meant choosing a job. Like that's what life is? Work?
          </p>
        </div>
      </div>

      <!-- Large Hero Image -->
      <div class="relative z-10 mt-8 lg:-mt-40 max-w-[900px]">
        <img 
          src="/grandpa-header.png" 
          alt="What My Grandpa Taught Me About Hard Work and Happiness - Hero Image"
          class="-ml-4 lg:-ml-8 max-w-4xl w-full h-auto hero-drop-shadow"
        />
        <!-- Photo credit -->
        <p class="font-lato font-light text-[12px] text-black dark:text-white mt-1">
            Photo by <a href="https://unsplash.com/@rodlong?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">Rod Long</a> on <a href="https://unsplash.com/photos/an-older-woman-holding-a-babys-hand-y0OAmd_COUM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">Unsplash</a>
        </p>
      </div>

      <!-- Paragraph Text -->
      <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Even when we ask kids, “What do you want to do when you grow up?” we're really asking about careers. But is that all there is? Is that the meaning of life? Is that all we're destined to be?
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          My grandpa didn't think so.
        </p>
      </div>

       <!-- Subtitle and Paragraph Text -->
       <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
            <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
                Meet Clarence
            </h2>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2">
                To understand the lesson, you need to meet my grandpa, Clarence. He wasn't a big man, but he didn't need to be. He was kind. Quiet. Thoughtful. The kind of person who listened more than he spoke. And always had time to hear your whatever story you had to tell him—something I've yet to master myself as a parent.

            </p>
        </div>

        <!-- Blockquote and Paragraph Section -->
      <div class="w-full flex flex-col items-center lg:flex-row gap-12 mt-8 max-w-[1200px]">
            <!-- Paragraph Section -->
            <div class="flex-1">
                <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                    We didn't live nearby and couldn't visit often, but when we did, he always made it special. I still remember his dog waking me at 5:30 a.m. so I could ride with him to get coffee and donuts. He always took me—maybe because I was the youngest. Maybe because I was the favorite. Probably because I was the favorite. That makes sense.
                </p>
            </div>

            <!-- Blockquote Section -->
            <div class="flex-1 lg:max-w-md">
                <blockquote class="border-l-[0.5rem] border-accent pl-6">
                <p class="font-alumni font-bold text-[2rem] text-black dark:text-white leading-[.9]">
                    Probably because I was the favorite. That makes sense.
                </p>
                </blockquote>
            </div>
        </div>

        <!-- Paragraph Text -->
      <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
            It was never just a donut run though. It was an adventure in socializing. He knew everyone. He had time for everyone. He made it an experience. He didn't wake me up at 5:30 to get donuts. He woke me up so I could meet his friends and listen to their stories.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            I learned a lot of lessons from my grandpa. I could write a book with everything he taught me. But this is the one I think about the most. Especially now that I spend my time helping other people so much.
        </p>
      </div>

      <!-- Subtitle and Paragraph Text -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
            <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
                Do What You Love?
            </h2>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
                Every time I browse social media, someone's telling me the secret to happiness. “Do what you love.” “Find your passion.” “Turn your hobby into your job!”
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                It sounds reasonable, right? You spend most of your life working—why not love it? It consumes so much of your day, it felt important to make those hours count.
            </p>
        </div>

        <!-- Right Aligned Image -->
        <div class="relative z-10 mt-8 lg:mt-16 flex flex-col items-end max-w-[1400px]">
            <img 
                src="/grandpa-holding-hands.png" 
                alt="Grandpa and grandchild holding hands outside"
                class="-ml-4 lg:-ml-8 max-w-4xl w-full h-auto hero-drop-shadow"
            />
            <!-- Photo credit -->
            <p class="font-lato font-light text-[12px] text-black dark:text-white mt-1">
                Photo by <a href="https://unsplash.com/@sebastiano_piazzi?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">Sebastiano Piazzi</a> on <a href="https://unsplash.com/photos/a-man-and-a-child-walking-on-a-sidewalk-bSMiODjc_Iw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">Unsplash</a>
            </p>
        </div>

        <!-- Paragraph Text -->
        <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                That's what I believed when I found myself on the front porch with my grandpa, looking for clarity. Feeling stuck.
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                I had just been laid off from a graphic design job at Caterpillar—the same company he retired from. It had been a good job, but boring. I was working at a bike shop now, happy and enjoying it, despite being poor. But it left me wondering what came next.
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                Then he asked me the question.
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                <strong>“What do you want to do?”</strong>
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                “I don't know,” I said. “I liked design, but I wasn't doing anything cool. It was just typical marketing stuff. It wasn't exciting.”
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                He looked at me and said, “No. What do you want to do? Not where do you want to work.”
            </p>
        </div>

        <!-- Subtitle and Paragraph Text -->
        <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
            <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
                The Question
            </h2>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
                It caught me off guard. What did he mean?
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                He didn't elaborate. Just let the question hang in the air for a moment, sipping his soda.
            </p>
        </div>

        <!-- Blockquote and Paragraph Section -->
      <div class="w-full flex flex-col items-center lg:flex-row gap-12 mt-8 max-w-[1200px]">
        <!-- Blockquote Section -->
        <div class="flex-1 lg:max-w-md">
          <blockquote class="border-l-[0.5rem] border-accent pl-6">
            <p class="font-alumni font-bold text-[2rem] text-black dark:text-white leading-[.9]">
                No one ever told me I should love my job. You just do the work.
            </p>
          </blockquote>
        </div>

        <!-- Paragraph Section -->
        <div class="flex-1">
          <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            Finally, he said, “So what if your job was boring? You think I liked working in a factory for thirty-five years? It wasn't very much fun. No one ever told me I should love my job. You just do the work. Was it a good job? Did it pay well? Give you room to grow? Afford your hobbies?”
          </p>
        </div>
      </div>

       <!-- Paragraph Text -->
       <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                “Yeah,” I said. “But what's the point of life if we spend one third of it bored?”
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                “The point? Your work isn't what you do,” he said. “You just need it to pay you enough to do what you want—and give you the time to do it.”
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                He gestured to the chairs we were sitting on. The chairs he built. On the porch he built too.
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                <strong>“Your job isn't your life. Don't be miserable all day, but why does it have to fulfill you?”</strong>
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                What was this old codger talking about? Such nonsense. Or was it?
            </p>
        </div>

        <!-- Subtitle and Paragraph Text -->
        <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
            <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
                Actually... Do What You Love
            </h2>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
                It took a while to really get what he meant.
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                Your job is just a tool. It's there to support the life you want to build. The time, money, and opportunity it gives you; that's its value. That's how it fulfills you.
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                What fulfills me isn't in my Figma canvas. It's out in the world. It's hiking mountains with my kids, visiting every national park before they grow up. Building something in the garage with my wife. Giving my children the tools to chase their own curiosity and creativity.
            </p>
        </div>

        <!-- Left Aligned Image -->
      <div class="relative z-10 mt-8 lg:mt-16 max-w-[1200px]">
        <img 
          src="/fist-bump.png" 
          alt="Man fist-bumping a child"
          class="-ml-4 lg:-ml-8 max-w-4xl w-full h-auto hero-drop-shadow"
        />
        <!-- Photo credit -->
            <p class="font-lato font-light text-[12px] text-black dark:text-white mt-1">
                Photo by <a href="https://unsplash.com/@markusspiske?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">Markus Spiske</a> on <a href="https://unsplash.com/photos/person-holding-babys-hand-MbG7kwWptII?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">Unsplash</a>
        </p>
      </div>

      <!-- Paragraph Text -->
      <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                My job? That's what funds the good stuff. And when I stopped demanding it make me feel whole, something funny happened: I actually got better at it. I appreciated it even more. I worked harder every day. That opened even more opportunities over the years.
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                And it let me do more of what I love. Just outside of work.
            </p>
        </div>

        <!-- Subtitle and Paragraph Text -->
        <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
            <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
                What Do You Really Want?
            </h2>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
                So maybe the influencers are half right? You should figure out what fulfills you. But maybe—just maybe—your job isn't part of that equation anymore.
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                The only time work should factor in is when you ask: <i>What does my dream cost? And how much time will I need?</i>
            </p>
        </div>

        <!-- Large Text -->
        <div class="ml-0 lg:ml-32 xl:ml-24 max-w-5xl mt-8">
            <h3 class="font-alumni text-[2rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
                Then you find the job that pays for it. Learn new skills if you have to. There's nothing stopping you.
            </h3>            
        </div>

        <!-- Paragraph Text -->
        <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-8">
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                Your job is a tool. That's all. And the real challenge? Finding the right tool for the life you want.
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                Turning your hobbies into work often ruins them anyway. They stop being joyful. They become obligations. Then you're stuck searching for a new passion, just to make your old one feel fun again. So don't let anyone tell you to turn your hobby into your job. Fuck that noise. Trust me.
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                Also, a job that fulfills and sustains you financially? That's a unicorn. And too many of us waste years chasing it instead of living today. Right now. No Sunday Scaries anymore.
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                I know I rambled a bit. But the question still stands:
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                <strong>What do you want to do—outside of work?</strong>
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                Start there. Let your job serve that rich life, not the other way around.
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                I hope I see you out there.
            </p>
        </div>

    </section>
  </main>
</template>

<script setup lang="ts">
// Social sharing functions
const shareToFacebook = () => {
  const url = encodeURIComponent(window.location.href)
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400')
}

const shareToTwitter = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent('What My Grandpa Taught Me About Hard Work and Happiness')
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'width=600,height=400')
}

const shareToThreads = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent('What My Grandpa Taught Me About Hard Work and Happiness')
  window.open(`https://threads.net/intent/post?text=${text} ${url}`, '_blank', 'width=600,height=400')
}

const shareToBluesky = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent('What My Grandpa Taught Me About Hard Work and Happiness')
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