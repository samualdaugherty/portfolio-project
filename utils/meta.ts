interface BlogMetaProps {
  title: string
  description: string
  image: string
  url: string
}

export function generateBlogMeta({ title, description, image, url }: BlogMetaProps) {
  const baseUrl = 'https://sambuilt.it'
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`
  
  return {
    title,
    meta: [
      // Basic meta tags
      { name: 'description', content: description },
      
      // Open Graph / Facebook
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: fullUrl },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: fullImageUrl },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:site_name', content: 'Sam Daugherty Portfolio' },
      { property: 'og:locale', content: 'en_US' },
      
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: fullUrl },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: fullImageUrl },
      { name: 'twitter:image:alt', content: title },
      
      // Additional SEO
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Sam Daugherty' },
    ],
    link: [
      { rel: 'canonical', href: fullUrl }
    ]
  }
} 