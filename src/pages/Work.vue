<template>
  <main class="w-full max-w-[1600px] px-4 lg:px-8">
    <!-- Hero Section for Work Page -->
    <WorkHeroSection />
    
    <!-- Section Heading: What to Expect -->
    <div class="w-full max-w-[1000px] pr-8 lg:pr-0 mt-16">
      <SectionHeading
        main-text="What to Expect"
        small-text="Case Studies"
        bg-text="What to Expect"
        align="right"
        bgTextTop="top-[10%] sm:top-[40%] md:top-[55%] lg:top-[60%]"
        bgTextLeft="left-[-1rem] sm:left-[-2rem] md:left-[0rem] lg:left-0 xl:left-0"
        bgTextSize="text-[100px] sm:text-[150px] md:text-[150px] lg:text-[180px]"
      />
    </div>
    
    <!-- Work Bar -->
    <div class="relative w-full max-w-[1000px]">
      <img src="/work-bar.svg" alt="Work Bar" class="absolute right-auto lg:right-0 left-[36rem] md:left-[34rem] lg:left-auto -top-32 md:-top-[20rem] lg:-top-80 w-[145px] lg:w-[175px] h-auto z-0 hidden md:block" />
    </div>
    
    <!-- Case Study Description -->
    <div class="max-w-xl lg:max-w-3xl mt-4 lg:mt-8 mb-16 pr-0 md:pr-8">
      <p class="text-black dark:text-white text-body mb-6">
        These are the big projects. With strong, tangible results. But it's IC level work. All of it.
      </p>
      <p class="text-black dark:text-white text-body mb-6">
        Creating a case study for strategy work is challenging. How do you capture the opportunity sizing of an idea or the nuances of aligning stakeholders? These moments all happen behind the scenes, invisible in metrics or screenshots. But, case studies demand tangible outcomes with polished deliverables.
      </p>
      <p class="text-black dark:text-white text-body mb-6">
        Strategy work is often a mosaic of mentoring teams, earning buy-in, and iterating endlessly. Not every effort leads to a case study-worthy success. Failed experiments, minor optimizations, and scrapped ideas are just as integral to the process, even if they don't shine in a portfolio.
      </p>
      <p class="text-black dark:text-white text-body mb-6">
        This is just a collection of impactful projects, but they're just pieces of the bigger story. If you want to dive into the unseen layers of cross-team collaboration, presentations to executives, or anything in between, I'd love to chat.
      </p>
    </div>

    <!-- Case Study: Blueprint Banking App -->
    <WorkProjectShowcase 
      title="Blueprint Mobile Banking App"
      shortTitle="Blueprint Banking App"
      projectType="Native iOS App"
      description="Blueprint is a white label banking app for existing customers to manage their accounts, pay their loans, and make transfers. A project that had to expand across five separate brands."
      keyResult="18% decline in late or missed payments"
      labelText="Original Design"
      :imageCount="4"
      imagePrefix="blueprint"
      mobileLabelLeft="left-[-68px] sm:left-[-98px] md:left-[-100px]"
      mobileLabelTop="top-[55%]"
      desktopLabelLeft="left-[-115px]"
      desktopLabelTop="top-[55%]"
      linkTo="/work/blueprint-mobile-banking-app"
    />

    <!-- Case Study: Better Recommendations -->
    <WorkProjectShowcase 
      title="Better Recommendations"
      shortTitle="Better Recs"
      projectType="e-Commerce"
      description="We were tasked with increasing Add to Cart and Average Order Value within the Fastener category, and we identified a way to save customers time and effort by improving our recommendations."
      keyResult="A massive 64% higher AOV compared to the control."
      labelText="New Feature"
      :imageCount="2"
      imagePrefix="Recs"
      mobileLabelLeft="left-[-58px] sm:left-[-83px] md:left-[-83px]"
      mobileLabelTop="top-[55%]"
      desktopLabelLeft="left-[-100px]"
      desktopLabelTop="top-[55%]"
      linkTo="/work/better-recommendations"
    />

    <!-- Case Study: Today Card Mobile App -->
    <WorkProjectShowcase 
    title="Today Card Mobile App"
    shortTitle="Today Card App"
    projectType="Native iOS App"
    description="A redesigned mobile app for our Credit Card product, with a focus on making payments fast and easy to reduce late or missed payments and increase use of Autopay for our customers."
    keyResult="24% increase in use of Autopay and 9% reduction in late payments in the first 90 days."
    labelText="App Redesign"
    :imageCount="4"
    imagePrefix="Today"
    mobileLabelLeft="left-[-61px] sm:left-[-90px] md:left-[-90px]"
    mobileLabelTop="top-[55%]"
    desktopLabelLeft="left-[-106px]"
    desktopLabelTop="top-[55%]"
    linkTo="/work/today-card-app"
    />

    <!-- Case Study: Product Comparison -->
    <WorkProjectShowcase 
      title="Illinois College Board"
      shortTitle="Illinois College Board"
      projectType="Government"
      description="Building a digital experience that clearly communicates the impact of their Workforce Equity Initiative (WEI)—a program designed to help thousands of people across Illinois train for better-paying, in-demand careers."
      keyResult="Over $18M in new grant funding"
      labelText="New Project"
      :imageCount="2"
      imagePrefix="wei"
      mobileLabelLeft="left-[-58px] sm:left-[-83px] md:left-[-83px]"
      mobileLabelTop="top-[55%]"
      desktopLabelLeft="left-[-100px]"
      desktopLabelTop="top-[55%]"
      linkTo="/work/workforce-equity-initiative"
    />

    <!-- Additional case studies would go here -->
    
    <!-- There's More Section -->
    <TheresMore />
    
  </main>
</template>

<script setup>
import SectionHeading from '../components/SectionHeading.vue'
import WorkHeroSection from '../components/WorkHeroSection.vue'
import WorkProjectShowcase from '../components/WorkProjectShowcase.vue'
import TheresMore from '../components/TheresMore.vue'
</script> 