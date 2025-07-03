<template>
  <section class="relative w-full mt-8 max-w-[1200px] ml-0">
    <!-- Content Layout: Orange Bar + Text -->
    <div class="flex flex-col lg:flex-row items-start w-full relative mb-12 lg:mb-24">
      <!-- Left Orange Bar -->
      <div class="relative z-0 flex flex-col justify-start items-start z-0 mb-8 lg:mb-0 lg:ml-8 -mt-80 ml-0 md:ml-12 hidden md:block">
        <img src="/orange-arrow.svg" alt="Orange Arrow" class="w-[125px] lg:w-[175px] h-auto" />
      </div>
      
      <!-- Right Text Content -->
      <div class="flex-1 pl-0 lg:pl-12 w-full">
        <!-- Full-width intro text -->
        <div class="mb-8 w-full">
          <p class="text-black dark:text-white text-body">
            I have <strong>project-based experience</strong>, with examples, in the following industries and categories.
          </p>
        </div>
        
        <!-- Two-column layout -->
        <div class="flex flex-col md:flex-row gap-0 md:gap-12 w-full">
          <!-- Left Column -->
          <div class="flex-1">
            <p class="text-black dark:text-white text-body mb-0"><strong>FinTech</strong></p>
            <p class="text-black dark:text-white text-body mb-0"><strong>e-Commerce</strong></p>
            <p class="text-black dark:text-white text-body mb-0"><strong>Insurance Technology</strong></p>
            <p class="text-black dark:text-white text-body mb-0"><strong>Native Mobile Apps</strong> (mostly iOS)</p>
            <p class="text-black dark:text-white text-body mb-0"><strong>Corporate Marketing Sites</strong></p>
            <p class="text-black dark:text-white text-body mb-0"><strong>Internal Tools & Systems</strong></p>
            <p class="text-black dark:text-white text-body mb-0"><strong>Online Applications</strong> (incl. User Flows)</p>
            <p class="text-black dark:text-white text-body mb-0"><strong>Creating Design Systems</strong></p>
            <p class="text-black dark:text-white text-body mb-0"><strong>Building Component Libraries</strong></p>
          </div>
          
          <!-- Right Column -->
          <div class="flex-1">
            <p class="text-black dark:text-white text-body mb-0"><strong>UX Research and User Testing</strong></p>
            <p class="text-black dark:text-white text-body mb-0"><strong>Advanced Prototyping</strong></p>
            <p class="text-black dark:text-white text-body mb-0"><strong>Visual Design</strong></p>
            <p class="text-black dark:text-white text-body mb-0"><strong>Figma</strong> (primarily)</p>
            <p class="text-black dark:text-white text-body mb-0"><strong>Miro</strong> (User journeys and mapping)</p>
            <p class="text-black dark:text-white text-body mb-0"><strong>Leading Workshops & Focus Groups</strong></p>
            <p class="text-black dark:text-white text-body mb-0"><strong>Photoshop</strong> (for graphics/icons)</p>
            <p class="text-black dark:text-white text-body mb-0"><strong>Illustrator/Procreate</strong> (for illustration)</p>
            <p class="text-black dark:text-white text-body mb-0"><strong>HTML5 & CSS3</strong> (coding experience)</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No props needed for this component
</script>

<style scoped>
/* Remove default paragraph margins */
p {
  margin: 0;
}
</style> 