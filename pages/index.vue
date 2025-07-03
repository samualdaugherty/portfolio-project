<template>
  <div class="w-full max-w-[1600px] pl-4 lg:pl-8 pr-4 lg:pr-8">
    <HeroSection />
    <div class="w-full max-w-[1000px] mr-8 lg:pr-0 mt-8">
      <SectionHeading
        main-text="Recent Projects"
        small-text="Work"
        bg-text="Recent Projects"
        align="left"
        bgTextTop="top-[-75%] sm:top-[-20%] md:top-[15%] lg:top-[20%]"
        bgTextLeft="left-[-15rem] sm:left-[-15rem] md:left-[-5rem] lg:left-0"
        bgTextSize="text-[100px] sm:text-[120px] md:text-[150px] lg:text-[180px]"
      />
    </div>
    <ProjectShowcase />
    <ProjectShowcaseToday />
    <ProjectShowcaseRecs />
    <BioSection />
    <TalkSoon />
  </div>
</template>

<script setup>
// Components are auto-imported in Nuxt 3
</script> 