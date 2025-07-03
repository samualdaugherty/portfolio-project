<template>
  <main class="w-full max-w-[1600px] px-4 lg:px-8">
    <!-- Hero Section for Today Card App Case Study -->
    <TodayCardHeroSection />

    <!-- Content Section with Results Bar -->
    <div class="relative w-full max-w-[1200px] mt-4">
      <!-- Results Bar -->
      <img src="/results-bar.svg" alt="Results Bar" class="absolute right-auto lg:-right-4 xl:right-4 left-[36rem] md:left-[36rem] lg:left-auto -top-32 md:-top-[25rem] lg:-top-[2rem] xl:-top-[4rem] w-[145px] lg:w-[175px] h-auto z-0 hidden lg:block" />
      
      <!-- Content -->
      <div class="pl-0">
        <!-- Medium Headline with Scribble -->
        <h2 class="font-alumni font-bold text-black dark:text-white mb-0 text-[1.75rem] sm:text-[3rem] tracking-[-1px]">
          Edit: Sorry, kids, I 
          <span class="relative inline-block">
            Fucked 
            <img src="/scribble.svg" alt="scribble" class="absolute -left-2 top-1/2 -translate-y-1/2 w-full pointer-events-none select-none rotate-12" style="z-index:2; width: 100%; height: 100%; max-width: 100%; max-height: 100%;" />
          </span>
          Up
        </h2>
        
        <!-- Paragraphs -->
        <p class="text-black dark:text-white text-body mb-6 lg:max-w-3xl xl:max-w-4xl">
            I feel like this is important to note before we get started here. At the time I was working on this project, I wasn't thinking about portfolios and case studies. As a result, I don't have any of the "before" screenshots. Since the app has been replaced (and the company acquired more recently), I can't exactly go get them now either. It's like a before-and-after where you just have to take my word for it that it used to be worse.
        </p>
      </div>
    </div>
    
    <!-- Section Heading: The Final Results -->
    <div class="w-full max-w-[1150px] mr-8 lg:pr-0 mt-16 lg:mt-20">
      <SectionHeading
        main-text="The Final Results"
        small-text="Results"
        bg-text="Start at the End"
        align="justified"
        bgTextTop="top-[-75%] sm:top-[-10%] md:top-[12%] lg:top-[20%]"
        bgTextLeft="-left-[15rem] sm:left-[-12rem] md:left-[-18rem]"
        bgTextSize="text-[100px] sm:text-[120px] md:text-[180px]"
      />
    </div>


    
    <!-- Results Description -->
    <div class="lg:max-w-3xl xl:max-w-4xl mt-4 lg:mt-8 mb-0 pr-0 md:pr-8">
      <p class="text-black dark:text-white text-body mb-6">
        There really wasn't any way to make the app worse than it was (according to users). So it was expected that we would see positive results. The old version featured several things users expected, but couldn't do. For instance, they couldn't add/edit their banking information in the app. They had to do that online. They couldn't set up AutoPay in the app either, which became a business priority, because the more customers using AutoPay, the fewer people forget to pay their bill. It's a direct correlation. So the end result, by all measures, was quite successful and the Executive Team was very happy.
      </p>
    </div>


  <!-- Notable Outcomes Section -->
  <div class="relative z-10 w-full flex flex-col lg:flex-row gap-4 max-w-[1200px] items-center mb-24 lg:mb-0">
    <!-- Left: Text Content -->
    <div class="w-full lg:max-w-lg xl:max-w-xl flex-shrink-0">
      <!-- Notable Outcomes -->
      <h2 class="font-alumni font-bold text-[1.75rem] sm:text-[3rem] text-black dark:text-white mb-2 sm:mb-0">
        Notable Business Outcomes
      </h2>
      <ul class="mb-8 space-y-2">
        <li class="text-black dark:text-white text-body">• <strong>24% increase</strong> in use of AutoPay</li>
        <li class="text-black dark:text-white text-body">• <strong>82% overall increase</strong> in Average Items Per Order</li>
        <li class="text-black dark:text-white text-body">• <strong>44% increase in profits</strong> per order placed</li>
      </ul>

      <h2 class="font-alumni font-bold text-[1.75rem] sm:text-[3rem] text-black dark:text-white mb-2 sm:mb-0">
        Identified Priorities for MVP
      </h2>
      <ul class="mb-8 space-y-2">
        <li class="text-black dark:text-white text-body">• Simplified AutoPay settings</li>
        <li class="text-black dark:text-white text-body">• Add/Edit/Connect bank accounts</li>
        <li class="text-black dark:text-white text-body">• Sign On updates to new protocols (transitioning off of Okta)</li>
        <li class="text-black dark:text-white text-body">• "Pay your bill in under 2 minutes" for non-AutoPay customers</li>
        <li class="text-black dark:text-white text-body">• Quickly identify balance, payments, and transaction snapshots</li>
      </ul>
    </div>
  
    <!-- Right: Mobile Screenshots -->
    <div class="w-full lg:max-w-md flex-shrink-0">
      <div class="flex flex-col sm:flex-row gap-2 md:gap-4">
        <img 
          src="/today-card-1.png" 
          alt="Today Card Mobile Screenshot 1" 
          class="w-full sm:w-[49%] lg:w-[225px] h-auto hero-drop-shadow rounded-2xl"
        />
        <img 
          src="/today-card-2.png" 
          alt="Today Card Mobile Screenshot 2" 
          class="w-full sm:w-[49%] lg:w-[225px] h-auto hero-drop-shadow rounded-2xl"
        />
      </div>
    </div>
  </div>
    
  <!-- Project Background Section -->
  <div class="w-full max-w-[1100px] mt-16">
    <SectionHeading
      main-text="Project Background"
      small-text="Introduction"
      bg-text="How We Got Here"
      align="left"
      bgTextTop="top-[-55%] sm:top-[-20%] md:top-[10%] lg:top-[20%]"
      bgTextLeft="left-[-16rem] md:left-[-15rem] lg:left-[-25%] xl:left-[0rem]"
      bgTextSize="text-[120px] sm:text-[150px] md:text-[180px]"
    />
  </div>

  <!-- Background Content -->
  <div class="w-full mt-8 mb-16 max-w-[1200px]">
    <!-- Intro Paragraph -->
    <div class="pl-0 lg:pl-32 mb-12">
      <p class="text-black dark:text-white text-body mb-6">
        The existing app was old and outdated. It had been years since it was initially designed, and was never updated along the way. We made technology updates and security updates, but the design solution was always "just migrate it exactly as is." It was clunky, the UX was terrible, and most of our customers didn't use it at all.
      </p>
      <p class="text-black dark:text-white text-body">
        What's worse, when we tested the original app to get feedback, several users said it made us look unprofessional, while others said it seemed "outright scammy." Terrible news when you're asking people to trust you with their most important data.
      </p>
    </div>
  </div>
    
    <!-- Research Summary Section -->
    <div class="w-full max-w-[1100px] mt-16">
      <SectionHeading
        main-text="Research Summary"
        small-text="Research"
        bg-text="Research We Did"
        align="justified"
        bgTextTop="top-[-75%] sm:top-[-15%] md:top-[15%] lg:top-[20%]"
        bgTextLeft="-left-[15rem] sm:left-[-16rem] md:left-[-15rem] lg:left-[-8rem] xl:left-[5rem]"
        bgTextSize="text-[100px] sm:text-[150px] lg:text-[180px]"
      />
    </div>
    
    <!-- Research Content -->
    <div class="w-full max-w-[1200px] flex flex-col lg:flex-row gap-8 lg:gap-12 mt-8 mb-16">
      <!-- Left: Text Content -->
      <div class="flex-1">
        <p class="text-black dark:text-white text-body mb-6">
          <strong>Summary:</strong> Everyone hated our app. I won't bore you with the details of our research, but I will tell you this feedback we got from customers because it made me laugh. When we initially talked to customers, the feedback was "I don't really use the app." One lovely gentleman said "The app is so stupid it actually makes me angry." So that was cool.
        </p>
        <p class="text-black dark:text-white text-body">
          But he wasn't wrong either. It was stupid. You can use the app to make a payment, but if you need to change your bank to do it, you have to go online. You can make a payment in 3 steps online, but it took 7 steps on the app. It didn't make sense. We had to do better.
        </p>
      </div>
      
      <!-- Right: Image -->
      <div class="lg:w-[560px] flex-shrink-0">
        <img 
          src="/honest-quote-light.png" 
          alt="Blueprint Research Findings Table" 
          class="w-full h-auto rounded-2xl block"
        />
        <img 
          src="/honest-quote-dark.png" 
          alt="Blueprint Research Findings Table" 
          class="w-full h-auto rounded-2xl hidden"
        />
      </div>
    </div>

    <!-- More Stuff that Happened Section -->
    <div class="relative z-10 w-full max-w-[1200px] mt-16 mb-16">
      <h2 class="font-alumni font-bold text-[1.75rem] sm:text-[3rem] text-black dark:text-white">
        More Stuff that Happened
      </h2>
      
      <p class="text-black dark:text-white text-body mb-8">
        We took advantage of the broader redesign project for a bit of a brand refresh. We chose a more modern typeface that had a higher x-height so we could increase readability. We gussied up the colors a bit and created a Type Scale and brand library for Figma to keep everything consistent. We built out a component library to quickly iterate design mockups. We worked with engineering to identify all the various error screens, edge cases, and anything of note that we needed to include in our mockups. Just a whole bunch of stuff happened, which is normal for Product Design. You get stuff done.
      </p>
      
      <!-- Two Images Side-by-Side -->
      <div class="flex flex-col md:flex-row gap-4 md:gap-6">
        <img 
          src="/colors-fonts.png" 
          alt="Colors and Fonts" 
          class="w-full md:w-1/2 h-auto hero-drop-shadow rounded-2xl"
        />
        <img 
          src="/today-card-autopay-ia.png" 
          alt="Today Card AutoPay Information Architecture" 
          class="w-full md:w-1/2 h-auto hero-drop-shadow rounded-2xl"
        />
      </div>
    </div>

    <!-- Final Product Section -->
    <div class="w-full max-w-[1100px] mt-8 lg:mt-16">
      <SectionHeading
        main-text="Launching MVP"
        small-text="Final Product"
        bg-text="Getting On With It"
        align="left"
        bgTextTop="top-[-70%] sm:top-[-20%] md:top-[10%] lg:top-[20%]"
        bgTextLeft="left-[-16rem] md:left-[-15rem] lg:left-[0rem]"
        bgTextSize="text-[120px] sm:text-[150px] lg:text-[180px]"
      />
    </div>
    
    <!-- MVP Content Section -->
    <div class="relative w-full max-w-[1200px] mt-8 mb-16">
      <!-- Orange Bar -->
      <img src="/mvp-bar.svg" alt="MVP Bar" class="absolute left-6 -top-[21rem] w-[125px] lg:w-[175px] h-auto z-0 hidden lg:block" />
      
      <!-- Content -->
      <div class="pl-0 lg:pl-56">
        <p class="text-black dark:text-white text-body mb-6">
          Once we had a really solid direction for the look and feel of the site we started going through the user flows and crafting all the screens to align with the primary functionality. It then set up a series of moderated tests with specific tasks we needed them to perform. For the tests, we used real customers that responded to an intercept survey. Since these were prototypes and not functioning versions, they couldn't really make the wrong choices (which I don't need to explain to you).
        </p>
        <p class="text-black dark:text-white text-body">
          We got a lot of good feedback from the test subjects about the design and steps necessary. One positive piece of feedback was the overwhelming approval of the payment flow. We worked hard to simplify it in a way that could translate to the new version of the website, and customers were elated at how simple it was.
        </p>
      </div>
    </div>

    <!-- Screenshot Grid -->
    <div class="relative z-10 w-full mb-16 max-w-[1200px]">
      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-1">
        <img 
          v-for="n in 6" 
          :key="n" 
          :src="`/today-card-${n + 5}.png`" 
          :alt="`Today Card Screenshot ${n + 5}`" 
          class="w-full h-auto hero-drop-shadow rounded-2xl max-w-none"
        />
      </div>
    </div>

    <!-- Ready, Set, Launch Section -->
    <div class="w-full max-w-[1200px] flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16">
      <!-- Left: Text Content -->
      <div class="flex-1 lg:max-w-2xl xl:max-w-4xl">
        <h2 class="font-alumni font-bold text-[1.75rem] sm:text-[3rem] text-black dark:text-white">
          Ready, Set, Launch!
        </h2>
        <p class="text-black dark:text-white text-body">
          The go-live was successful in that we didn't really have many issues. We began to see an almost-immediate increase in the number of people signing up for AutoPay (which we pushed very hard in-app) and a subsequent decrease in late/missed payments as a result. But changing user habits can be hard, and we didn't have immediate uptake of the app like the Executive Team hoped for. It took a few months to really get most people transitioned over. With some strategic email marketing initiatives, and enough time, we eventually got a large majority of our customers to begin using the app.
        </p>
      </div>
      
      <!-- Right: Orange Arrow -->
      <div class="absolute z-1 lg:w-[200px] flex-shrink-0 flex justify-center lg:justify-end lg:left-[48rem] xl:left-[61rem] lg:-mt-[16rem] hidden lg:block">
        <img 
          src="/orange-arrow.svg" 
          alt="Orange Arrow" 
          class="w-[145px] lg:w-[175px] h-auto"
        />
      </div>
    </div>

    <!-- Conclusion Section -->
    <div class="w-full max-w-[1100px] mt-16 xl:ml-8">
      <SectionHeading
        main-text="Lessons Learned"
        small-text="Conclusion"
        bg-text="The Conclusion"
        align="right"
        bgTextTop="top-[15%] sm:top-[40%] md:top-[60%] lg:top-[60%]"
        bgTextLeft="-left-[2rem] sm:left-[-2rem] md:left-[-3rem] lg:left-[0rem] xl:left-[3rem]"
        bgTextSize="text-[100px] sm:text-[150px] md:text-[180px] lg:text-[180px]"
      />
    </div>

    <!-- Conclusion Paragraph -->
    <div class="w-full max-w-[1200px] mt-8 mb-16">
      <div class="lg:ml-40">
        <p class="text-black dark:text-white text-body">
          We had such a shitty app for such a long time, that our customers were just used to using the mobile site. They had built habits around signing in, paying bills, checking balances. And just creating a new app didn't magically make them trust us that this new version was better. So, while the execs hoped to just get everyone using the app from day one, it was a good lesson in the time it takes to change behaviors. But, we eventually got everyone there and app usage met our expectations within the first full quarter after launch.
        </p>
      </div>
    </div>

    <!-- Final Section -->
    <div class="w-full max-w-[1200px] mb-16">
      <h2 class="font-alumni font-bold text-[1.75rem] sm:text-[3rem] text-black dark:text-white">
        Update: What Happens Next?
      </h2>
      
      <p class="text-black dark:text-white text-body mb-6">
        In 2024, the parent company sold Today Card out of their product portfolio. At the time, and this may still be the case, they planned to use everything we created, just transitioned under a new umbrella company. Since I'm not a Today Card customer personally, I don't know if the app is the same or if anything changed.
      </p>
      
      <p class="text-black dark:text-white text-body">
        What I do know is that the work we put in to improving the product, the customer experience, and the improvements it made to our core metrics helped increase the value of the Today Card brand and was key factor in the acquisition. The improved website and application was a selling point, and no longer a hinderance, for the brand overall. So, while I'm not sure if you can download this app and use what I created, I still feel good about the value I created and the work that went in to improving our products for the customer.
      </p>
    </div>

  </main>
</template>

<script setup>
// Components are auto-imported in Nuxt 3
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