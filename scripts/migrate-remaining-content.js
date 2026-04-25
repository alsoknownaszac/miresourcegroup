const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const caseStudiesData = {
  _type: 'caseStudies',
  _id: 'caseStudies',
  studies: [
    {
      _key: 'cs1',
      client: 'Major Oil & Gas Operator',
      industry: 'Upstream Operations',
      project: 'Offshore Platform Equipment Supply & Logistics',
      challenge: 'Required rapid mobilization of specialized equipment and materials to offshore platform with strict safety and quality requirements.',
      solution: 'Deployed our comprehensive supply chain management system with 24/7 logistics support, quality inspection protocols, and emergency response capability.',
      results: [
        { _key: 'r1', metric: '100%', label: 'On-time Delivery' },
        { _key: 'r2', metric: 'Zero', label: 'Safety Incidents' },
        { _key: 'r3', metric: '30%', label: 'Cost Reduction' },
      ],
      services: ['Procurement', 'Supply Chain', 'Logistics'],
      duration: '12 months',
      iconName: 'Building2',
      color: 'bg-blue-500',
      order: 1,
    },
    {
      _key: 'cs2',
      client: 'International Energy Company',
      industry: 'Midstream Infrastructure',
      project: 'Pipeline Construction & Maintenance Support',
      challenge: 'Complex pipeline project requiring heavy construction equipment, welding services, and continuous material supply across multiple locations.',
      solution: 'Provided turnkey solution including CAT wheel loaders, excavators, welding teams, and coordinated material distribution using our 7 Rs logistics framework.',
      results: [
        { _key: 'r1', metric: '45 Days', label: 'Ahead of Schedule' },
        { _key: 'r2', metric: '100%', label: 'Quality Compliance' },
        { _key: 'r3', metric: '500+', label: 'Tons Moved' },
      ],
      services: ['Engineering', 'Equipment Rental', 'Logistics'],
      duration: '18 months',
      iconName: 'Building2',
      color: 'bg-green-500',
      order: 2,
    },
    {
      _key: 'cs3',
      client: 'Nigerian Oil Corporation',
      industry: 'Downstream Operations',
      project: 'Facility Maintenance & Equipment Management',
      challenge: 'Needed reliable partner for ongoing facility maintenance, equipment supply, and emergency response support for critical operations.',
      solution: 'Established dedicated support team with pre-positioned equipment, preventive maintenance schedules, and 24/7 emergency response capability.',
      results: [
        { _key: 'r1', metric: '99.8%', label: 'Uptime Achieved' },
        { _key: 'r2', metric: '24/7', label: 'Support Available' },
        { _key: 'r3', metric: '15%', label: 'Efficiency Gain' },
      ],
      services: ['Maintenance', 'Equipment Supply', 'Support Services'],
      duration: '24 months',
      iconName: 'Building2',
      color: 'bg-purple-500',
      order: 3,
    },
  ],
}

const marqueeData = {
  _type: 'marquee',
  _id: 'marquee',
  items: [
    { _key: 'm1', text: 'No.1 Support Services Provider', order: 1 },
    { _key: 'm2', text: 'Oil & Gas Excellence', order: 2 },
    { _key: 'm3', text: 'Engineering & Procurement', order: 3 },
    { _key: 'm4', text: 'Supply Chain Management', order: 4 },
    { _key: 'm5', text: 'Trusted Partner', order: 5 },
  ],
}

const contactMethodsData = {
  _type: 'contactMethods',
  _id: 'contactMethods',
  methods: [
    {
      _key: 'cm1',
      iconName: 'Phone',
      title: 'Phone',
      details: ['+234 (0) 803 XXX XXXX', '+234 (0) 805 XXX XXXX'],
      description: 'Mon-Fri from 8am to 6pm',
      order: 1,
    },
    {
      _key: 'cm2',
      iconName: 'Mail',
      title: 'Email',
      details: ['info@miresourcegroup.com', 'support@miresourcegroup.com'],
      description: "We'll respond within 24 hours",
      order: 2,
    },
    {
      _key: 'cm3',
      iconName: 'MapPin',
      title: 'Office',
      details: ['Lagos Office', 'Port Harcourt Office'],
      description: 'Visit us during business hours',
      order: 3,
    },
    {
      _key: 'cm4',
      iconName: 'Clock',
      title: 'Business Hours',
      details: ['Mon-Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
      description: 'Closed on Sundays and public holidays',
      order: 4,
    },
  ],
}

async function upsertDoc(doc) {
  const { _id, ...rest } = doc
  try {
    await client.createOrReplace({ _id, ...rest })
    console.log(`✓ Upserted: ${_id}`)
  } catch (err) {
    console.error(`✗ Failed: ${_id}`, err.message)
  }
}

async function main() {
  console.log('Migrating remaining hardcoded content...\n')

  const docs = [caseStudiesData, marqueeData, contactMethodsData]

  for (const doc of docs) {
    await upsertDoc(doc)
  }

  console.log('\nMigration complete.')
}

main().catch(console.error)
