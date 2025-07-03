<template>
  <main class="w-full max-w-[1600px] px-4 lg:px-8">
    <!-- Hero Section for TLDR Page (reversed layout) -->
    <TLDRHeroSection />
    
    <!-- Section Heading: Types of Experience -->
    <div class="w-full max-w-[1000px] mt-16">
      <SectionHeading
        main-text="Types of Experience"
        main-text-mobile="Experience"
        small-text="Background"
        bg-text="Types of Experience"
        align="left"
        bgTextTop="top-[-75%] sm:top-[-20%] md:top-[15%] lg:top-[25%]"
        bgTextLeft="left-[-15rem] sm:left-[-15rem] md:left-[-2rem] lg:left-[2rem]"
        bgTextSize="text-[100px] sm:text-[120px] md:text-[150px] lg:text-[180px]" 
      />
    </div>
    
    <!-- Experience Content Section -->
    <ExperienceSection />
    
    <!-- Section Heading: Quick Case Studies -->
    <div class="w-full max-w-[1200px] pr-0 mt-16 lg:mt-0 lg:mb-24">
      <SectionHeading
        main-text="Quick Case Studies"
        main-text-mobile="Case Studies"
        small-text="Examples of Work"
        small-text-mobile="Work"
        bg-text="Quick Case Studies"
        align="right"
        bgTextTop="top-[25%] sm:top-[35%] md:top-[55%] lg:top-[60%]"
        bgTextLeft="left-[-2rem] sm:left-[-2rem] md:left-[-2rem] lg:left-[-3rem] xl:left-[0rem]"
        bgTextSize="text-[120px] sm:text-[130px] md:text-[150px] lg:text-[180px]"
      />
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
    
    <!-- TLDR More Section -->
    <TLDRMore />
    
  </main>
</template>

<script setup>
import SectionHeading from '../components/SectionHeading.vue'
import TLDRHeroSection from '../components/TLDRHeroSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import WorkProjectShowcase from '../components/WorkProjectShowcase.vue'
import TLDRMore from '../components/TLDRMore.vue'
</script> 