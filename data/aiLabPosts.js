// AI Lab posts data - focused on AI experiments and learnings
// Pinned posts are featured articles that remain at the top

export const pinnedAiLabPosts = [
  {
    id: 'my-exact-ai-workflow',
    title: 'My exact AI workflow',
    excerpt: 'I am often asked to detail my design process and explain where AI fits into it. Which means, I\'ve had this conversation a lot and thought it would be worth documenting here.',
    date: 'Updated regularly',
    image: '/ai-workflow.png',
    route: '/ai-lab/my-exact-ai-workflow'
  },
  {
    id: 'the-difference-a-year-makes',
    title: 'The Difference a Year Makes',
    excerpt: 'At the beginning of 2025, I was begging my engineer friends to help me with side quests and answer questions about code or the limitations of an idea I had. It was frustrating. Now, I\'m just shipping things myself and learning a lot along the way.',
    date: 'Updated regularly',
    image: '/difference-a-year-makes.png',
    route: '/ai-lab/the-difference-a-year-makes'
  }
]

// Recent AI Lab posts
export const recentAiLabPosts = [
  {
    id: 'the-perfect-handoff',
    title: 'The perfect handoff',
    excerpt: 'While working on a new feature, I designed a net-new component for our site. Could I use Cursor to build it myself, ready to integrate directly into our corporate codebase? There was only one way to find out: bother my engineer with a lot of questions.',
    date: 'January 15th, 2026',
    image: '/perfect-handoff.png',
    route: '/ai-lab/the-perfect-handoff',
    experiment: true
  },
  {
    id: 'sorry-figma-im-coding-prototypes',
    title: 'Sorry, Figma! I\'m coding prototypes.',
    excerpt: 'I used to pride myself on my Figma prototypes. Dragging arrows around and creating a mass of digital spiderwebs, screens, and interactions. I felt like a magician! But, damned if that didn\'t take a lot of time. Entire weeks were spent turning the design into something we could actually test with users. Now, I can do it in a couple of hours. And I never have to touch Figma to do it.',
    date: 'January 10th, 2026',
    image: '/eat-sleep-code.png',
    route: '/ai-lab/sorry-figma-im-coding-prototypes'
  }
]

// AI Lab grid posts (3-column rows)
export const gridAiLabPosts = [
  {
    id: 'idea-to-solution-in-30-minutes',
    title: 'Idea to Solution in 30 minutes',
    excerpt: 'In a meeting, someone mentioned we have no way of calculating credit usage in UserTesting, and we’re on our way to running out of credits before our contract is up. So I set out to build a dashboard, and it was almost too easy.',
    image: '/idea-to-solution.png',
    route: '/ai-lab/idea-to-solution-in-30-minutes',
    experiment: true
  },
  {
    id: 'the-case-for-ai-in-a-figma-world',
    title: 'The case for AI in a Figma World',
    excerpt: 'I have a coworker who continues to amaze me every week. We show up to design review, and they show a masterpiece in product thought and organization. They are a Figma expert. I dream of this level of organization.',
    image: '/ai-figma-world.png',
    route: '/ai-lab/the-case-for-ai-in-a-figma-world'
  },
  {
    id: 'building-an-agentic-workflow',
    title: 'Building an agentic workflow',
    excerpt: 'I’m not an engineer, so building a fully-automated workflow felt like a real challenge. Turns out, it was simpler than I thought when I combined two AI models to help me plan and build it, but it didn’t do everything well.',
    image: '/building-agentic-workflow.png',
    route: '/ai-lab/building-an-agentic-workflow',
    experiment: true
  },
  {
    id: 'can-we-recreate-print-layouts',
    title: 'Can we recreate print layouts?',
    excerpt: 'I started out as a print designer way back in college. And I loved the ability to create dynamic and interesting layouts on the page. The web feels a bit boring by comparison. So can we create those fun layouts for the responsive web?',
    image: '/print-layouts-post.png',
    route: '/ai-lab/can-we-recreate-print-layouts',
    experiment: true
  },
  {
    id: 'converting-legacy-code-to-react',
    title: 'Converting legacy code to React',
    excerpt: 'A friend called me and said his website stopped working and he didn’t know what to do. The easy answer was it was eight years old and built using now-deprecated PHP. So I offered to rebuild it for him. Here’s how it went.',
    image: '/legacy-to-react.png',
    route: '/ai-lab/converting-legacy-code-to-react',
    experiment: true
  }
]

// All AI Lab posts in chronological order
export const allAiLabPosts = [
  // Additional posts will go here
]

// Helper functions
export const getPinnedAiLabPosts = () => pinnedAiLabPosts
export const getRecentAiLabPosts = () => recentAiLabPosts.slice(0, 2) // Get 2 most recent
export const getGridAiLabPosts = () => gridAiLabPosts
export const getAllAiLabPosts = () => allAiLabPosts
