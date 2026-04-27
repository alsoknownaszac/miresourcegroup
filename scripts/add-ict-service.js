#!/usr/bin/env node

// Add ICT Services as a new serviceDetailed document in Sanity
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

async function uploadImage(filePath, altText) {
  const imageBuffer = fs.readFileSync(filePath)
  const filename = path.basename(filePath)
  const asset = await client.assets.upload('image', imageBuffer, {
    filename,
    contentType: 'image/jpeg',
  })
  return {
    _type: 'image',
    asset: { _type: 'reference', _ref: asset._id },
    alt: altText,
  }
}

async function run() {
  console.log('🚀 Adding ICT Services to Sanity...')

  // Check if ICT service already exists
  const existing = await client.fetch(
    `*[_type == "serviceDetailed" && title == "Information and Communication Technology Services"][0]._id`
  )
  if (existing) {
    console.log('⚠️  ICT service already exists (ID:', existing, '). Skipping.')
    process.exit(0)
  }

  // Upload hero image
  console.log('📸 Uploading ICT hero image...')
  const heroImagePath = path.join(__dirname, '../public/ict-data-center.jpg')
  const heroImage = await uploadImage(heroImagePath, 'ICT data center server room')

  const ictService = {
    _type: 'serviceDetailed',
    title: 'Information and Communication Technology Services',
    tagline: 'Innovative ICT solutions powered by industry experts',
    description: `M.I Resources offers a wide range of innovative ICT solutions with industry experts. We have proven track records in design, implementation and managing IT infrastructure across various industry domains.

We map your ideas with our technology expertise and our industry experts create the best working prototypes. Our ICT team looks at your business from a 360-degree angle and provides the best solution in deploying, implementing and supporting your technology needs.

Simply put, our ICT services help you build and manage high-value, reliable IT infrastructure that meets the dynamic needs of your business across multiple scenarios.`,
    features: [
      'Networking and Cabling — Structured cabling, LAN/WAN design and deployment',
      'End User Computing Services — Workstation setup, support and lifecycle management',
      'Application Management Services — Monitoring, maintenance and optimization of business applications',
      'Enterprise Management Services — Centralized IT governance and enterprise-grade solutions',
      'Remote Infrastructure Management — 24/7 remote monitoring and management of IT assets',
      'Desktop Management Services — Patch management, software deployment and helpdesk support',
      'Server, Storage and Backup — On-premise and cloud server provisioning, storage and backup solutions',
      'IT Security — Firewall, endpoint protection, vulnerability assessment and threat management',
      'Identity and Access Control — User authentication, role-based access and directory services',
      'IT Infrastructure Management Solutions — End-to-end infrastructure design and operations',
      'Application Maintenance Services — Bug fixes, performance tuning and feature enhancements',
      'Application Testing and Resource Outsourcing — QA testing and skilled IT resource augmentation',
    ],
    image: heroImage,
    iconName: 'Monitor',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-600',
    products: [
      'Desktops',
      'Laptops',
      'Servers',
      'Storages',
      'Printers',
      'Spares',
      'Networking Products',
      'Surveillance',
      'Security & Software Solutions',
    ],
    brands: [
      'HP',
      'DELL',
      'APPLE',
      'LENOVO',
      'ACER',
      'IBM',
      'CISCO',
      'FORTINET',
      'SONICWALL',
      'DLINK',
      'HIKVISION',
      'PELCO',
    ],
    closingStatement:
      'Choose M.I Resource Services Limited as your trusted partner in IT resilience, transformation, and sustainable success.',
    subcategories: [
      { name: 'Networking and Cabling', href: '/services', order: 1 },
      { name: 'End User Computing Services', href: '/services', order: 2 },
      { name: 'Application Management Services', href: '/services', order: 3 },
      { name: 'Enterprise Management Services', href: '/services', order: 4 },
      { name: 'Remote Infrastructure Management', href: '/services', order: 5 },
      { name: 'Desktop Management Services', href: '/services', order: 6 },
      { name: 'Server, Storage and Backup', href: '/services', order: 7 },
      { name: 'IT Security', href: '/services', order: 8 },
      { name: 'Identity and Access Control', href: '/services', order: 9 },
      { name: 'IT Infrastructure Management Solutions', href: '/services', order: 10 },
      { name: 'Application Maintenance Services', href: '/services', order: 11 },
      { name: 'Application Testing and Resource Outsourcing', href: '/services', order: 12 },
    ],
    order: 8,
    published: true,
  }

  const result = await client.create(ictService)
  console.log('✅ ICT service created with ID:', result._id)
  console.log('   Title:', result.title)
  console.log('   Order:', result.order)
}

run().catch((err) => {
  console.error('❌ Migration failed:', err.message)
  process.exit(1)
})
