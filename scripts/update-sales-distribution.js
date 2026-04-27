#!/usr/bin/env node

// Delete ICT service + update Sales and Distribution in Sanity
require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@sanity/client')
const https = require('https')
const http = require('http')

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01',
})

const ICT_ID = 'ReSrd7SqmdV3lmrZOpOtjw'
const SALES_ID = '1KjNhVUscwCwiDwpK3rzNg'

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http
    protocol.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location).then(resolve).catch(reject)
      }
      const chunks = []
      res.on('data', (chunk) => chunks.push(chunk))
      res.on('end', () => resolve(Buffer.concat(chunks)))
      res.on('error', reject)
    }).on('error', reject)
  })
}

async function run() {
  // 1. Delete ICT service
  console.log('🗑️  Deleting ICT service...')
  await client.delete(ICT_ID)
  console.log('✅ ICT service deleted')

  // 2. Download and upload new sales/distribution image
  console.log('📸 Downloading new Sales & Distribution image...')
  const imageUrl = 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80'
  const imageBuffer = await downloadImage(imageUrl)
  const asset = await client.assets.upload('image', imageBuffer, {
    filename: 'sales-distribution-logistics.jpg',
    contentType: 'image/jpeg',
  })
  console.log('✅ Image uploaded, asset ID:', asset._id)

  const newImage = {
    _type: 'image',
    asset: { _type: 'reference', _ref: asset._id },
    alt: 'Tech products and laptops packed in boxes ready for delivery — M.I Resources Sales and Distribution',
  }

  // 3. Update Sales and Distribution
  console.log('✏️  Updating Sales and Distribution...')
  const updatedFeatures = [
    'Product Saturation',
    'Sales Strategy Development - Market Analysis & Customer Targeting',
    'Distribution Network Management - Nationwide Coverage & Optimization',
    'Market Development - New Territory Expansion & Market Penetration',
    'Customer Relations - Account Management & Support Services',
    'Order Fulfillment - Efficient Processing & Delivery Coordination',
    'Channel Management - Multi-Channel Distribution Strategy',
    '**Our Products**',
    'IT equipment, software (e.g. printers, laptops)',
    'Communication Equipment and Gadgets',
    'Office and home wears equipment',
    'Electrical and Electronics',
    'Carbon reduction technology and lot more',
  ]

  await client
    .patch(SALES_ID)
    .set({
      features: updatedFeatures,
      image: newImage,
    })
    .commit()

  console.log('✅ Sales and Distribution updated')
  console.log('Done!')
}

run().catch((err) => {
  console.error('❌ Script failed:', err.message)
  process.exit(1)
})
