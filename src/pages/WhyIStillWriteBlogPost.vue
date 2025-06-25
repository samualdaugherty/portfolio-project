<template>
  <main class="w-full max-w-[1600px] px-4 lg:px-8">
    <section class="w-full pt-16 sm:pt-24 z-10 pl-0">
      <!-- Blog Post Title with Responsive Background Text -->
      <div class="relative w-full -mb-4 z-10">
        
        <!-- Orange Outlined Background Text (HTML with CSS Stroke) -->
        <div 
          class="absolute z-0 w-[110vw] select-none pointer-events-none left-0 -top-[10%] sm:top-[-5%] lg:top-[-5%] translate-x-[-5vw] font-alumni font-bold uppercase text-[clamp(4.5rem,11.5vw,11.5rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] opacity-25 leading-[0.72]"
          style="-webkit-text-stroke: 1px #F32929; -webkit-text-fill-color: transparent;"
        >
          Why I Still Write, Even When No One's Listening
        </div>

        <!-- Main Blog Post Title (Responsive) -->
        <h1 
          class="font-alumni font-bold text-black dark:text-white relative z-10 text-[clamp(4rem,10vw,10rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] xl:mr-12"
          style="line-height: 72%;"
        >
          Why I Still Write, Even When No One's Listening
        </h1>
      </div>
      
      <!-- Author and Date Details -->
      <div class="mt-8 relative z-10">
        <p class="font-lato text-body text-black dark:text-white">
          7 minute read / by <span class="text-accent">Sam Daugherty</span> / March 23rd, 2025
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
            Some people write because they need to get their thoughts out, or they have a story they want to tell. Others write to remind themselves how they felt at a moment in time. I used to write for the sole purpose of hoping to one day monetize it. Thrilling, right? I was "grinding" because social media told me I needed that "hustle culture." That was a common platitude—never do anything for free. And, well, it almost killed me.
          </p>
        </div>
      </div>

      <!-- Large Hero Image -->
      <div class="relative z-10 mt-8 lg:-mt-24 max-w-[1200px]">
        <img 
          src="/writing-alone.png" 
          alt="Why I Still Write, Even When No One's Listening - Hero Image"
          class="-ml-4 lg:-ml-8 max-w-4xl w-full h-auto hero-drop-shadow"
        />
        <!-- Photo credit -->
        <p class="font-lato font-light text-[12px] text-black dark:text-white mt-1">
            Photo by <a href="https://unsplash.com/@sashafreemind?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">Sasha Freemind</a> on <a href="https://unsplash.com/@sashafreemind?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">Unsplash</a>
        </p>
      </div>

      <!-- Paragraph Text -->
      <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
            See, I used to love to write. I always had a story to tell, or an anecdote I wanted to remember. I'd share short, hilarious conversations with my kids, just so I'd never forget them. I'd share information about the economy, politics, or help connect the dots between history and current events. In essence, I wrote for the sake of writing.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            And then I fell victim to an algorithm that made me feel like I was doing life all wrong.
        </p>
      </div>

      <!-- Blockquote and Paragraph Section -->
      <div class="w-full flex flex-col items-center lg:flex-row gap-12 mt-8 max-w-[1200px]">
            <!-- Paragraph Section -->
            <div class="flex-1">
                <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                    Don't get me wrong. It wasn't just social media changing my perspective. It's that I was at a low point in my life, and social media was there to prey on that feeling. It's what they do best. It's how they radicalize lonely people, cause depression in adolescents, and rip families apart.
                </p>
            </div>

            <!-- Blockquote Section -->
            <div class="flex-1 lg:max-w-md">
                <blockquote class="border-l-[0.5rem] border-accent pl-6">
                <p class="font-alumni font-bold text-[2rem] text-black dark:text-white leading-[.9]">
                    It's how they radicalize lonely people, cause depression in adolescents, and rip families apart.
                </p>
                </blockquote>
            </div>
        </div>

        <!-- Paragraph Text -->
        <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
            <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                I had a void to fill, and social media filled it.
            </p>
        </div>

      <!-- Subtitle and Paragraph Text -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
            <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
                I wasn't supposed to be here
            </h2>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
                I fell into design by accident. It's an interesting story, worth telling in full some day, but ultimately I was given an opportunity to learn design. And that led to a job at a print shop, which led to a job in marketing and design, which led to a long-term friendship with my dear friend, Jess Brown, who introduced me to UX and design for the web. But I didn't want to do it. At least not professionally. It was just fun. It felt like magic to think of an idea and then see it come to life on screen and interact with it.

            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                Despite being good at it, enjoying it, and having relative success, though, I had convinced myself at a young age that I wanted to teach. Not sure why, but it became my goal. And all those years working in design were just to get me by until I could go get a degree in education. And then I did it! I got my degree. I started teaching. It was dreadful and I felt unfulfilled, and also it barely paid enough to cover my bills. And I grew sad.

            </p>
        </div>

        <!-- Right Aligned Image -->
        <div class="relative z-10 mt-8 lg:mt-16 flex flex-col items-end max-w-[1400px]">
            <img 
                src="/empty-classroom.png" 
                alt="Empty classroom with notes on the blackboard"
                class="-ml-4 lg:-ml-8 max-w-4xl w-full h-auto hero-drop-shadow"
            />
            <!-- Photo credit -->
            <p class="font-lato font-light text-[12px] text-black dark:text-white mt-1">
                Photo by <a href="https://unsplash.com/@munjay?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">Mwesigwa Joel</a> on <a href="https://unsplash.com/@munjay?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">Unsplash</a>
            </p>
        </div>

        <!-- Paragraph Text -->
      <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
            Frequently, throughout those years, I found myself doing more and more freelance design or front-end development to make ends meet. And, eventually, I quit teaching altogether and went back to design. But it didn't feel like a strategic choice, it felt like defeat. Like I was giving up. And, I started to grow depressed.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            Instead of getting help, so I could work through those feelings and understand it wasn't defeat, I just turned to my phone for some good old emotional escape.
        </p>
      </div>

      <!-- Subtitle and Paragraph Text -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
            What Not to Do
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2">
            That's when social media got me. I started following designers, and looking at what others were doing for inspiration. Normal stuff. Almost immediately, I started getting bombarded everywhere I went with people telling me a million dollars was right around the corner. I just needed to find my niche, build my personal brand, analyze the stats of every post, every article, measure engagement, and then do more of what works.
        </p>
    </div>

    <!-- Blockquote and Paragraph Section -->
      <div class="w-full flex flex-col items-center lg:flex-row gap-12 mt-8 max-w-[1200px]">
        <!-- Blockquote Section -->
        <div class="flex-1 lg:max-w-md">
          <blockquote class="border-l-[0.5rem] border-accent pl-6">
            <p class="font-alumni font-bold text-[2rem] text-black dark:text-white leading-[.9]">
                I didn't believe it, and it's almost always bullshit, but the story is compelling and the marketing works
            </p>
          </blockquote>
        </div>

        <!-- Paragraph Section -->
        <div class="flex-1">
          <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            Never just write, but hook them. Never tell the whole story. Give them a piece for free, but thats the invite to download your eBook, and then you can market to them. Build a course, sell the course, grow rich, and then start a new business teaching new designers how to do the same thing. That's when you pivot to coaching! I didn't believe it, and it's almost always bullshit, but the story is compelling and the marketing works.
          </p>
        </div>
      </div>

      <!-- Paragraph Text -->
      <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
            <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                It's important to note, it didn't work because it's good advice. It works because I was feeling unfulfilled, and looking to fill a void I didn't know I had. It's not marketing, it's preying on peoples' needs. And it runs rampant across nearly every platform that exists.
            </p>
        </div>

      <!-- Subtitle and Paragraph Text -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
            Finding Success
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
            So I started my grind. I started a new Instagram and LinkedIn account for consulting, started to build my personal brand that was separate from my actual personal life (think about that phrase for a second), and tried to find my niche. I wrote articles, and thought pieces, engaged with everyone on social media, and measured my engagement. I scheduled pieces to go out. I published something every day, measured the results, grew a large following, and gave them more of what they liked.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
            I was no longer designing for fun, I was designing for an audience. I was no longer mentoring, I was coaching. I was no longer writing, I was monetizing an audience. I wasn't sharing, I was meeting demands. I wasn't giving, I was exchanging. Never do anything for free. Especially if you're good at it.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            I was succeeding! I was grinding. I was dying on the inside.
        </p>
      </div>

    <!-- Left Aligned Image -->
    <div class="relative z-10 mt-8 lg:mt-16 max-w-[1200px]">
        <img 
          src="/grinding-away.png" 
          alt="Man grinding a piece of metal in a bench vise while sparks fly"
          class="-ml-4 lg:-ml-8 max-w-4xl w-full h-auto hero-drop-shadow"
        />
        <!-- Photo credit -->
            <p class="font-lato font-light text-[12px] text-black dark:text-white mt-1">
            Photo by <a href="https://unsplash.com/@cmrcn_?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">Cemrecan Yurtman</a> on <a href="https://unsplash.com/photos/a-person-using-a-grinder-on-a-piece-of-metal-MU2wR8smaO4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">Unsplash</a>
        </p>
      </div>

      <!-- Subtitle and Paragraph Text -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
            Grinding Myself Away
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2">
            I actually have a grinder. Like a real grinding wheel and shaping stones. Do you know what a grinder does? It takes away. It grinds away material by shaving off a little tiny bit with every pass. Do it right, and it can clean up a weld or sharpen a blade. Do it wrong, and you'll grind right through your sheet and leave a hole you have to fix, or ruin your project completely.
        </p>
    </div>

    <!-- Blockquote and Paragraph Section -->
    <div class="w-full flex flex-col items-center lg:flex-row gap-12 mt-8 max-w-[1200px]">
            <!-- Paragraph Section -->
            <div class="flex-1">
                <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                    It's why I find it ironic when Hustle Coaches call it “grinding” because that's kind of what it is. When you fall into the trap, you sacrifice a bit of yourself, and the hustle takes away from you with every pass. You stop actually being authentic, and start googling how to sound authentic. And if you don't understand the problem with that, you probably need therapy and not to just work harder.
                </p>
            </div>

            <!-- Blockquote Section -->
            <div class="flex-1 lg:max-w-md">
                <blockquote class="border-l-[0.5rem] border-accent pl-6">
                <p class="font-alumni font-bold text-[2rem] text-black dark:text-white leading-[.9]">
                    If you don't understand the problem with that, you probably need therapy and not to just work harder
                </p>
                </blockquote>
            </div>
        </div>

      <!-- Paragraph Text -->
      <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
            Is that really why we're here? To just let life and work and the quest to stay afloat chip away at us slowly over time until we either have a hole to fix or end up ruined completely? We're not metal or wood. We're not a project. We're humans. Our sheer existence is magical if you really think about it. And we deserve to create magic.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            We left Hustle Culture for Coach Culture<sup>TM</sup>, where everyone has to start a side hustle as a coach of some kind, but it's the same shit in shiny new packaging. I mean, we're still building personal brands, and still marketing ourselves as a product. In the end, we're still desperate for engagement and asking ChatGPT “how can I sound more authentic,” with zero sense of irony and no clue that we've completely lost the plot of life. We can spend all day debating if we did it to ourselves, or if it's the end result of late-stage capitalism, but I'm not here to have that conversation today.
        </p>
      </div>

      <!-- Subtitle and Paragraph Text -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
            <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
                Finding Magic Again
            </h2>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
                I didn't have some epiphany. There wasn't an “aha!” moment where I realized I was doing life wrong. I didn't suddenly change my ways like it's act three of a Rom-Com. I can't even pinpoint when this shift happened. At some point I just burned out. My faux authenticity got the best of me. I became severely depressed and thought all of life was pointless. 

            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                I was no longer finding joy in everyday life. So I just quit. Not a single follower reached out to me and asked where I was or if I was okay. Honestly, though, why would they?

            </p>
        </div>

        <!-- Right Aligned Image -->
        <div class="relative z-10 mt-8 lg:mt-16 flex flex-col items-end max-w-[1400px]">
            <img 
                src="/whats-your-story.png" 
                alt="Neon sign in window with the words 'What's your story?'"
                class="-ml-4 lg:-ml-8 max-w-4xl w-full h-auto hero-drop-shadow"
            />
            <!-- Photo credit -->
            <p class="font-lato font-light text-[12px] text-black dark:text-white mt-1">
                Photo by <a href="https://unsplash.com/@etiennegirardet?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">Etienne Girardet</a> on <a href="https://unsplash.com/photos/black-flat-screen-tv-turned-on-at-the-living-room-EP6_VZhzXM8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">Unsplash</a>
            </p>
        </div>

        <!-- Paragraph Text -->
        <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
            After all, I was making content, not art. Not design. I wasn't making magic, I was creating noise in a noisy world. Again, art and design are magic. 
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
            So is writing.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
            So is anything you create for the simple sake of enjoyment.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
            You have an idea, you start from nothing, and eventually it takes shape and you can see it. Interact with it. Share it. That's magical.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
            If you're doing it for followers, or doing it for the money, it becomes a job. And there's nothing wrong with a job. We all need one. But I just wanted to create something for the sake of creation again. Do something for myself.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
            A few days ago, Facebook showed me a memory. Just a silly quote from my kids. I showed it to my wife, Daryl.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
            “They used to be so funny,” I said.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
            “They're still funny,” she replied. “You just never write it down anymore.”
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            Yeah, I don't. But maybe it's time we did.
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
  title: 'Why I Still Write, Even When No One\'s Listening | Sam Daugherty',
  description: 'Some people write because they need to get their thoughts out. See them more clearly from that 30,000-foot view. I would write for the sole purpose of hoping to one day monetize it. I was "grinding," because social media told me I needed that "hustle culture." There was a common platitude to "never do anything for free." And, well, it almost killed me.',
  image: '/writing-alone.png',
  url: '/writing/why-i-still-write'
}))

// Social sharing functions
const shareToFacebook = () => {
  const url = encodeURIComponent(window.location.href)
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400')
}

const shareToTwitter = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent('Why I Still Write, Even When No One\'s Listening')
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'width=600,height=400')
}

const shareToThreads = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent('Why I Still Write, Even When No One\'s Listening')
  window.open(`https://threads.net/intent/post?text=${text} ${url}`, '_blank', 'width=600,height=400')
}

const shareToBluesky = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent('Why I Still Write, Even When No One\'s Listening')
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