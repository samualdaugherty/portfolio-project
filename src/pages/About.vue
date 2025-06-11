<template>
    <div class="w-full max-w-[1200px] pt-12 px-4 md:px-8">
        <!-- Hero Section (reuse HeroSection.vue, but with new image) -->
        <section class="w-full relative flex flex-col lg:flex-row items-start lg:items-center pt-8 md:pt-24 z-10 lg:pl-4 overflow-x-visible">
            <div class="flex flex-col items-start w-full lg:w-auto lg:max-w-3xl z-10">
                <h1 class="font-alumni font-bold text-xl-header sm:text-xl-header-sm sm:mb-8 text-left text-black dark:text-white">
                    Hello,<br />I'm Sam
                </h1>
            </div>
            <div class="flex items-center ml-0 mt-8 lg:ml-8 lg:mt-0 z-0 lg:mr-[-6rem] w-full lg:w-auto max-w-2xl">
                <img src="/Seated-Pic.png" alt="Samual Seated" class="w-full lg:w-[480px] h-auto hero-drop-shadow object-contain"
                    style="max-width: none;" />
            </div>
        </section>


        <!-- Section Heading: A Bit Lot About Me (right-justified, with scribble) -->
        <div class="mt-16 relative mr-4 xl:mr-28">
            <SectionHeading 
            main-text="A Bit Lot About Me" 
            small-text="Intro" 
            bg-text="The About Me" 
            align="right"
            bgTextTop="top-[10%] sm:top-[40%] md:top-[35%] lg:top-[50%]"
            bgTextLeft="left-[-1rem] sm:left-[-2rem] md:left-[0rem] lg:left-0 xl:left-[5rem]"
            bgTextSize="text-[120px] sm:text-[150px] md:text-[150px] lg:text-[180px]"
            :scribble="true" :no-padding="true" />

            <img src="/Me-Bar.svg" alt="Me Bar"
                class="absolute right-auto lg:right-0 left-[33rem] lg:left-auto -top-40 lg:-top-64 w-[145px] lg:w-[175px] h-auto z-0 hidden md:block" />
        </div>

        <!-- Main Content -->
        <div class="mb-0 mt-8 max-w-3xl">
            <p class="text-black dark:text-white text-body mb-6 w-full md:max-w-lg lg:max-w-none">Online, you'll usually find me as Samual Daugherty
                (yes, it's actually spelled that way), but you can just call me Sam. I'm a multi-disciplinary designer
                who has spent years crafting campaigns, products and strategies, and eating an unhealthy amount of
                cookies.</p>
            <p class="text-black dark:text-white text-body mb-6 w-full md:max-w-lg lg:max-w-none">For over a decade, I've focused on UX and Product
                Design, but my background spans graphic design, illustration, art direction, web development, and even a
                short stint as a high school teacher. I've worked in FinTech, Insurance, e-Commerce, and government
                consulting. My proudest accomplishment was helping to procure more than $15M in educational grants for
                my state using the principles of story telling and UX.</p>
            <p class="text-black dark:text-white text-body mb-6">I love all aspects of visual design and typography,
                have a deep appreciation for hip-hop and graffiti, and gravitate toward a minimal aesthetic with strong
                personality—bold but balanced. I'm a fan of the Oxford Comma and the em dash in my writing. But lately
                the em dash will get you accused of being an AI. You can usually find me watering plants (because they
                seem to always need watering), reading a book, or enjoying coffee and cookies.</p>
        </div>
        <div class="mb-4 lg:mb-16 max-w-10xl">
            <p class="text-black dark:text-white text-body mb-6">At home, I'm married to Daryl, a nurse who happens to be the
                introvert to my extrovert. We have two kids whom I adore, and we like to go out for treats and travel.
                One of our favorite pastimes is trying to find the best local donuts and hot chocolates in every city we
                visit (special shoutout to Doughnut Vault in Chicago).</p>
            <p class="text-black dark:text-white text-body">I absolutely love a good conversation and a get-to-know-you coffee chat. If you ever want to talk over coffee (or swap cookie recommendations), feel free to reach out at <strong>samual.daugherty@gmail.com</strong>. If you want a more professional summary of me you can read it <a href="#">here</a>.</p>
        </div>

        <!-- Section Heading: A Bit More About Me (left-justified) -->
        <div class="mt-16">
            <SectionHeading 
            main-text="A Bit More About Me" 
            small-text="The Rest" 
            bg-text="A Bit More"
            align="left"
            bgTextTop="top-[-75%] sm:top-[-20%] md:top-[15%] lg:top-[25%]"
            bgTextLeft="left-[-15rem] sm:left-[-12rem] md:left-[-12rem] lg:left-[-13rem]"
            bgTextSize="text-[100px] sm:text-[150px] md:text-[150px] lg:text-[180px]" 
        />
        </div>

        <!-- Bulleted List -->
        <div class="mb-16 mt-8 max-w-4xl">
            <ul class="list-disc pl-5 sm:pl-8 text-black dark:text-white text-body">
                <li class="mb-2"><strong>Above all, I value curiosity.</strong> It keeps our minds open to new experiences, perspectives,
                    and ideas.</li>
                <li class="mb-2"><strong>I value hope and optimism.</strong> They keep us open to change.</li>
                <li class="mb-2"><strong>I value love and respect</strong> in every aspect of my life, including at work.</li>
                <li class="mb-2"><strong>I value generosity and giving back.</strong> This allows me to make an impact in my community and in the lives of the people around me.</li>
                <li class="mb-2"><strong>I value being humble.</strong> I will never pretend to be the smartest person in the room&mdash;I'm always eager to learn from those around me and the people I meet. I like to listen more than speak.
                </li>
            </ul>
        </div>

        <!-- 10 Fun Facts About Me -->
        <div class="pl-0 md:pl-[10vw]">
            <h2 class="font-alumni font-bold text-md-header text-black dark:text-white mb-4">10 Fun Facts About Me</h2>
            <ol class="list-decimal pl-5 sm:pl-8 text-black dark:text-white text-body">
                <li class="mb-2">I never learned how to swim—probably because my mom never did either. And I once
                    floated away in the ocean when I was a kid.</li>
                <li class="mb-2">My interest in professional design started after I was arrested for graffiti. The judge
                    told me to 'find a healthier outlet for my art,' and, well, here we are.</li>
                <li class="mb-2">I've owned more than 20 cars, but I don't consider myself a 'car guy.' I just love
                    cars.</li>
                <li class="mb-2">I keep my wardrobe simple—if I find a shirt or pair of pants I like, I buy it in
                    multiple colors.</li>
                <li class="mb-2">I also have a fixed number of clothes, so if I want to add something new, I have to get
                    rid of something I already own. It keeps me from mindless spending and helps me shop more
                    intentionally.</li>
                <li class="mb-2">I originally wanted to be a Congressman and spent a lot of time studying economics and
                    public policy, formerly believing government was where the biggest impacts happen.</li>
                <li class="mb-2">My wife and I have over 200 houseplants—including more than 20 just in my office.</li>
                <li class="mb-2">I used to be chronically late and have worked hard to change that. Being on time now
                    feels like a real accomplishment.</li>
                <li class="mb-2">I love books that challenge me to think and grow—but also the ones that fill me with
                    rage and remind me how terrible the world can be.</li>
                <li class="mb-2">The only time I read fiction is when I'm reading to my kids. Even though they're older
                    now, I still do it every night, hoping they'll develop a love of literature. It's a part of our day
                    that we all love.</li>
            </ol>
        </div>
    </div>
</template>

<script setup>
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