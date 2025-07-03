<template>
  <main class="w-full max-w-[1600px] px-4 lg:px-8">
    <section class="w-full pt-16 sm:pt-24 z-10 pl-0">
      <!-- Blog Post Title with Responsive Background Text -->
      <div class="relative w-full -mb-4 z-10">
        
        <!-- Orange Outlined Background Text (HTML with CSS Stroke) -->
        <div 
          class="absolute z-0 w-[100vw] max-w-[1700px] select-none pointer-events-none left-0 -top-[10%] sm:top-[-5%] lg:top-[-5%] translate-x-[-5vw] font-alumni font-bold uppercase text-[clamp(4.5rem,11.5vw,10.5rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] opacity-25 leading-[0.72]"
          style="-webkit-text-stroke: 1px #F32929; -webkit-text-fill-color: transparent;"
        >
          How One App Changed the Way I Work (and Think)
        </div>

        <!-- Main Blog Post Title (Responsive) -->
        <h1 
          class="font-alumni font-bold text-black dark:text-white relative z-10 text-[clamp(4rem,10vw,9rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] xl:mr-12"
          style="line-height: 72%;"
        >
          How One App Changed the Way I Work (and Think)
        </h1>
      </div>
      
      <!-- Author and Date Details -->
      <div class="mt-8 relative z-10">
        <p class="font-lato text-body text-black dark:text-white">
          4 minute read / by <span class="text-accent">Sam Daugherty</span> / May 7th, 2025
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
            Imagine this: you've been at your job for 8 years and you're ready for a change. You dust off your old resume to update it, look at your portfolio website if you have one, and realize all of it is shit. Your current job isn't even on your resume, let alone the two promotions you got. When did you get those? Not sure. What did you do in each role? When did you launch that great new product feature? Last year? The year before? Do you have metrics to demonstrate your success? No? Can you find them? I got anxious just typing that.
          </p>
        </div>
      </div>

      <!-- Large Hero Image -->
      <div class="relative z-10 mt-8 lg:-mt-12 max-w-[1200px]">
        <img 
          src="/day-one-header.png" 
          alt="How One App Changed the Way I Work (and Think) - Hero Image"
          class="-ml-4 lg:-ml-8 max-w-4xl w-full h-auto hero-drop-shadow"
        />
        <!-- Photo credit -->
        <p class="font-lato font-light text-[12px] text-black dark:text-white mt-1">
          Photo by <a href="https://unsplash.com/@findezukunft?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">Finde Zukunft</a> on <a href="https://unsplash.com/photos/man-in-black-t-shirt-holding-white-printer-paper-0gj1gfvm008?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">Unsplash</a>
        </p>
      </div>

      <!-- Paragraph Text -->
      <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Now, imagine you just got laid off and you're doing this in panic mode, wondering if you're going to starve and become homeless in the throes of volatile capitalism. Trust me, it happens! I see posts about it on LinkedIn every single day. I learned that lesson the hard way myself.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          So when a tool comes along that makes keeping track of all that easier, I have to try it out. And, sometimes, that new tool becomes irreplaceable. It completely revolutionizes how you do something, and you can never look back. The Day One App is one of those products, which is why I just had to share it with you (and no, they did not pay me to write this).
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          The <a href="https://dayoneapp.com/" class="text-accent font-bold hover:underline" target="_blank">Day One App</a> completely changed the way I work and track my productivity. I spent years working in the native Notes app on my phone or laptop, but it was hard to organize and not entirely convenient, especially when I needed to look back and see what I'd actually done. Then, one afternoon, a colleague mentioned Day One. So I thought I'd give it a try. It was free, so why not?
        </p>
      </div>

      <!-- Blockquote and Paragraph Section -->
      <div class="w-full flex flex-col items-center lg:flex-row gap-12 mt-8 max-w-[1200px]">
            <!-- Paragraph Section -->
            <div class="flex-1">
                <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                  And, yeah, I know, it's a journaling app. But, isn't that what tracking your work is? You're just journaling about your projects, meetings, research, and metrics. So doesn't it make sense that a journaling app would be an ideal place for that? I never really looked at it that way, but now I can never go back.
                </p>
            </div>

            <!-- Blockquote Section -->
            <div class="flex-1 lg:max-w-md">
                <blockquote class="border-l-[0.5rem] border-accent pl-6">
                <p class="font-alumni font-bold text-[2rem] text-black dark:text-white leading-[.9]">
                  I never really looked at it that way, but now I can never go back.
                </p>
                </blockquote>
            </div>
        </div>

        <!-- Paragraph Text -->
      <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          Free or not, I eventually paid for the premium version because it was so great. And I hate paying for premium versions, so that's saying something.
        </p>
      </div>

      <!-- Subtitle and Paragraph Text -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
            What I Love
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2">
          <strong>Browser syncing:</strong> This one scored high on the list for me. Depending on where you work, you can't always freely install apps or log in to your own Apple account on your work computer. Day One is available as a phone app, computer application, but also in the browser, which has come in handy at jobs where IT has super-control of my device. I can still notate in the browser and have my entries available on my personal device when I need them.
        </p>
      </div>

      <!-- Right Aligned Image -->
      <div class="relative z-10 mt-8 lg:mt-16 flex flex-col items-end max-w-[1400px]">
            <img 
                src="/day-one-multiple-screens.png" 
                alt="Woman using multiple screens to track her work"
                class="-ml-4 lg:-ml-8 max-w-4xl w-full h-auto hero-drop-shadow"
            />
            <!-- Photo credit -->
            <p class="font-lato font-light text-[12px] text-black dark:text-white mt-1">
              Photo by <a href="https://unsplash.com/@plann_images?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">Plann</a> on <a href="https://unsplash.com/photos/person-holding-black-iphone-5-aUC4JEXPspY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="text-accent" target="_blank">Unsplash</a>
            </p>
        </div>

        <!-- Paragraph Text -->
      <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          <strong>So many templates:</strong> I'm a big fan of templates when it comes to notes, and Day One allows me to create my own. It's incredibly helpful and I'm constantly editing it and changing it to suit my needs as they change. But it also comes pre-loaded with dozens of templates for anything you want to do. Gratitude, workouts, productivity, to-do lists; you name it, there's a template for it. And they're all great too. I'm a big fan of the 5-Minute Morning template to start my day off right.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          <strong>Multiple Journals (Premium feature):</strong> Like I said, I paid for premium. It was worth it to me for the multiple journals alone. This is partly due to how I'm using it (your mileage may vary). But having separate journals for daily notes to track my work, and a second where I only compile accomplishments, successes, and metrics, is great. I can look back over my week if I need to recall something, or switch over to the accomplishments when I need to write a case study and want to be very specific with how successful the project was.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          <strong>Tagging:</strong> I know, I know. This isn't unique to Day One. But I do feel like their tags work incredibly well and make it easier for me to manage my notes. Especially considering how I use it, for keeping track of my work to update my resume and portfolio, the tags make it super handy when it's time to do that work. I can quickly and easily find every important project, the notes that go with it, the files I need, and then update my resume and portfolio quickly and easily. Half the work is already done in my daily notes.
        </p>
      </div>

      <!-- Subtitle and Paragraph Text -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
            Go Download It
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2">
          First off, if you're not using a daily journal, start now. And give yourself grace, it will take time to form a new habit. It's okay to rely on reminders and scheduled times on your calendar to make sure you do it. Forming new habits can be hard, so take advantage of technology that helps you.
        </p>
      </div>

      <!-- Blockquote and Paragraph Section -->
      <div class="w-full flex flex-col items-center lg:flex-row gap-12 mt-8 max-w-[1200px]">
        <!-- Blockquote Section -->
        <div class="flex-1 lg:max-w-md">
          <blockquote class="border-l-[0.5rem] border-accent pl-6">
            <p class="font-alumni font-bold text-[2rem] text-black dark:text-white leading-[.9]">
              Some days are pretty boring, and I don't have much to say. That's a normal part of working.
            </p>
          </blockquote>
        </div>

        <!-- Paragraph Section -->
        <div class="flex-1">
          <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            I don't always journal daily for personal stuff, but I try to make at least one post per week there. Same with the gratitude journal. Hell, same with tracking my work! Some days are pretty boring, and I don't have much to say. That's a normal part of working. You'll learn what's important and what isn't with time.
          </p>
        </div>
      </div>

      <!-- Paragraph Text -->
      <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          Where journaling is especially beneficial, though, is year-end reviews and when I'm on the job hunt. Keeping track of notes, tagging certain topics I need to revisit later, and just having a reminder of every product launch and accomplishment is immensely beneficial to my career. It's helpful at review time, when asking for a promotion, or when I need to update my resume or portfolio. Especially with writing case studies.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
          It's why, whenever I'm writing a case study, I can confidently say "improved application completion by 18%." I didn't make that shit up; I wrote it down, tracked it, tagged it, and referenced that data when I needed it. There's no worse feeling than trying to write a case study and not even remembering if the project was successful. And hiring managers prefer "44% increase in profits per order placed" over "successfully increased profits" 10 times out of 10.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
          At the very least, start tracking your workday by giving Day One a try. After all, it's free, so why not?
        </p>
      </div>

    </section>
  </main>
