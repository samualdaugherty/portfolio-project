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
          The Worst Time to Prepare for a Layoff Is After It Happens
        </div>

        <!-- Main Blog Post Title (Responsive) -->
        <h1 
          class="font-alumni font-bold text-black dark:text-white relative z-10 text-[clamp(4rem,10vw,9rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] xl:mr-12"
          style="line-height: 72%;"
        >
          The Worst Time to Prepare for a Layoff Is After It Happens
        </h1>
      </div>
      
      <!-- Author and Date Details -->
      <div class="mt-8 relative z-10">
        <p class="font-lato text-body text-black dark:text-white">
          5 minute read / by <span class="text-accent">Sam Daugherty</span> / June 6th, 2025
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
            Layoffs don't seem to come with a warning, at least not here in the United States. Mine certainly didn't and I was left confused and bewildered after the pre-recorded video call ended. How did this happen? Why didn't I see it coming? Why was it so impersonal and cold? Everything I'm about to share with you, I learned the hard way.
          </p>
        </div>
      </div>

      <!-- Large Hero Image -->
      <div class="relative z-10 mt-8 lg:-mt-24 max-w-[1200px]">
        <img 
          src="/layoffs-happen-header.png" 
          alt="The Worst Time to Prepare for a Layoff Is After It Happens - Hero Image"
          class="-ml-4 lg:-ml-8 max-w-4xl w-full h-auto hero-drop-shadow"
        />
        <!-- Photo credit -->
        <p class="font-lato font-light text-[12px] text-black dark:text-white mt-1">
            Photo by <a href="https://unsplash.com/@1walter2?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent">Johann Walter Bantz</a> on <a href="https://unsplash.com/photos/man-in-black-and-white-striped-long-sleeve-shirt-Clv9DfJLwac?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent">Unsplash</a>
        </p>
      </div>

       <!-- Paragraph Text -->
        <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                So there I am, working away, when a meeting pops up on my calendar. It's scheduled bright and early the next day, at 9am, and the whole company is invited. I was immediately curious, because the meeting invite lacked any sort of information on what it was about. The next day, I signed in to find a simple recorded message: The company was burning cash, things were looking grim, and they had to let us go.
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                Half of the company staff gone in the four minutes it took to watch the video. In those four minutes, I already lost access to every platform and technology the company had. No messages, no emails, and no access to any of my work. The fuck?! How was I going to update a portfolio, write case studies, and show my work when I no longer had access to any of it?.
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                The panic was intense.
            </p>
        </div>

        <!-- Subtitle and Paragraph Text -->
        <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
            <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
                It Doesn't Have to Be This Way
            </h2>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2">
                It happens to most of us at some point, but you don't have to be blindsided and unprepared like I was. I had to learn these lessons the hard way, but my goal is that you never have to.

            </p>
        </div>

        <!-- Right Aligned Image -->
        <div class="relative z-10 mt-8 lg:mt-16 flex flex-col items-end max-w-[1400px]">
            <img 
                src="/crying-layoff.png" 
                alt="Man rubbing a tear away"
                class="-ml-4 lg:-ml-8 max-w-4xl w-full h-auto hero-drop-shadow"
            />
            <!-- Photo credit -->
            <p class="font-lato font-light text-[12px] text-black dark:text-white mt-1">
                Photo by <a href="https://unsplash.com/@tompumford?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent">Tom Pumford</a> on <a href="https://unsplash.com/photos/man-wiping-his-tears-T5lmpSYxnSU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent">Unsplash</a>
            </p>
        </div>

        <!-- Paragraph Text -->
        <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                First, a couple things to be aware of. Like it or not, you need to face these truths:
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                <strong>No job is guaranteed to be forever.</strong> There are too many external factors affecting business growth and longevity. Economies crash, markets wane, and competition arrives. It happens.
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                Second, <strong>there are usually signs.</strong> Is the company reducing spending? Taking longer to approve expenses? Growing too fast without a plan? Look for the signs and stay diligent. You may not be privy to all of this information, but always keep an ear out for any news.
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                Lastly, <strong>sometimes there are no warning signs at all.</strong> But you can still be prepared. It's about preparation, consistency, and reflection. And, most importantly, doing all of this while you still have a job, before you ever need it.
            </p>
        </div>

        <!-- Left Aligned Image -->
        <div class="relative z-10 mt-8 lg:mt-16 max-w-[1200px]">
            <img 
            src="/wrapping-knuckles.png" 
            alt="Man wrapping his knuckles in fabric tape preparing for a fight"
            class="-ml-4 lg:-ml-8 max-w-4xl w-full h-auto hero-drop-shadow"
            />
            <!-- Photo credit -->
            <p class="font-lato font-light text-[12px] text-black dark:text-white mt-1">
                Photo by <a href="https://unsplash.com/@payam__tahery?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent">Payam Tahery</a> on <a href="https://unsplash.com/photos/man-in-blue-top-raZ1Ga6PLr4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent">Unsplash</a>
            </p>
        </div>

        <!-- Paragraph Text -->
        <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
            <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
                1. Keep Track of the Work You're Doing
            </h2>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2">
                This may seem obvious, but people can often <a href="https://www.thinkific.com/blog/ebbinghaus-forgetting-curve/" class="text-accent font-bold hover:underline" target="_blank">forget what they've worked on</a> after just a few days. I <router-link to="/writing/how-one-app-changed-my-work" class="text-accent font-bold hover:underline">keep a journal</router-link> of the problems I'm solving, the lessons I'm learning, and the successes and failures of the project. I make notes about meeting discussions, product feedback, roadmap changes, and any success stories or pain points we discuss. Anything relevant to my work and, therefore, my portfolio, goes in these notes tagged #keepforlater.
            </p>
        </div>

        <!-- Blockquote and Paragraph Section -->
        <div class="w-full flex flex-col items-center lg:flex-row gap-12 mt-8 max-w-[1200px]">
            <!-- Paragraph Section -->
            <div class="flex-1">
                <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                    Also, I keep examples of my work whenever I'm allowed (ask your manager for permission before downloading any files). In my journal entry, I'll link to the Figma files and note anything important, but I'll also download a copy of the project and keep it for future use in my personal Figma account. Remember, you can lose access to Figma without warning.
                </p>
            </div>

            <!-- Blockquote Section -->
            <div class="flex-1 lg:max-w-md">
                <blockquote class="border-l-[0.5rem] border-accent pl-6">
                <p class="font-alumni font-bold text-[2rem] text-black dark:text-white leading-[.9]">
                    Ask your manager for permission before downloading any files or assets from your company projects
                </p>
                </blockquote>
            </div>
        </div>

         <!-- Paragraph Text -->
         <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                When I have some downtime, I compile the important stuff. In Day One, I'll review that #keepforlater tag and gather everything useful for an update, including links to relevant files and documents, and make sure to highlight any key metrics.
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                Doing all of this doesn't come naturally to me. I promise I'm not an overly-organized person. At first, I relied heavily on scheduled time in my calendar and reminders so I didn't forget to do it. Use whatever tools are necessary to maintain your momentum.
            </p>
        </div>

        <!-- Paragraph Text -->
        <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
            <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
                2. Update Your Resume and Portfolio Often
            </h2>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
                Using everything from the previous section, I update my resume and portfolio before it becomes urgent. I try to do this quarterly if I have anything worth adding. I even schedule a day to do it in my calendar so I don't forget.
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                I redefine my role if needed, update bullet points, the scope of my work, and make plans to update my portfolio with any new projects. This includes gathering screenshots, writing case studies, and <em>actually</em> publishing those updates (or at least saving them for later). If you do it regularly, it takes a few hours. If you wait 5 years to do it (speaking from experience), it will take weeks. Be sure to include successes, especially if you can quantify them (ie, <em>after launching this new feature, conversions increased by 10%.</em>).
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                This is the most important part about being prepared for a layoff. Especially the portfolio aspect if your field requires visuals. Writing case studies can be time-consuming and nerve-wracking on a good day; trying to do it in the fresh panic of being suddenly unemployed? That's a hard no from me.
            </p>
        </div>

        <!-- Paragraph Text -->
        <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
            <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
                3. Network, Network, Network
            </h2>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2">
                I can't stress this enough. Having great notes, a solid portfolio, and being prepared for interviews is only effective when you can land an interview. In the tech world, that almost always requires networking with recruiters or hiring managers. Which is why I continue to grow my network no matter regardless of employment status.

            </p>
        </div>

      <!-- Blockquote and Paragraph Section -->
      <div class="w-full flex flex-col items-center lg:flex-row gap-12 mt-8 max-w-[1200px]">
        <!-- Blockquote Section -->
        <div class="flex-1 lg:max-w-md">
          <blockquote class="border-l-[0.5rem] border-accent pl-6">
            <p class="font-alumni font-bold text-[2rem] text-black dark:text-white leading-[.9]">
                No sane person likes being on LinkedIn, so consider it a necessary evil if you really need to
            </p>
          </blockquote>
        </div>

        <!-- Paragraph Section -->
        <div class="flex-1">
          <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            I try to stay active on LinkedIn and stay connected with relevant recruiters in my field. Honestly, this works better than anything else I've ever tried. No sane person loves being on LinkedIn, so consider it a necessary evil if you really need to. But stay in contact with them and send them referrals whenever possible. If you know someone looking for a job, refer them. Being a resource to your network is better than constantly taking from it. Always give more than you take.
          </p>
        </div>
      </div>

      <!-- Paragraph Text -->
      <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
                This can really help you land on your feet when the inevitable happens. When I got laid off a while back, I reached out to my network and said, "I got laid off, do you have any jobs that might work for me?" In the first week, I had 8 opportunities for screenings or interviews scheduled with hiring managers.
            </p>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                Am I lucky? Yeah. There's a bit of luck involved in that, especially with timing. In a down market, it may not have been so quick. But preparation and consistency will allow you to capitalize on that luck when it <em>does</em> come your way. Conversely, being unprepared will <em>always</em> set you back.
            </p>
        </div>

        <!-- Right Aligned Image -->
        <div class="relative z-10 mt-8 lg:mt-16 flex flex-col items-end max-w-[1400px]">
            <img 
                src="/should-i-be-worried.png" 
                alt="Sign reading should I be worried?"
                class="-ml-4 lg:-ml-8 max-w-4xl w-full h-auto hero-drop-shadow"
            />
            <!-- Photo credit -->
            <p class="font-lato font-light text-[12px] text-black dark:text-white mt-1">
                Photo by <a href="https://unsplash.com/@danika_anya?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent">Danika Perkinson</a> on <a href="https://unsplash.com/photos/brown-bird-on-black-metal-bridge-during-daytime-10IE8OhWsT0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent">Unsplash</a>
            </p>
        </div>

        <!-- Paragraph Text -->
        <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
            <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
                The TL;DR
            </h2>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
                You can never be too prepared to be on the job hunt. With the corporate world the way it is, it's always a matter of <em>when</em>—not <em>if</em>—you get laid off. The best way to be prepared is to build the proper habits now, before you need to find a new job.
            </p>
            <ol class="list-decimal pl-5 sm:pl-8 text-black dark:text-white text-body mb-6">
                <li class="mb-2">Keep a daily/weekly journal of your work. Link any files/assets for every project, track the results and outcomes, and tag them with relevant comments to save for later.</li>
                <li class="mb-2">Periodically compile all of those notes and files into a case study or portfolio update, and check to make sure your resume is accurate with any job responsibility changes.</li>
                <li class="mb-2">Make a habit of networking. LinkedIn is great, but there are other places to do it as well, including local groups and meetups. And then be an asset to those connections. Don't just take from them; offer up recommendations, and offer to help when you can.</li>
            </ol>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                There's no better time to start preparing than right now.
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
  title: 'The Worst Time to Prepare for a Layoff Is After It Happens | Sam Daugherty',
  description: 'Layoffs don\'t seem to come with a warning, at least not in the U.S. Mine certainly didn\'t and I was left confused and bewildered after the call ended. Everything I\'m about to share with you, I learned the hard way.',
  image: '/layoffs-happen-header.png',
  url: '/writing/worst-time-to-prepare'
}))

// Social sharing functions
const shareToFacebook = () => {
  const url = encodeURIComponent(window.location.href)
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400')
}

const shareToTwitter = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent('The Worst Time to Prepare for a Layoff Is After It Happens')
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'width=600,height=400')
}

const shareToThreads = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent('The Worst Time to Prepare for a Layoff Is After It Happens')
  window.open(`https://threads.net/intent/post?text=${text} ${url}`, '_blank', 'width=600,height=400')
}

const shareToBluesky = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent('The Worst Time to Prepare for a Layoff Is After It Happens')
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