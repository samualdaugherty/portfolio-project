// Vercel Edge Middleware for static sites
// @ts-ignore - Vercel provides these types at runtime

// Blog posts data (copied from your blogPosts.js)
const blogPosts = [
  {
    id: 'kids-time-to-build',
    title: 'Kids, It\'s Time to Build the Thing',
    excerpt: 'I know. I know! All the posts about vibe coding are getting old and annoying, but I felt compelled to write one, because it\'s something that all Designers should attempt. Like, really try to take that idea you\'ve had brewing for years and try to build it. Because I did that, and it was shockingly easy.',
    image: '/eat-sleep-code.png',
    route: '/writing/kids-time-to-build'
  },
  {
    id: 'what-i-learned-posting-every-day',
    title: 'What I Learned Posting Every Day for 90 Days',
    excerpt: 'I did it. I did what every guru on the internet says to do. I posted every day. I did it for 90 days straight, and made sure to engage with anyone who liked or commented on my posts. So what did I learn?',
    image: '/good-enough-header.png',
    route: '/writing/what-i-learned-posting-every-day'
  },
  {
    id: 'worst-time-to-prepare',
    title: 'The Worst Time to Prepare for a Layoff Is After It Happens',
    excerpt: 'Layoffs don\'t seem to come with a warning, at least not in the U.S. Mine certainly didn\'t and I was left confused and bewildered after the call ended. Everything I\'m about to share with you, I learned the hard way.',
    image: '/layoffs-happen-header.png',
    route: '/writing/worst-time-to-prepare'
  },
  {
    id: 'print-journalism-layouts',
    title: 'Print Journalism Layouts Should Make a Comeback',
    excerpt: 'There\'s something wonderful about having a fixed-size for your canvas and being able to play around with layouts that doesn\'t translate well to responsive design. But I think we just aren\'t being creative enough.',
    image: '/print-layout-header-bw.png',
    route: '/writing/print-journalism-layouts'
  },
  {
    id: 'how-one-app-changed-my-work',
    title: 'How One App Changed the Way I Work (and Think)',
    excerpt: 'Imagine this: you\'ve been at your job for 8 years and you\'re ready for a change. You dust off your old resume to update it, look at your portfolio website if you have one, and realize all of it is shit. What do you do?',
    image: '/day-one-header.png',
    route: '/writing/how-one-app-changed-my-work'
  }
]

const evergreenPost = {
  id: 'why-i-still-write',
  title: 'Why I Still Write, Even When No One\'s Listening',
  excerpt: 'Some people write because they need to get their thoughts out. See them more clearly from that 30,000-foot view. I would write for the sole purpose of hoping to one day monetize it. I was "grinding," because social media told me I needed that "hustle culture." There was a common platitude to "never do anything for free." And, well, it almost killed me.',
  image: '/writing-alone.png',
  route: '/writing/why-i-still-write'
}

// All posts including evergreen
const allPosts = [...blogPosts, evergreenPost]

// Detect social media crawlers
function isSocialCrawler(userAgent: string): boolean {
  const crawlers = [
    'facebookexternalhit',
    'Facebookbot',
    'Twitterbot',
    'LinkedInBot',
    'WhatsApp',
    'TelegramBot',
    'SkypeUriPreview',
    'SlackBot',
    'DiscordBot',
    'applebot',
    'GoogleBot'
  ]
  
  return crawlers.some(crawler => 
    userAgent.toLowerCase().includes(crawler.toLowerCase())
  )
}

// Generate HTML with correct meta tags
function generateHTMLWithMeta(post: typeof allPosts[0]): string {
  const baseUrl = 'https://sambuilt.it'
  const fullImageUrl = `${baseUrl}${post.image}`
  const fullUrl = `${baseUrl}${post.route}`
  
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${post.title} | Sam Daugherty</title>
    <meta name="description" content="${post.excerpt}">
    <meta name="keywords" content="Product Designer, UX Designer, User Experience, UI Design, FinTech, Insurance, e-Commerce, Peoria Illinois, UX Leader, Design Consultant">
    <meta name="author" content="Sam Daugherty">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${fullUrl}">
    
    <!-- Favicons -->
    <link href="/favicon-light.png" rel="icon" media="(prefers-color-scheme: light)">
    <link href="/favicon-dark.png" rel="icon" media="(prefers-color-scheme: dark)">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="${fullUrl}">
    <meta property="og:title" content="${post.title} | Sam Daugherty">
    <meta property="og:description" content="${post.excerpt}">
    <meta property="og:image" content="${fullImageUrl}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:site_name" content="Sam Daugherty Portfolio">
    <meta property="og:locale" content="en_US">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${fullUrl}">
    <meta name="twitter:title" content="${post.title} | Sam Daugherty">
    <meta name="twitter:description" content="${post.excerpt}">
    <meta name="twitter:image" content="${fullImageUrl}">
    <meta name="twitter:image:alt" content="${post.title}">
    
    <!-- LinkedIn -->
    <meta property="profile:first_name" content="Sam">
    <meta property="profile:last_name" content="Daugherty">
    <meta property="profile:username" content="samualdaugherty">
    
    <!-- Additional SEO -->
    <meta name="robots" content="index, follow">
    <meta name="googlebot" content="index, follow">
    <meta name="theme-color" content="#F32929">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alumni+Sans:ital,wght@0,100..900;1,100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>`
}

export function middleware(request: Request) {
  const userAgent = request.headers.get('user-agent') || ''
  const url = new URL(request.url)
  const pathname = url.pathname
  
  // Only process blog post URLs for social crawlers
  if (pathname.startsWith('/writing/') && isSocialCrawler(userAgent)) {
    // Find the matching blog post
    const post = allPosts.find(p => p.route === pathname)
    
    if (post) {
      // Return HTML with correct meta tags for this specific post
      return new Response(generateHTMLWithMeta(post), {
        status: 200,
        headers: {
          'content-type': 'text/html',
        },
      })
    }
  }
  
  // For all other requests (regular users, non-blog pages), continue normally
  // Return undefined to continue to the next middleware or the page
  return undefined
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
} 