</template>

<script setup lang="ts">
// Set up dynamic meta tags for social sharing with Nuxt
// @ts-ignore - useSeoMeta is auto-imported by Nuxt
useSeoMeta({
  title: 'How One App Changed the Way I Work (and Think) | Sam Daugherty',
  description: 'Imagine this: you\'ve been at your job for 8 years and you\'re ready for a change. You dust off your old resume to update it, look at your portfolio website if you have one, and realize all of it is shit. What do you do?',
  ogTitle: 'How One App Changed the Way I Work (and Think) | Sam Daugherty',
  ogDescription: 'Imagine this: you\'ve been at your job for 8 years and you\'re ready for a change. You dust off your old resume to update it, look at your portfolio website if you have one, and realize all of it is shit. What do you do?',
  ogImage: 'https://sambuilt.it/day-one-header.png',
  ogUrl: 'https://sambuilt.it/writing/how-one-app-changed-my-work',
  ogType: 'article',
  ogSiteName: 'Sam Daugherty Portfolio',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: 'How One App Changed the Way I Work (and Think) | Sam Daugherty',
  twitterDescription: 'Imagine this: you\'ve been at your job for 8 years and you\'re ready for a change. You dust off your old resume to update it, look at your portfolio website if you have one, and realize all of it is shit. What do you do?',
  twitterImage: 'https://sambuilt.it/day-one-header.png',
  twitterImageAlt: 'How One App Changed the Way I Work (and Think)'
})

// @ts-ignore - useHead is auto-imported by Nuxt
useHead({
  link: [
    { rel: 'canonical', href: 'https://sambuilt.it/writing/how-one-app-changed-my-work' }
  ]
})

// Social sharing functions
const shareToFacebook = () => {
  const url = encodeURIComponent(window.location.href)
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400')
}

const shareToTwitter = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent('How One App Changed the Way I Work (and Think)')
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'width=600,height=400')
}

const shareToThreads = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent('How One App Changed the Way I Work (and Think)')
  window.open(`https://threads.net/intent/post?text=${text} ${url}`, '_blank', 'width=600,height=400')
}

const shareToBluesky = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent('How One App Changed the Way I Work (and Think)')
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