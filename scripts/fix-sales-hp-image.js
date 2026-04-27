const { createClient } = require('@sanity/client')
const https = require('https')

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const chunks = []
      res.on('data', (chunk) => chunks.push(chunk))
      res.on('end', () => resolve(Buffer.concat(chunks)))
      res.on('error', reject)
    }).on('error', reject)
  })
}

async function uploadAndUpdateImage() {
  try {
    // HP laptop image - professional with laptop at desk
    const hpImageUrl = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80'

    console.log('Downloading HP laptop image...')
    const imageBuffer = await downloadImage(hpImageUrl)

    console.log('Uploading to Sanity...')
    const asset = await client.assets.upload('image', imageBuffer, {
      filename: 'hp-laptop-sales-v2.jpg',
      description: 'HP Laptop for Sales and Distribution',
    })

    console.log(`✓ Asset uploaded: ${asset._id}`)

    console.log('Updating Sales and Distribution service...')
    await client
      .patch('1KjNhVUscwCwiDwpK3ryns')
      .set({
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: asset._id,
          },
          alt: 'HP Laptops - Sales and Distribution Solutions',
        },
      })
      .commit()

    console.log('✓ Successfully updated with HP laptop image')
    console.log(`New Asset ID: ${asset._id}`)
  } catch (err) {
    console.error('✗ Failed:', err.message)
    process.exit(1)
  }
}

uploadAndUpdateImage()
