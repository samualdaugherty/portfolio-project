// Blog posts data - newest posts at the top
// When adding a new post, add it to the TOP of this array
export const blogPosts = [
  {
    id: 'kids-time-to-build',
    title: 'Kids, It\'s Time to Build the Thing',
    excerpt: 'I know. I know! All the posts about vibe coding are getting old and annoying, but I felt compelled to write one, because it\'s something that all Designers should attempt. Like, really try to take that idea you\'ve had brewing for years and try to build it. Because I did that, and it was shockingly easy.',
    date: 'June 20th, 2025',
    image: '/eat-sleep-code.png',
    route: '/writing/kids-time-to-build'
  },
  {
    id: 'what-i-learned-posting-every-day',
    title: 'What I Learned Posting Every Day for 90 Days',
    excerpt: 'I did it. I did what every guru on the internet says to do. I posted every day. I did it for 90 days straight, and made sure to engage with anyone who liked or commented on my posts. So what did I learn?',
    date: 'June 15th, 2025',
    image: '/good-enough-header.png',
    route: '/writing/what-i-learned-posting-every-day'
  },
  {
    id: 'worst-time-to-prepare',
    title: 'The Worst Time to Prepare for a Layoff Is After It Happens',
    excerpt: 'Layoffs don\'t seem to come with a warning, at least not in the U.S. Mine certainly didn\'t and I was left confused and bewildered after the call ended. Everything I\'m about to share with you, I learned the hard way.',
    date: 'June 6th, 2025',
    image: '/layoffs-happen-header.png',
    route: '/writing/worst-time-to-prepare'
  },
  {
    id: 'print-journalism-layouts',
    title: 'Print Journalism Layouts Should Make a Comeback',
    excerpt: 'There\'s something wonderful about having a fixed-size for your canvas and being able to play around with layouts that doesn\'t translate well to responsive design. But I think we just aren\'t being creative enough.',
    date: 'May 18th, 2025',
    image: '/print-layout-header-bw.png',
    route: '/writing/print-journalism-layouts'
  },
  {
    id: 'how-one-app-changed-my-work',
    title: 'How One App Changed the Way I Work (and Think)',
    excerpt: 'Imagine this: you\'ve been at your job for 8 years and you\'re ready for a change. You dust off your old resume to update it, look at your portfolio website if you have one, and realize all of it is shit. What do you do?',
    date: 'May 7th, 2025',
    image: '/day-one-header.png',
    route: '/writing/how-one-app-changed-my-work'
  },
  {
    id: 'blog-post-7',
    title: '[Blog Title 7]',
    excerpt: '[Blog excerpt text for the seventh post. This will also appear in the second 3-column section.]',
    date: 'May 9th, 2025',
    image: '/good-enough-header.png',
    route: '/writing/blog-post-7'
  },
  {
    id: 'blog-post-8',
    title: '[Blog Title 8]',
    excerpt: '[Blog excerpt text for the eighth post. This completes the second 3-column section.]',
    date: 'May 2nd, 2025',
    image: '/good-enough-header.png',
    route: '/writing/blog-post-8'
  },
  {
    id: 'blog-post-9',
    title: '[Blog Title 9]',
    excerpt: '[Blog excerpt text for the ninth and oldest blog post in the current rotation.]',
    date: 'April 25th, 2025',
    image: '/good-enough-header.png',
    route: '/writing/blog-post-9'
  }
]

// Evergreen blog post - always appears at the bottom
export const evergreenPost = {
  id: 'why-i-still-write',
  title: 'Why I Still Write, Even When No One\'s Listening',
  excerpt: 'Some people write because they need to get their thoughts out. See them more clearly from that 30,000-foot view. I would write for the sole purpose of hoping to one day monetize it. I was "grinding," because social media told me I needed that "hustle culture." There was a common platitude to "never do anything for free." And, well, it almost killed me.',
  date: 'March 23rd, 2025',
  image: '/writing-alone.png',
  route: '/writing/why-i-still-write'
}

// Helper function to get posts by position
export const getLatestPost = () => blogPosts[0]
export const getPreviousPost = () => blogPosts[1]
export const getFirstColumnPosts = () => blogPosts.slice(2, 5) // Posts 3, 4, 5
export const getSecondColumnPosts = () => blogPosts.slice(5, 8) // Posts 6, 7, 8
export const getRemainingPosts = () => blogPosts.slice(2, 8).filter(post => !post.id.startsWith('blog-post-')) // Posts 3-8 for unified grid, excluding placeholder posts
export const getOldestPost = () => blogPosts[8] // Post 9 (if you need it separately)
export const getEvergreenPost = () => evergreenPost 