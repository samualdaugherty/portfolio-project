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
          Print Journalism Layouts Should Make a Comeback
        </div>

        <!-- Main Blog Post Title (Responsive) -->
        <h1 
          class="font-alumni font-bold text-black dark:text-white relative z-10 text-[clamp(4rem,10vw,9rem)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] xl:mr-12"
          style="line-height: 72%;"
        >
          Print Journalism Layouts Should Make a Comeback
        </h1>
      </div>
      
      <!-- Author and Date Details -->
      <div class="mt-8 relative z-10">
        <p class="font-lato text-body text-black dark:text-white">
          5 minute read / by <span class="text-accent">Sam Daugherty</span> / May 18th, 2025
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
            <h3 class="relative bg-white dark:bg-black pr-4 font-alumni text-[1.5rem] font-bold text-black dark:text-white">
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
            There's something wonderful about having a fixed size for your canvas and being able to play around with layouts that don't translate well to responsive design. It's one of the things I loved about working in print back in the day. You could be so creative with how you lay out images and text, and how they interact with each other. Typography was as much a part of the art as the text. We don't see it much in modern web design anymore, and I think that's sad. But I also think we simply are not being creative enough.
          </p>
        </div>
      </div>

      <!-- Large Hero Image -->
      <div class="relative z-10 mt-8 lg:-mt-16 max-w-[900px]">
        <img 
          src="/print-layout-header.png" 
          alt="Print Journalism Layouts Should Make a Comeback - Hero Image"
          class="-ml-4 lg:-ml-8 max-w-4xl w-full h-auto hero-drop-shadow"
        />
        <!-- Photo credit -->
        <p class="font-lato font-light text-[12px] text-black dark:text-white mt-1">
            Photo by <a href="https://www.behance.net/gallery/6279463/Breviario-Magazine-Editorial-Design?utm_content=creditText&utm_medium=referral&utm_source=sambuiltit" class="text-accent" target="_blank">Boris Vargas</a> on <a href="https://www.behance.net/BorisVargas?utm_content=creditText&utm_medium=referral&utm_source=sambuiltit" class="text-accent" target="_blank">Behance</a>
        </p>
      </div>

      <!-- Paragraph Text -->
      <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
            This is the image that originally inspired my design for this website. This is a great example of amazing print layout and typography. It's the kind of design that dominated the publication world, and then slowly disappeared as we all chased other trends.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            That's why I'm declaring, boldly with my whole chest, that it's time to draw inspiration from print journalism. Not the modern kind, no. The classic kind. The kind that was studied in Graphic Design courses at universities. The kind that inspired people to become designers in the first place.
        </p>
      </div>

      <!-- Subtitle and Paragraph Text -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
            <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
                We Can't All Be Apple
            </h2>
            <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2">
                I place some of the blame on Apple for this. They came onto the scene with a form of extreme minimalism that was unheard of at the time. The designs drew inspiration from Dieter Rams' famous industrial designs, and their product landing pages were just as sparse with content in a way that was confident and daring. And for Apple, it worked. It worked because, at the time, it was different.

            </p>
        </div>

        <!-- Right Aligned Image -->
        <div class="relative z-10 mt-8 lg:mt-16 flex flex-col items-end max-w-[1400px]">
            <img 
                src="/dieter-ram-design.png" 
                alt="Original Dieter Rams design for Braun vs original Apple iPod"
                class="-ml-4 lg:-ml-8 max-w-4xl w-full h-auto hero-drop-shadow"
            />
            <!-- Photo credit -->
            <p class="font-lato font-light text-[12px] text-black dark:text-white mt-1">
                Photo by <a href="https://medium.com/bellroy-by-design/heroes-of-design-01-dieter-rams-8e5e334a39be" class="text-accent" target="_blank">By Design</a> on <a href="https://medium.com/bellroy-by-design/heroes-of-design-01-dieter-rams-8e5e334a39be" class="text-accent" target="_blank">Medium</a>
            </p>
        </div>

        <!-- Paragraph Text -->
        <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
            <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                That set the trend for the next decade-plus of everyone trying to be minimal. I remember in 2008, after Obama won the Presidency, design publications discussed his "modern minimalism" on his website and press pieces. They were simple. Clean. They compared word counts. They used this as an example of how the Democratic Party was modern and the Republican Party was old and outdated.
            </p>
        </div>

        <!-- Blockquote and Paragraph Section -->
      <div class="w-full flex flex-col items-center lg:flex-row gap-12 mt-8 max-w-[1200px]">
        <!-- Blockquote Section -->
        <div class="flex-1 lg:max-w-md">
          <blockquote class="border-l-[0.5rem] border-accent pl-6">
            <p class="font-alumni font-bold text-[2rem] text-black dark:text-white leading-[.9]">
                That's what we needed. We needed calm. We needed less. We were forced to think minimally.
            </p>
          </blockquote>
        </div>

        <!-- Paragraph Section -->
        <div class="flex-1">
          <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            I'm not here to write about politics, but 2008 was kind of the dawning age of this trend becoming mainstream, so it feels relevant and timely. It was a time when we were giving up heavy maximalism and Flash websites to chase a more modern feeling. A time of economic collapse, forcing all of us to accept less in every aspect of our lives. A far more minimal time, because that's what we needed. We needed calm. We needed less. We were forced to think minimally.
          </p>
        </div>
      </div>

      <!-- Subtitle and Paragraph Text -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
          <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
            Hindered by Technology
          </h2>
          <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2">
            One of the most noticeable aspects of print journalism is the column. The grid makes up nearly everything and the entire layout was based around it. But columns weren't a thing during the minimalism trend, so it makes sense we'd abandon them for web. Hell, CSS was barely a thing, let alone CSS3.
          </p>
      </div>

      <!-- 3-Image Grid Section -->
      <div class="w-full mt-12 max-w-[1400px]">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-2">
          <div class="flex justify-center">
            <img 
              src="/column-ex-1.png" 
              alt="Column layout example 1"
              class="w-auto h-auto max-h-[400px] lg:max-h-[500px] object-contain hero-drop-shadow"
            />
          </div>
          <div class="flex justify-center">
            <img 
              src="/column-ex-2.png" 
              alt="Column layout example 2"
              class="w-auto h-auto max-h-[400px] lg:max-h-[500px] object-contain hero-drop-shadow"
            />
          </div>
          <div class="flex justify-center">
            <img 
              src="/column-ex-3.png" 
              alt="Column layout example 3"
              class="w-auto h-auto max-h-[400px] lg:max-h-[500px] object-contain hero-drop-shadow"
            />
          </div>
        </div>
      </div>

      <!-- Paragraph Text -->
      <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
            But we've had access to columns in web design since March 2017, when the majority of browsers began supporting it. But it never really made a comeback. Despite a column being a natural extension of the grid, which modern CSS is also built around. So why aren't we using them? Screens are only becoming larger, and responsive design still allows us to rearrange things for phones as needed!
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            Even current trends, such as "letting the content breathe" and excessive whitespace, aren't new, and were widely used in print publications when we wanted to convey a certain emotion. We used design to drive emotion, good or bad. This image demonstrates how white space can be used to create a sense of calm.
        </p>
      </div>

      <!-- 2-Image Grid Section -->
      <div class="w-full mt-12 max-w-[1400px]">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-2">
          <div class="flex justify-center">
            <img 
              src="/white-space-1.png" 
              alt="White Space example 1"
              class="w-auto h-auto max-h-[400px] lg:max-h-[500px] object-contain hero-drop-shadow"
            />
          </div>
          <div class="flex justify-center">
            <img 
              src="/white-space-2.png" 
              alt="White Space example 2"
              class="w-auto h-auto max-h-[400px] lg:max-h-[500px] object-contain hero-drop-shadow"
            />
          </div>
        </div>
      </div>

      <!-- Paragraph Text -->
      <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            But, what if we don't want to convey calm? What if we want to convey energy? Or chaos? What if the story we're trying to tell isn't serene or happy? What if it's daring and stands tall? We can use the layout to create those emotions, too.
        </p>
      </div>

      <!-- 2-Image Grid Section -->
      <div class="w-full mt-12 max-w-[1400px]">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-2">
          <div class="flex justify-center">
            <img 
              src="/chaos-ex-1.png" 
              alt="Chaos example 1"
              class="w-auto h-auto max-h-[600px] lg:max-h-[800px] object-contain hero-drop-shadow"
            />
          </div>
          <div class="flex justify-center">
            <img 
              src="/chaos-ex-2.png" 
              alt="Chaos example 2"
              class="w-auto h-auto max-h-[600px] lg:max-h-[800px] object-contain hero-drop-shadow"
            />
          </div>
        </div>
      </div>

      <!-- Paragraph Text -->
      <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            We are a visual people. We don't just see the words; we take in the entire screen in our visual field, and everything we see drives how we feel when we view the piece. Our layout isn't about displaying content; it's about giving the viewer a sense of how they should feel when they consume our content. And, for whatever reason, we've opted for “I want them to feel nothing” as the bread and butter of modern design.
        </p>
      </div>

      <!-- Subtitle and Paragraph Text -->
      <div class="ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-16">
        <h2 class="font-alumni text-[3rem] font-bold text-black dark:text-white mb-0 leading-[.9]">
            Make Them Feel Something
        </h2>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mt-2 mb-6">
            All I'm saying is, I think, as designers, we've lost our way a bit. We're being too safe because that's the world we were brought up in as creatives. Even in the world of print journalism and publication, the primary factor of design is the web. We create for the web, for the digital version of the article, and then we allow that to drive how it appears in print. I hate it so much! We used to be bold (shakes fist at cloud).
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            Anyway. One of the skills I used to include on my resume was Typography. It is a skill. I still believe that. It's an art form and, as a graffiti artist, one I hold dear to my heart. But I removed it ages ago, because it never matched any keywords in job descriptions. We no longer see it as a need. But I think it still is.
        </p>
      </div>

       <!-- Blockquote and Paragraph Section -->
      <div class="w-full flex flex-col items-center lg:flex-row gap-12 mt-8 max-w-[1200px]">
            <!-- Paragraph Section -->
            <div class="flex-1">
                <p class="font-lato text-body text-black dark:text-white leading-relaxed">
                    And, more importantly, I believe the modern frameworks and capabilities of browsers have opened up new avenues for us to flex our creativity. No more boring Bootstrap layouts. Fuck that. It had a good run, and it's time for something fresh.
                </p>
            </div>

            <!-- Blockquote Section -->
            <div class="flex-1 lg:max-w-md">
                <blockquote class="border-l-[0.5rem] border-accent pl-6">
                <p class="font-alumni font-bold text-[2rem] text-black dark:text-white leading-[.9]">
                    No more boring Bootstrap layouts. Fuck that. It had a good run, and it's time for something fresh.
                </p>
                </blockquote>
            </div>
        </div>

        <!-- Paragraph Text -->
      <div class="order-2 lg:order-1 ml-0 lg:ml-32 xl:ml-48 max-w-3xl mt-12">
        <p class="font-lato text-body text-black dark:text-white leading-relaxed mb-6">
            We have columns we can use, and we have control over them using flex. We have responsive typography at our fingertips using clamp(), and we have AI that can help us write the code if we can't figure out how to do it ourselves with tools like Cursor or v0. In other words, nothing is stopping us except ourselves.
        </p>
        <p class="font-lato text-body text-black dark:text-white leading-relaxed">
            Don't be boring. Stop. You're better than that. You deserve better than that. And we all deserve to see how creative you can be.
        </p>
      </div>

    </section>
  </main>
