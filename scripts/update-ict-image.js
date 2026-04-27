#!/usr/bin/env node
require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@sanity/client')
const fs = require('fs')
const path = require('path')

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01',
})

async function run() {
  const docId = await client.fetch(
    `*[_type == "serviceDetailed" && title == "Information and Communication Technology Services"][0]._id`
  )
  if (!docId) { console.error('ICT service not found'); process.exit(1) }

  const imageBuffer = fs.readFileSync(path.join(__dirname, '../public/ict-data-center.jpg'))
  const asset = await client.assets.upload('image', imageBuffer, {
    filename: 'ict-data-center.jpg',
    contentType: 'image/jpeg',
  })

  await client.patch(docId).set({
    image: {
      _type: 'image',
      asset: { _type: 'reference', _ref: asset._id },
      alt: 'ICT professionals working at computers in a modern office',
    }
  }).commit()

  console.log('✅ ICT hero image updated')
}

run().catch(err => { console.error('❌', err.message); process.exit(1) })
