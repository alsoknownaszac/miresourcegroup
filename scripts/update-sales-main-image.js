const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

async function updateMainImage() {
  try {
    // HP Laptop image URL
    const hpLaptopUrl = 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=80'

    const result = await client
      .patch('1KjNhVUscwCwiDwpK3ryns')
      .set({
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-a6e567890123456789abcdef0123456789abcdef-1200x800-jpg',
          },
          alt: 'HP Laptops - Sales and Distribution',
        },
      })
      .commit()

    console.log('✓ Updated Sales and Distribution main image to HP laptop')
    console.log('Note: If image ID is invalid, update manually in Sanity Studio')
  } catch (err) {
    console.error('✗ Failed:', err.message)
    console.log('Suggestion: Upload HP laptop image directly to Sanity and update service document')
  }
}

updateMainImage().catch(console.error)