</template>

<script setup lang="ts">
// Set up dynamic meta tags for social sharing with Nuxt
useSeoMeta({
  title: 'Print Journalism Layouts Should Make a Comeback | Sam Daugherty',
  description: 'There\'s something wonderful about having a fixed-size for your canvas and being able to play around with layouts that doesn\'t translate well to responsive design. But I think we just aren\'t being creative enough.',
  ogTitle: 'Print Journalism Layouts Should Make a Comeback | Sam Daugherty',
  ogDescription: 'There\'s something wonderful about having a fixed-size for your canvas and being able to play around with layouts that doesn\'t translate well to responsive design. But I think we just aren\'t being creative enough.',
  ogImage: 'https://sambuilt.it/print-layout-header-bw.png',
  ogUrl: 'https://sambuilt.it/writing/print-journalism-layouts',
  ogType: 'article',
  ogSiteName: 'Sam Daugherty Portfolio',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Print Journalism Layouts Should Make a Comeback | Sam Daugherty',
  twitterDescription: 'There\'s something wonderful about having a fixed-size for your canvas and being able to play around with layouts that doesn\'t translate well to responsive design. But I think we just aren\'t being creative enough.',
  twitterImage: 'https://sambuilt.it/print-layout-header-bw.png',
  twitterImageAlt: 'Print Journalism Layouts Should Make a Comeback'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://sambuilt.it/writing/print-journalism-layouts' }
  ]
})

// Social sharing functions
const shareToFacebook = () => {
  const url = encodeURIComponent(window.location.href)
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400')
}

const shareToTwitter = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent('Print Journalism Layouts Should Make a Comeback')
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'width=600,height=400')
}

const shareToThreads = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent('Print Journalism Layouts Should Make a Comeback')
  window.open(`https://threads.net/intent/post?text=${text} ${url}`, '_blank', 'width=600,height=400')
}

const shareToBluesky = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent('Print Journalism Layouts Should Make a Comeback')
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