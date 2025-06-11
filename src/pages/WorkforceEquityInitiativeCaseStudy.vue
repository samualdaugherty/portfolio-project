<template>
  <main class="w-full max-w-[1600px] px-4 lg:px-8">
    <!-- Hero Section -->
    <WorkforceEquityHeroSection />

    <!-- Content Section with Results Bar -->
    <div class="relative w-full max-w-[1200px] mt-4">
      <!-- Results Bar -->
      <img src="/results-bar.svg" alt="Results Bar" class="absolute right-auto lg:right-0 left-[36rem] md:left-[36rem] lg:left-auto -top-32 md:-top-[12rem] lg:-top-[12rem] w-[145px] lg:w-[175px] h-auto z-0 hidden md:block" />
      
      <!-- Content -->
      <div class="pl-0">
        <!-- Medium Headline with Scribble -->
        <h2 class="font-alumni font-bold text-black dark:text-white mb-0 text-[1.75rem] sm:text-[3rem]">
          A Quick Update
        </h2>
        
        <!-- Paragraphs -->
        <p class="text-black dark:text-white text-body md:max-w-lg lg:max-w-3xl xl:max-w-4xl">
            FY2024 marked the end of our initial five-year funding round. Thanks to the original project's success, we had a much stronger position going into our next pitch to the State. But with millions of dollars on the line, we couldn't leave it to chance. We refined the site, tailored the story, and secured continued funding for FY2025 that will support over 15,000 students statewide and expand the program to 20+ community colleges. This case study now reflects those new outcomes.
        </p>
      </div>
    </div>
    
    <!-- Section Heading: The Final Results -->
    <div class="w-full max-w-[1000px] mr-8 lg:pr-0 mt-16 lg:mt-8 pr-0 md:pr-[10rem] lg:pr-0">
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
    <div class="md:max-w-xl lg:max-w-3xl xl:max-w-4xl mt-4 lg:mt-8 mb-16 pr-0 md:pr-8">
      <p class="text-black dark:text-white text-body mb-6">
        This wasn't just a project; it was a story about what happens when design meets community need. Over the course of five years, we not only built the experience—we returned to it, improved it, and helped secure the future of the program for thousands more.
      </p>
      <p class="text-black dark:text-white text-body mb-6">
        In the end, we achieved exactly what we set out to do:
      </p>
    </div>


    <!-- Notable Outcomes Section -->
    <div class="relative z-10 w-full flex flex-col lg:flex-row gap-4 max-w-[1200px] items-center lg:-translate-y-24 mb-24 lg:mb-0">
      <!-- Left: Text Content -->
      <div class="w-full lg:max-w-lg xl:max-w-xl flex-shrink-0">
        <!-- Notable Outcomes -->
        <h2 class="font-alumni font-bold text-md-header text-black dark:text-white mb-2 sm:mb-0">
          Notable Program Outcomes
        </h2>
        <ul class="mb-8 space-y-2">
          <li class="text-black dark:text-white text-body">• <strong>Secured $18M+</strong> in new grant funding</li>
          <li class="text-black dark:text-white text-body">• <strong>Over 15,000 students</strong> enrolled statewide</li>
          <li class="text-black dark:text-white text-body">• <strong>Achieved 120%</strong> of the program's original five-year goals</li>
          <li class="text-black dark:text-white text-body">• <strong>Additional Funding</strong> secured for FY2025</li>
        </ul>
        
        <!-- Paragraph -->
        <p class="text-black dark:text-white text-body">
            This project mattered. It was a major win for our team, but more importantly, it created opportunity for thousands of students in low-income communities across Illinois. And it all started with showing the right story, at the right time, in the right way.
        </p>
      </div>
      
      <!-- Right: Mobile Screenshots -->
      <div class="w-full lg:max-w-xl flex-shrink-0">
        <div class="flex flex-col sm:flex-row gap-2 md:gap-4">
          <img 
            src="/wei-3.png" 
            alt="Workforce Equity Initiative Screenshot" 
            class="w-full lg:w-[540px] h-auto hero-drop-shadow rounded-2xl"
          />
        </div>
      </div>
    </div>

    <!-- Project Background Section -->
    <div class="w-full max-w-[1100px]">
    <SectionHeading
        main-text="Project Background"
        small-text="Introduction"
        bg-text="How We Got Here"
        align="left"
        bgTextTop="top-[-55%] sm:top-[-20%] md:top-[10%] lg:top-[20%]"
        bgTextLeft="left-[-16rem] md:left-[-15rem] lg:left-[-25%]"
        bgTextSize="text-[120px] md:text-[180px]"
    />
    </div>

    <!-- Background Content -->
    <div class="w-full mt-8 mb-16 max-w-[1200px]">
    <div class="pl-0 xl:pl-52">
        <p class="text-black dark:text-white text-body mb-6">
            Every once in a while, a project comes along that feels like a perfect intersection of your passions, past experience, and present skills. This was one of those.
        </p>
        <p class="text-black dark:text-white text-body mb-6">
            The Illinois Community College Board oversees 48 public community colleges across the state. Their Workforce Equity Initiative is designed to provide short-term training programs that help participants earn a living wage. But in order to keep this program alive—and scale it—they needed more than just data. They needed to show its impact, clearly and convincingly.
        </p>
        <p class="text-black dark:text-white text-body mb-6">
            Our audience was twofold: Members of the Illinois House of Representatives, who needed a quick, clear view of the program's effectiveness. And taxpayers and prospective students, who needed transparency, clarity, and access to the data. The stakes were high. The ongoing success of this project would impact over 10,000 students in underserved zip codes over the next five years. We had one shot to get it right.
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
            The first thing we had to do was get a handle on the data—and there was a lot of it. With 15 initial colleges and thousands of students across dozens of training programs, it was easy to get lost in the numbers. We needed to distill it down to the most important insights, and make it easy to understand.
        </p>
        <p class="text-black dark:text-white text-body">
            So we started by mapping everything out. What did we have? What was useful? What could be trimmed? Then we reframed it through the lens of the actual audience of state representatives who had about five minutes to make a decision about funding. And also for constituents who deserved to see how their money was being used. We worked with a small group of user testers to finalize the Information Architecture and Content Strategy for each page.
        </p>
        </div>
        
        <!-- Right: Images -->
        <div class="lg:w-[560px] flex-shrink-0">
        <div class="flex flex-col md:flex-row gap-2 md:gap-4">
            <img 
            src="/wei-whiteboard-1.jpg" 
            alt="Workforce Equity Initiative Whiteboard 1" 
            class="w-full md:w-[49%] lg:w-[270px] h-auto hero-drop-shadow rounded-2xl"
            />
            <img 
            src="/wei-whiteboard-2.jpg" 
            alt="Workforce Equity Initiative Whiteboard 2" 
            class="w-full md:w-[49%] lg:w-[270px] h-auto hero-drop-shadow rounded-2xl"
            />
        </div>
        </div>
    </div>

    <!-- Initial Designs Section -->
    <div class="w-full max-w-[1100px] mt-24 lg:mt-16">
        <SectionHeading
        main-text="Initial Designs"
        small-text="Progress"
        bg-text="More of the Process"
        align="justified"
        bgTextTop="top-[-75%] sm:top-[-15%] md:top-[15%] lg:top-[20%]"
        bgTextLeft="-left-[15rem] sm:left-[-16rem] md:left-[-17rem] lg:left-[-18rem] xl:left-[-15rem]"
        bgTextSize="text-[100px] sm:text-[130px] md:text-[150px] lg:text-[180px]"
        />
    </div>

    <!-- Initial Designs Content -->
    <div class="relative z-10 w-full mt-8 mb-16 max-w-[1200px]">
        <div class="xl:max-w-4xl">
            <p class="text-black dark:text-white text-body mb-6">
                With the content in place, we moved into layout and hierarchy. The challenge here wasn't “what do we show?” It was, “how do we show this in a way that doesn't overwhelm or confuse?” This was a strictly informative experience—no calls to action, no marketing fluff—so the data had to lead.
            </p>
            <p class="text-black dark:text-white text-body mb-8">
                We identified core pages and content types, then ran a rapid tree test and user testing to help validate the information architecture and user journeys. From there, we moved into low-fidelity sketching and wireframes, carefully stripping away anything unnecessary, and ensuring secondary content was accessible without being intrusive.
            </p>
        </div>
    
        <!-- Screenshot Grid -->
        <div class="w-full">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
            <img 
                src="/wei-wire-1.jpg" 
                alt="Workforce Equity Initiative Wireframe 1" 
                class="w-full h-auto hero-drop-shadow rounded-md"
            />
            <img 
                src="/wei-wire-2.jpg" 
                alt="Workforce Equity Initiative Wireframe 2" 
                class="w-full h-auto hero-drop-shadow rounded-md"
            />
            <img 
                src="/wei-wire-3.jpg" 
                alt="Workforce Equity Initiative Wireframe 3" 
                class="w-full h-auto hero-drop-shadow rounded-md"
            />
            <img 
                src="/wei-wire-4.jpg" 
                alt="Workforce Equity Initiative Wireframe 4" 
                class="w-full h-auto hero-drop-shadow rounded-md"
            />
            </div>
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
    <div class="relative z-10 w-full max-w-[1200px] mt-8 mb-16">
      <!-- Orange Bar -->
      <img src="/mvp-bar.svg" alt="MVP Bar" class="absolute left-6 -top-[21rem] w-[125px] lg:w-[175px] h-auto z-0 hidden lg:block" />
      
      <!-- Content -->
      <div class="pl-0 lg:pl-56">
        <p class="text-black dark:text-white text-body mb-6">
            Calling this an MVP feels a little misleading. It was technically our first version, yes; but there was no room for iteration. We had a hard launch date and a live legislative session on the calendar. This had to be done right, and it had to be done on time.
        </p>
        <p class="text-black dark:text-white text-body mb-6">
            We collaborated directly with the 15 colleges involved in the initial funding round, finalizing content and formatting everything into clean, consistent layouts. I handled the coded templates, and colleges populated them with their respective data.
        </p>
        <p class="text-black dark:text-white text-body">
            We also built in a few late-stage features—including an interactive field-of-study tool for students and transparency tools for taxpayers—things that weren't originally scoped, but ultimately made the experience far stronger.
        </p>
      </div>
    
        <!-- Screenshot Grid -->
        <div class="w-full mt-8">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
            <img 
                src="/wei-final-1.png" 
                alt="Workforce Equity Initiative Final 1" 
                class="w-full h-auto hero-drop-shadow rounded-md"
            />
            <img 
                src="/wei-final-2.jpg" 
                alt="Workforce Equity Initiative Final 2" 
                class="w-full h-auto hero-drop-shadow rounded-md"
            />
            <img 
                src="/wei-final-3.jpg" 
                alt="Workforce Equity Initiative Final 3" 
                class="w-full h-auto hero-drop-shadow rounded-md"
            />
            <img 
                src="/wei-final-4.jpg" 
                alt="Workforce Equity Initiative Final 4" 
                class="w-full h-auto hero-drop-shadow rounded-md"
            />
            </div>
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
    
    <!-- Conclusion Content -->
    <div class="relative w-full max-w-[1200px] mt-8 mb-16">
      
      <!-- Content -->
      <div class="lg:ml-52 xl:ml-64 w-full lg:max-w-3xl xl:max-w-4xl">
        <p class="text-black dark:text-white text-body mb-6">
            This was one of the most meaningful projects of my career. Not just because of the scale or the outcome—but because of the people. My local community college, which led this initiative, is in my neighborhood. I've seen firsthand how this program has changed lives. Friends, neighbors, people I grew up with—they've gained real skills and real careers because of this work.
        </p>
        <p class="text-black dark:text-white text-body">
            And if this project taught me anything, it's that design matters. It can tell stories that move policy. It can shift perception. It can secure funding and shape futures. In our industry, it's easy to feel like we're just pushing pixels or meeting deadlines. But sometimes—when everything aligns—design really can make a difference. And this time, it did. You can <a href="https://www.illinoiswei.org/" target="_blank" class="font-bold no-underline text-black dark:text-white text-body">view the full site here</a>.
        </p>
      </div>

      <!-- Orange Arrow -->
      <img src="/orange-arrow.svg" alt="Orange Arrow" class="absolute md:-left-12 lg:left-2 xl:left-8 -top-12 w-[175px] h-auto z-0 mr-16 hidden lg:block md:-translate-y-[18rem]" />
    </div>
    
  </main>
</template>

<script setup>
import WorkforceEquityHeroSection from '../components/WorkforceEquityHeroSection.vue'
import SectionHeading from '../components/SectionHeading.vue'
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