<template>
  <main class="w-full max-w-[1600px] px-4 lg:px-8">
    <!-- Hero Section for Better Recommendations Case Study -->
    <BetterRecsHeroSection />
    
    <!-- Content Section with Results Bar -->
    <div class="relative w-full max-w-[1200px] mt-4">
      <!-- Results Bar -->
      <img src="/results-bar.svg" alt="Results Bar" class="absolute right-auto lg:right-0 left-[36rem] md:left-[36rem] lg:left-auto -top-32 md:-top-[25rem] lg:-top-[12rem] w-[145px] lg:w-[175px] h-auto z-0 hidden md:block" />
      
      <!-- Content -->
      <div class="pl-0">
        <!-- Medium Headline with Scribble -->
        <h2 class="font-alumni font-bold text-black dark:text-white mb-0 text-[1.75rem] sm:text-[3rem]">
          A Quick Word From 
          <span class="relative inline-block">
            Our Sponsors 
            <img src="/scribble.svg" alt="scribble" class="absolute -left-2 top-1/2 -translate-y-1/2 w-full pointer-events-none select-none rotate-12" style="z-index:2; width: 100%; height: 100%; max-width: 100%; max-height: 100%;" />
          </span>
          Me
        </h2>
        
        <!-- Paragraphs -->
        <p class="text-black dark:text-white text-body mb-6 md:max-w-lg lg:max-w-3xl xl:max-w-4xl">
          I wanted to include this project because I'm incredibly proud of the outcomes. But it isn't an overly exciting project, and I think that's okay. It's important as a Design Leader to find fast and easy improvements that have a big impact with very little lift from the team. And we achieved that with stellar results with this project. So don't get too excited thinking you'll see some revolutionary design changes. This isn't it. This is about identifying something we were already doing—but poorly—and designing a solution to do it better.
        </p>
        <p class="text-black dark:text-white text-body md:max-w-lg lg:max-w-3xl xl:max-w-4xl">
          After all, it's just recommending products related to what you're already looking at. But with a scientific and data-driven approach, we were able to have a major impact on sales and profits.
        </p>
      </div>
    </div>
    
    <!-- Section Heading: The Final Results -->
    <div class="w-full max-w-[1000px] mr-8 lg:pr-0 mt-16 lg:mt-8">
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
    <div class="lg:max-w-3xl xl:max-w-4xl mt-4 lg:mt-8 mb-16 pr-0 md:pr-8">
      <p class="text-black dark:text-white text-body mb-6">
        The new feature rolled out as a pilot across 400,000 carefully selected SKUs. We wanted to get the results as quickly as possible, so we compiled a list of products with solid product data that also had frequent sales every month. This would allow us to get comparable results more quickly than if we had rolled it out across the entire product line. We gathered the proper data to benchmark against and launched our test for compatibility.
      </p>
      <p class="text-black dark:text-white text-body mb-6">
        The results? Beyond expectations:
      </p>
    </div>


    <!-- Notable Outcomes Section -->
    <div class="relative z-10 w-full flex flex-col lg:flex-row gap-4 max-w-[1200px] items-center lg:-translate-y-24 mb-24 lg:mb-0">
      <!-- Left: Text Content -->
      <div class="w-full lg:max-w-lg xl:max-w-xl flex-shrink-0">
        <!-- Notable Outcomes -->
        <h2 class="font-alumni font-bold text-md-header text-black dark:text-white mb-2 sm:mb-0">
          Notable Business Outcomes
        </h2>
        <ul class="mb-8 space-y-2">
          <li class="text-black dark:text-white text-body">• <strong>36% increase in AOV</strong> (average order value)</li>
          <li class="text-black dark:text-white text-body">• <strong>82% overall increase</strong> in Average Items Per Order</li>
          <li class="text-black dark:text-white text-body">• <strong>44% increase in profits</strong> per order placed</li>
        </ul>
        
        <!-- Paragraph -->
        <p class="text-black dark:text-white text-body">
            We had high expectations, but even we were impressed with these results. The majority of our fastener orders tended to include only 1 or 2 items. But after our Fits With feature launch, the number of items per order nearly doubled. And almost every order included a second product from our recommendations list. We knew we had a winner with this strategy.
        </p>
      </div>
      
      <!-- Right: Mobile Screenshots -->
      <div class="w-full lg:max-w-md flex-shrink-0">
        <div class="flex flex-col sm:flex-row gap-2 md:gap-4">
          <img 
            src="/recs-mobile-1.png" 
            alt="Better Recommendations Mobile Screenshot 1" 
            class="w-full sm:w-[49%] lg:w-[225px] h-auto hero-drop-shadow rounded-2xl"
          />
          <img 
            src="/recs-mobile-2.png" 
            alt="Better Recommendations Mobile Screenshot 2" 
            class="w-full sm:w-[49%] lg:w-[225px] h-auto hero-drop-shadow rounded-2xl"
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
            So let's talk about how we got here. Picture this: you're shopping for a 3/4"-20 bolt, and our system suggests an unrelated #8 deck screw or a random 1/2"-32 nut. Helpful? Not exactly (if you know anything about fasteners).
        </p>
        <p class="text-black dark:text-white text-body">
            Customers were left piecing together their orders manually, running multiple searches for nuts and washers that should have been recommended alongside their bolts in the first place. It was inefficient, frustrating, and a missed opportunity for better sales. I identified the issue while watching some customers interact on our site, raised it to the organization, and recommended a hypothesis for how we might fix it and increase sales at the same time.
        </p>
      </div>
    </div>

    <div class="w-full max-w-[1200px]">
        <h2 class="font-alumni font-bold text-[3rem] leading-[100%] text-black dark:text-white">
            The Plan: Right Product, Right Time
        </h2>
    </div>

    <!-- Two-Column Content Section -->
    <div class="relative z-10 w-full max-w-[1200px] flex flex-col lg:flex-row xl:items-center gap-8 lg:gap-12 mb-16 xl:-translate-y-12">
      <!-- Left: Text Content -->
      <div class="flex-1">
        <p class="text-black dark:text-white text-body mb-6">
            Design can solve a lot of problems, but it can't fix everything alone. To get data from our internal systems out into the front-end of the website requires multiple teams and a lot of collaboration. Luckily, that's where I thrive. *Points at myself with both thumbs*
        </p>
        <p class="text-black dark:text-white text-body">
            We huddled with the merchandising team to craft a system of compatibility criteria ranked by importance: Must match, should match, and can match. By analyzing this compatibility data, we revamped our recommendation engine to suggest only items that truly matched the product being viewed—nuts and washers compatible in size, grade, and material at a minimum. We repositioned the recommendation carousel closer to the "Add to Cart" button, ensuring it caught the user's eye when they were in the midst of their purchasing decision.
        </p>
      </div>
      
      <!-- Right: Image -->
      <div class="lg:w-[480px] flex-shrink-0">
        <img 
          src="/matching-table.webp" 
          alt="Matching Table" 
          class="w-full h-auto hero-drop-shadow rounded-2xl"
        />
      </div>
    </div>

    <!-- Section Heading: Getting to MVP -->
    <div class="w-full max-w-[1100px] mr-8 lg:pr-12 xl:pr-0 mt-8 lg:mt-0">
      <SectionHeading
        main-text="Getting to MVP"
        small-text="Final Product"
        bg-text="Getting On With It"
        align="justified"
        bgTextTop="top-[-75%] sm:top-[-20%] md:top-[12%] lg:top-[20%]"
        bgTextLeft="-left-[15rem] sm:left-[-15rem] md:left-[-18rem]"
        bgTextSize="text-[100px] sm:text-[120px] md:text-[180px]"
      />
    </div>

    <!-- MVP Content Section -->
    <div class="relative w-full max-w-[1200px] flex flex-col lg:flex-row gap-8 lg:gap-12 mt-8 mb-8">
      <!-- Left: Text Content -->
      <div class="flex-1 md:max-w-lg lg:max-w-2xl xl:max-w-4xl">
        <p class="text-black dark:text-white text-body mb-6">
            Like all good projects, it starts with a solid plan and clearly defined problems.
        </p>
        <ol class="space-y-3">
          <li class="text-black dark:text-white text-body flex">
            <span class="font-bold mr-3">1.</span>
            <span><strong>Researching the Pain Points:</strong> Customer told us loud and clear—irrelevant recommendations were a headache, and many customers would simply abandoned the site due to frustration. In a focus group study, we saw users wrongly assume we didn't have the product they needed, validating a strong customer need.</span>
          </li>
          <li class="text-black dark:text-white text-body flex">
            <span class="font-bold mr-3">2.</span>
            <span><strong>Prototyping Solutions:</strong> We explored several designs, but ultimately focused on quick, impactful fixes. What components do we already have? What design elements can we reuse to minimize new tech debt to maintain?</span>
          </li>
          <li class="text-black dark:text-white text-body flex">
            <span class="font-bold mr-3">3.</span>
            <span><strong>User Testing:</strong> Moderated and unmoderated tests confirmed our hypothesis with real Zoro customers. In 100% of the tests, users were able to find compatible products almost immediately, and unanimously preferred the new approach.</span>
          </li>
        </ol>
      </div>
      
      <!-- Right: Orange Bar -->
      <div class="absolute z-1 lg:w-[200px] flex-shrink-0 flex justify-center lg:justify-end md:-translate-y-[15rem] lg:-translate-y-[23rem] xl:-translate-y-[25rem] md:left-[36rem] lg:left-[46rem] xl:left-[58rem] hidden md:block">
        <img 
          src="/right-mvp-bar.svg" 
          alt="MVP Bar" 
          class="w-[145px] lg:w-[175px] h-auto"
        />
      </div>
    </div>

    <!-- Three Images Section -->
    <div class="relative z-10 w-full max-w-[1200px] flex flex-col lg:flex-row gap-4 md:gap-6 mb-16">
      <!-- Left: Figma Screenshot (50% width) -->
      <div class="w-full lg:w-2/3">
        <img 
          src="/recs-figma-screenshot.png" 
          alt="Recommendations Figma Screenshot" 
          class="w-full h-auto hero-drop-shadow rounded-2xl"
          style=""
        />
      </div>
      
      <!-- Right: Mobile Screenshots (50% width, side by side) -->
      <div class="w-full lg:w-[45%] flex gap-2 md:gap-4">
        <img 
          src="/recs-mobile-1.png" 
          alt="Recommendations Mobile Screenshot 1" 
          class="w-[49%] lg:w-1/2 h-auto hero-drop-shadow rounded-2xl"
          style=""
        />
        <img 
          src="/recs-mobile-2.png" 
          alt="Recommendations Mobile Screenshot 2" 
          class="w-[49%] lg:w-1/2 h-auto hero-drop-shadow rounded-2xl"
          style=""
        />
      </div>
    </div>

    <!-- Section Heading: The Road Ahead -->
    <div class="w-full max-w-[1100px]">
      <SectionHeading
        main-text="The Road Ahead"
        small-text="Conclusion"
        bg-text="The Conclusion"
        align="left"
        bgTextTop="top-[-55%] sm:top-[-20%] md:top-[10%] lg:top-[20%]"
        bgTextLeft="left-[-16rem] md:left-[-15rem] lg:left-[-25%]"
        bgTextSize="text-[120px] md:text-[180px]"
      />
    </div>

    <!-- Conclusion Content Section -->
    <div class="relative w-full max-w-[1200px] flex flex-col md:flex-row gap-8 lg:gap-12 mt-8">
      <!-- Left: Orange Arrow -->
      <div class="relative z-1 pl-4 lg:pl-8 lg:w-[200px] flex-shrink-0 flex justify-start md:-mt-[17rem] lg:-mt-[15rem] hidden md:block">
        <img 
          src="/orange-arrow.svg" 
          alt="Orange Arrow" 
          class="w-[145px] lg:w-[175px] h-auto"
        />
      </div>
      
      <!-- Right: Text Content -->
      <div class="flex-1">
        <p class="text-black dark:text-white text-body mb-6">
            Making high quality recommendations is more science than art. But thoughtful cross-team collaboration with Data Science and Merchandising Teams allowed us to create actionable rules for what we display with each product. The rest was me using existing site components and structures to craft an intuitive experience that made sense to the customer that we could build quickly and efficiently.
        </p>
        <p class="text-black dark:text-white text-body">
            We launched it as a proof-of-concept, but the results got us buy-in from leadership to expand this effort out across a greater number of categories. What began as an effort to sell more fasteners transformed into a robust system that's improving how our users shop, in every category, every day.
        </p>
      </div>
    </div>

  </main>
</template>

<script setup>
import BetterRecsHeroSection from '../components/BetterRecsHeroSection.vue'
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