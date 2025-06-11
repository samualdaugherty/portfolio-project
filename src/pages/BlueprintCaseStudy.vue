<template>
  <main class="w-full max-w-[1600px] px-4 lg:px-8">
    <!-- Hero Section for Blueprint Case Study -->
    <BlueprintHeroSection />
    
    <!-- Section Heading: The Final Results -->
    <div class="w-full max-w-[1050px] mr-8 lg:pr-0 mt-16">
      <SectionHeading
        main-text="The Final Results"
        small-text="Results"
        bg-text="Start at the End"
        align="justified"
        bgTextTop="top-[-75%] sm:top-[-20%] md:top-[12%] lg:top-[20%]"
        bgTextLeft="-left-[15rem] sm:left-[-16rem] md:left-[-18rem]"
        bgTextSize="text-[100px] sm:text-[150px] md:text-[180px]"
      />
    </div>
    
    <!-- Results Bar -->
    <div class="relative w-full max-w-[1100px]">
      <img src="/results-bar.svg" alt="Results Bar" class="absolute right-auto lg:right-0 left-[36rem] md:left-[36rem] lg:left-auto -top-32 md:-top-[20rem] lg:-top-[24rem] w-[145px] lg:w-[175px] h-auto z-0 hidden md:block" />
    </div>
    
    <!-- Results Description -->
    <div class="max-w-xl lg:max-w-3xl xl:max-w-4xl mt-4 lg:mt-8 mb-8 lg:mb-16 pr-0 md:pr-8">
      <p class="text-black dark:text-white text-body mb-6">
        One quick note before we begin: The actual app that exists in the real world is not called Blueprint. It could be any bank you've interacted with, as the project's goal was to sell to any of our banking partners as a stand-alone application they could use. It was specifically designed for one banking partner, with specific needs, and then expanded to cover wide-ranging needs, scenarios, and edge cases.
      </p>
      <p class="text-black dark:text-white text-body mb-6">
        I would consider the project a success, and also a learning experience (more on that in my conclusion). But overall, I was able to address the business goals and still create a good experience for our customers. I was also able to come up with a roadmap of future iterations and features that would be crucial to recuperating our initial investment by making this a product we could sell to our existing and future banking partners.
      </p>
    </div>
    
    <!-- Results and Image Section -->
    <div class="relative z-10 w-full flex flex-col xl:flex-row gap-4 mb-16 max-w-[1200px]">
      <!-- Left: Text Content -->
      <div class="w-full lg:max-w-xl flex-shrink-0">
        <!-- Notable Outcomes -->
        <h2 class="font-alumni font-bold text-[1.75rem] sm:text-[3rem] text-black dark:text-white mb-2 sm:mb-0">
          Notable Business Outcomes
        </h2>
        <ul class="mb-8 space-y-2">
          <li class="text-black dark:text-white text-body">• <strong>Over 1,500 Customers</strong> onboarded in the first week</li>
          <li class="text-black dark:text-white text-body">• <strong>18% decline in late or missed payments</strong> quarter-over-quarter</li>
          <li class="text-black dark:text-white text-body">• <strong>12% fewer calls to Customer Care</strong> flagged as website issues</li>
        </ul>
        
        <!-- MVP Priorities -->
        <h2 class="font-alumni font-bold text-[1.75rem] sm:text-[3rem] text-black dark:text-white mb-2 sm:mb-0">
          Identified Priorities for MVP
        </h2>
        <ul class="space-y-2">
          <li class="text-black dark:text-white text-body">• Sign In (no sign up because customers already exist)</li>
          <li class="text-black dark:text-white text-body">• Connecting Bank Accounts</li>
          <li class="text-black dark:text-white text-body">• Cash Advance and Withdraws</li>
          <li class="text-black dark:text-white text-body">• Schedule/View Payments and AutoPay</li>
          <li class="text-black dark:text-white text-body">• Account settings, Personal Info, etc.</li>
        </ul>
      </div>
      
      <!-- Right: Image -->
      <div class="w-full lg:max-w-3xl">
        <img 
          src="/blueprint-sketch-to-final.png" 
          alt="Blueprint Sketch to Final Design" 
          class="w-full h-auto hero-drop-shadow rounded-2xl"
        />
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
        <p class="text-black dark:text-white text-body">
            A bit of background. This company is a credit and lending institution with three products. Each product has its own brand, own domain, and is not under a common umbrella like you'd find somewhere like Discover. This app was intended to be designed and launched for one of those loan products first, but would also be the foundation for the other products. So, whatever we designed would need to work (with minor changes) for all three different products: two loan products, and one credit card. There are nuances between each of the products that I would have to customize for, but many of the features would be consistent across all products. And we wanted to focus on those for our MVP.
        </p>
      </div>
      
      <!-- Working With Limited Data Section -->
      <div class="mb-8">
        <h2 class="font-alumni font-bold text-[1.75rem] sm:text-[3rem] text-black dark:text-white">
          Working With Limited Data
        </h2>
        <p class="text-black dark:text-white text-body mb-6 max-w-4xl">
            One of the issues we anticipated was that we didn't have analytics data on our customer accounts. We had it on our public-facing marketing pages, but once you log in, we can't see what you're doing. So we had to just do everything ourselves and make some hypotheses about what our customers are doing.
        </p>
        <p class="text-black dark:text-white text-body max-w-4xl">
            I sat down with the PM and we set priorities and expectations for the project into phases. What will MVP be that will meet the basic needs of customers? What are expectations that can be added post-launch? What amount of time will the dev team need to build and test the product? It was a lot of give and take trying to find the right balance of features we could — and should — launch with.
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
            One of the issues we anticipated was that we didn't have analytics data on our customer accounts. We had it on our public-facing marketing pages, but once you log in, we can't see what you're doing. So we had to just do everything ourselves and make some hypotheses about what our customers are doing.
        </p>
        <p class="text-black dark:text-white text-body">
            I sat down with the PM and we set priorities and expectations for the project into phases. What will MVP be that will meet the basic needs of customers? What are expectations that can be added post-launch? What amount of time will the dev team need to build and test the product? It was a lot of give and take trying to find the right balance of features we could — and should — launch with.
        </p>
      </div>
      
      <!-- Right: Image -->
      <div class="lg:w-[560px] flex-shrink-0">
        <img 
          src="/bp-findings-table.png" 
          alt="Blueprint Research Findings Table" 
          class="w-full h-auto hero-drop-shadow rounded-2xl"
        />
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
    <div class="relative z-10 w-full max-w-[1200px] flex flex-col lg:flex-row gap-8 lg:gap-12 mt-8 mb-16">
      <!-- Left: Images -->
      <div class="lg:w-[560px] flex-shrink-0 space-y-6">
        <img 
          src="/bp-journey-map.png" 
          alt="Blueprint Journey Map" 
          class="w-full h-auto hero-drop-shadow rounded-2xl"
        />
        <img 
          src="/bp-wireframe-sketches.png" 
          alt="Blueprint Wireframe Sketches" 
          class="w-full h-auto hero-drop-shadow rounded-2xl"
        />
      </div>
      
      <!-- Right: Text Content -->
      <div class="flex-1">
        <p class="text-black dark:text-white text-body mb-6">
            Yes, I did low-fidelity design work, user flows, and task mapping. I feel like it's a given that we do this when trying to solve the problem. Especially at the level of Lead Designer. I thought about skipping it but it still feels important to show for some reason. Probably because of everyone's general anxiety around portfolios?
        </p>
        
        <ul class="mb-6 space-y-2">
          <li class="text-black dark:text-white text-body">• I started with simply exploring our own site on mobile and trying to achieve high level tasks, including multiple tasks in the same session (withdraw, transfer, add a new bank, set up a new direct deposit, and pay a bill).</li>
          <li class="text-black dark:text-white text-body">• I then mapped out how we may be able to perform those tasks in fewer clicks</li>
          <li class="text-black dark:text-white text-body">• I then did some quick sketches of what these steps might look like and how some of the functionality might play out in a real environment</li>
        </ul>
        
        <p class="text-black dark:text-white text-body">
            I made notes along the way of feedback or ideas needing additional explanation. We then went on to use the sketches to start mocking up the designs.
        </p>
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
            I did some wireframing, but not a lot. Mostly because I already had a well-established Design System and a robust Component Library that I could pull from. For most of the mockups I was able to jump right into high-fidelity layouts for all of the screens. Which is wonderful when you're working on such tight deadlines.
        </p>
        <p class="text-black dark:text-white text-body">
            Here's a handful of screenshots:
        </p>
      </div>
    </div>
    
    <!-- First Screenshot Grid -->
    <div class="w-full mb-16 max-w-[1200px]">
      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-1">
        <img 
          v-for="n in 6" 
          :key="n" 
          :src="`/blueprint-row1-${n}.png`" 
          :alt="`Blueprint Row 1 Screenshot ${n}`" 
          class="w-full h-auto hero-drop-shadow rounded-2xl max-w-none"
        />
      </div>
    </div>
    
    <!-- Middle Paragraph -->
    <div class="w-full mb-16 max-w-[1200px]">
      <p class="text-black dark:text-white text-body">
        Obviously what's up there was the final version, but we went through a handful of iterations as all things do. I had a habit of testing frequently during ideation by having non-product employees run through prototypes with me and providing feedback. Many compared what we were building with other apps they were already using and used to. As we were approaching the final stretch we did a small moderated test with 5 users over Zoom on User Testing. The files were handed off after a meeting to coordinate with the Product and Engineering Teams. Notes were made, documentation was written, key stakeholders were kept up on the progress during Sprint Demos.
      </p>
    </div>
    
    <!-- Second Screenshot Grid -->
    <div class="relative z-10 w-full mb-16 max-w-[1200px]">
      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-1">
        <img 
          v-for="n in 6" 
          :key="n" 
          :src="`/blueprint-row2-${n}.png`" 
          :alt="`Blueprint Row 2 Screenshot ${n}`" 
          class="w-full h-auto hero-drop-shadow rounded-2xl max-w-none"
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
    
    <!-- Conclusion Content -->
    <div class="relative w-full max-w-[1200px] mt-8 mb-16">
      <!-- Orange Arrow -->
      <img src="/orange-arrow.svg" alt="Orange Arrow" class="absolute md:-right-12 lg:-right-12 xl:right-0 -top-12 w-[175px] h-auto z-0 mr-16 hidden md:block md:-translate-y-[18rem]" />
      
      <!-- Content -->
      <div class="lg:pl-16 xl:pl-52 md:max-w-lg lg:max-w-2xl xl:max-w-4xl">
        <p class="text-black dark:text-white text-body">
            So, what did I learn from this? First, trying to design one app for three very different products was more challenging that I had expected. While some features would be consistent — login flows, making a payment, Menus, etc. — others are very different. A Line of Credit and a Credit Card serve two very different purposes, and their apps have very different functions. We learned that “serves as the foundation of” doesn't mean you can use most of the codebase. We ultimately will have to create different apps to serve the needs of those brands.
        </p>
      </div>
    </div>
    
    <!-- Future Roadmap Section -->
    <div class="w-full max-w-[1200px] mb-4">
      <h2 class="font-alumni font-bold text-[1.75rem] sm:text-[3rem] text-black dark:text-white">
        Future Roadmap
      </h2>
      
      <!-- Two-column layout -->
      <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <!-- Left: Text Content -->
        <div class="flex-1">
          <p class="text-black dark:text-white text-body">
            Even before we started this MVP, we had identified features that would be beneficial to customers, but ultimately wouldn't make it into MVP. We also identified a few features that would be new for our customers, such as using mobile pay to purchase items directly from your available balance. A lot of these features require more than just design support though. Features like mobile pay are going to require investment and updates to our enterprise architecture to allow for them. So, for now, I'm focusing on building out features we can currently support, while having discussions around future additions to keep the momentum going.
          </p>
        </div>
        
        <!-- Right: Image -->
        <div class="lg:w-[560px] flex-shrink-0">
          <img 
            src="/bp-future-roadmap.png" 
            alt="Blueprint Future Roadmap" 
            class="w-full h-auto hero-drop-shadow rounded-2xl"
          />
        </div>
      </div>
    </div>
    
  </main>
</template>

<script setup>
import SectionHeading from '../components/SectionHeading.vue'
import BlueprintHeroSection from '../components/BlueprintHeroSection.vue'
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