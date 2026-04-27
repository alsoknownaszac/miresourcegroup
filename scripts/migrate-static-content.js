const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const coreValuesData = {
  _type: 'coreValues',
  _id: 'coreValues',
  values: [
    { _key: 'cv1', iconName: 'Shield', title: 'Integrity', description: 'We uphold the highest standards of honesty and transparency in all our business dealings and relationships.', bgColor: 'bg-blue-500/10', order: 1 },
    { _key: 'cv2', iconName: 'Award', title: 'Excellence', description: 'We are committed to delivering superior quality in everything we do, exceeding client expectations consistently.', bgColor: 'bg-yellow-500/10', order: 2 },
    { _key: 'cv3', iconName: 'Users', title: 'Teamwork', description: 'We foster a collaborative environment where diverse talents unite to achieve extraordinary results together.', bgColor: 'bg-green-500/10', order: 3 },
    { _key: 'cv4', iconName: 'Lightbulb', title: 'Innovation', description: 'We embrace cutting-edge technologies and creative solutions to address complex industry challenges.', bgColor: 'bg-purple-500/10', order: 4 },
    { _key: 'cv5', iconName: 'Heart', title: 'Safety First', description: 'The safety and wellbeing of our people, clients, and communities is our absolute top priority.', bgColor: 'bg-red-500/10', order: 5 },
    { _key: 'cv6', iconName: 'Globe', title: 'Sustainability', description: 'We are committed to environmentally responsible practices that protect Nigeria\'s natural resources.', bgColor: 'bg-teal-500/10', order: 6 },
  ],
}

const companyStatsData = {
  _type: 'companyStats',
  _id: 'companyStats',
  stats: [
    { _key: 'cs1', iconName: 'Calendar', value: '15+', label: 'Years of Excellence', description: 'Serving Nigeria\'s Oil & Gas industry since 2009', order: 1 },
    { _key: 'cs2', iconName: 'Users', value: '500+', label: 'Expert Professionals', description: 'Highly skilled engineers, technicians, and specialists', order: 2 },
    { _key: 'cs3', iconName: 'Briefcase', value: '200+', label: 'Projects Completed', description: 'Successfully delivered across diverse sectors', order: 3 },
    { _key: 'cs4', iconName: 'Award', value: '50+', label: 'Major Clients', description: 'Trusted by leading Oil & Gas companies in Nigeria', order: 4 },
    { _key: 'cs5', iconName: 'MapPin', value: '5+', label: 'Operational Bases', description: 'Strategic locations across Nigeria\'s key regions', order: 5 },
    { _key: 'cs6', iconName: 'TrendingUp', value: '98%', label: 'Client Satisfaction', description: 'Consistently delivering beyond expectations', order: 6 },
  ],
}

const keyCapabilitiesData = {
  _type: 'keyCapabilities',
  _id: 'keyCapabilities',
  capabilities: [
    { _key: 'kc1', iconName: 'Cog', title: 'Engineering Services', description: 'Comprehensive engineering solutions from design to implementation for Oil & Gas infrastructure.', textColor: 'text-blue-500', order: 1 },
    { _key: 'kc2', iconName: 'Package', title: 'Procurement & Supply', description: 'Strategic sourcing and procurement of critical equipment and materials from global suppliers.', textColor: 'text-green-500', order: 2 },
    { _key: 'kc3', iconName: 'Truck', title: 'Logistics & Transport', description: 'End-to-end logistics management including transportation, warehousing, and distribution.', textColor: 'text-orange-500', order: 3 },
    { _key: 'kc4', iconName: 'HardHat', title: 'Construction & Maintenance', description: 'Expert construction, installation, and maintenance services for Oil & Gas facilities.', textColor: 'text-red-500', order: 4 },
    { _key: 'kc5', iconName: 'Users', title: 'Human Capacity Development', description: 'Training and development programs to build local expertise in the Oil & Gas sector.', textColor: 'text-purple-500', order: 5 },
    { _key: 'kc6', iconName: 'Shield', title: 'HSE Management', description: 'Comprehensive Health, Safety & Environment management systems and compliance services.', textColor: 'text-teal-500', order: 6 },
  ],
}

const majorAchievementsData = {
  _type: 'majorAchievements',
  _id: 'majorAchievements',
  achievements: [
    { _key: 'ma1', iconName: 'Award', title: 'ISO Certification', description: 'Achieved ISO 9001:2015 quality management system certification, demonstrating our commitment to international quality standards.', metric: 'ISO 9001:2015', bgColor: 'bg-yellow-500', order: 1 },
    { _key: 'ma2', iconName: 'Briefcase', title: 'Major Contract Awards', description: 'Secured and successfully executed major contracts with leading IOCs and NOCs operating in Nigeria\'s oil & gas sector.', metric: '50+ Contracts', bgColor: 'bg-blue-500', order: 2 },
    { _key: 'ma3', iconName: 'Users', title: 'Local Content Champion', description: 'Recognized for outstanding contributions to Nigerian local content development and capacity building in the oil & gas industry.', metric: '70% Local Content', bgColor: 'bg-green-500', order: 3 },
    { _key: 'ma4', iconName: 'TrendingUp', title: 'Revenue Growth', description: 'Achieved consistent year-on-year revenue growth, reflecting our expanding portfolio of services and client base.', metric: '200% Growth', bgColor: 'bg-purple-500', order: 4 },
  ],
}

const equipmentFacilitiesData = {
  _type: 'equipmentFacilities',
  _id: 'equipmentFacilities',
  categories: [
    {
      _key: 'ef1',
      category: 'Heavy Equipment',
      iconName: 'Truck',
      textColor: 'text-blue-500',
      order: 1,
      items: [
        { _key: 'ef1i1', name: 'Cranes (Mobile & Crawler)', quantity: '12 Units', status: 'Operational' },
        { _key: 'ef1i2', name: 'Excavators', quantity: '8 Units', status: 'Operational' },
        { _key: 'ef1i3', name: 'Bulldozers', quantity: '6 Units', status: 'Operational' },
        { _key: 'ef1i4', name: 'Forklifts', quantity: '15 Units', status: 'Operational' },
      ],
    },
    {
      _key: 'ef2',
      category: 'Marine Vessels',
      iconName: 'Anchor',
      textColor: 'text-teal-500',
      order: 2,
      items: [
        { _key: 'ef2i1', name: 'Work Boats', quantity: '4 Units', status: 'Operational' },
        { _key: 'ef2i2', name: 'Speed Boats', quantity: '6 Units', status: 'Operational' },
        { _key: 'ef2i3', name: 'Barges', quantity: '2 Units', status: 'Operational' },
      ],
    },
    {
      _key: 'ef3',
      category: 'Workshop Facilities',
      iconName: 'Wrench',
      textColor: 'text-orange-500',
      order: 3,
      items: [
        { _key: 'ef3i1', name: 'Fabrication Workshop', quantity: '2 Locations', status: 'Active' },
        { _key: 'ef3i2', name: 'Welding Stations', quantity: '20 Bays', status: 'Active' },
        { _key: 'ef3i3', name: 'Machine Shop', quantity: '1 Location', status: 'Active' },
        { _key: 'ef3i4', name: 'Pipe Fitting Shop', quantity: '1 Location', status: 'Active' },
      ],
    },
    {
      _key: 'ef4',
      category: 'Safety Equipment',
      iconName: 'Shield',
      textColor: 'text-red-500',
      order: 4,
      items: [
        { _key: 'ef4i1', name: 'Fire Fighting Equipment', quantity: 'Full Suite', status: 'Ready' },
        { _key: 'ef4i2', name: 'Gas Detection Systems', quantity: '30 Units', status: 'Calibrated' },
        { _key: 'ef4i3', name: 'PPE Stock', quantity: '500+ Sets', status: 'Available' },
        { _key: 'ef4i4', name: 'First Aid Stations', quantity: '10 Points', status: 'Stocked' },
      ],
    },
  ],
}

const whyChooseUsData = {
  _type: 'whyChooseUs',
  _id: 'whyChooseUs',
  reasons: [
    { _key: 'wcu1', iconName: 'Award', title: 'Proven Track Record', description: 'Over 15 years of successfully delivering complex projects in Nigeria\'s challenging Oil & Gas environment.', order: 1 },
    { _key: 'wcu2', iconName: 'Users', title: 'Expert Team', description: 'Our team of seasoned professionals brings deep industry knowledge and technical expertise to every project.', order: 2 },
    { _key: 'wcu3', iconName: 'Globe', title: 'Local Knowledge', description: 'Deep understanding of Nigeria\'s regulatory environment, local content requirements, and operational landscape.', order: 3 },
    { _key: 'wcu4', iconName: 'Zap', title: 'Rapid Response', description: 'Our strategic locations and logistics capabilities enable us to respond quickly to urgent operational needs.', order: 4 },
    { _key: 'wcu5', iconName: 'Shield', title: 'Safety Excellence', description: 'Unwavering commitment to HSE standards with an exceptional safety record across all operations.', order: 5 },
    { _key: 'wcu6', iconName: 'TrendingUp', title: 'Continuous Growth', description: 'Continuously investing in our people, technology, and capabilities to deliver ever-improving service quality.', order: 6 },
  ],
}

const serviceApproachData = {
  _type: 'serviceApproach',
  _id: 'serviceApproach',
  steps: [
    { _key: 'sa1', iconName: 'MessageSquare', number: '01', title: 'Initial Consultation', description: 'We begin with a thorough consultation to understand your specific needs, challenges, and project objectives.', order: 1 },
    { _key: 'sa2', iconName: 'FileSearch', number: '02', title: 'Assessment & Planning', description: 'Our experts conduct detailed assessments and develop comprehensive project plans tailored to your requirements.', order: 2 },
    { _key: 'sa3', iconName: 'Cog', number: '03', title: 'Resource Mobilization', description: 'We rapidly mobilize the right team, equipment, and materials to execute your project efficiently.', order: 3 },
    { _key: 'sa4', iconName: 'CheckCircle', number: '04', title: 'Quality Execution', description: 'Our teams execute with precision, adhering to international standards and your specific quality requirements.', order: 4 },
    { _key: 'sa5', iconName: 'TrendingUp', number: '05', title: 'Progress Monitoring', description: 'We maintain transparent communication and regular reporting throughout the project lifecycle.', order: 5 },
    { _key: 'sa6', iconName: 'Headphones', number: '06', title: 'Post-Project Support', description: 'Our commitment extends beyond project completion with ongoing support and maintenance services.', order: 6 },
  ],
}

const officeLocationsData = {
  _type: 'officeLocations',
  _id: 'officeLocations',
  offices: [
    {
      _key: 'ol1',
      name: 'Lagos Office',
      type: 'Head Office',
      address: '15 Admiralty Way, Lekki Phase 1, Lagos, Nigeria',
      phone: '+234 807 117 3927',
      email: 'lagos@miresourcegroup.com',
      hours: 'Mon - Fri: 8:00 AM - 6:00 PM',
      contactPerson: {
        name: 'Mr. Michael Ibe',
        title: 'Managing Director',
        phone: '+234 807 117 3927',
        email: 'md@miresourcegroup.com',
      },
    },
    {
      _key: 'ol2',
      name: 'Port Harcourt Office',
      type: 'Regional Office',
      address: '42 Trans Amadi Industrial Layout, Port Harcourt, Rivers State, Nigeria',
      phone: '+234 807 117 3928',
      email: 'ph@miresourcegroup.com',
      hours: 'Mon - Fri: 8:00 AM - 6:00 PM',
      contactPerson: {
        name: 'Engr. Samuel Okafor',
        title: 'Regional Manager',
        phone: '+234 807 117 3928',
        email: 'ph.manager@miresourcegroup.com',
      },
    },
  ],
}

const ctaSectionData = {
  _type: 'ctaSection',
  _id: 'ctaSection',
  heading: 'Ready to Get Started?',
  description: "Let's discuss how we can support your next project with our comprehensive Oil & Gas services.",
  primaryButtonText: 'Contact Us Today',
  primaryButtonHref: '/contact',
  phone: '+2348071173927',
  email: 'info@miresourcegroup.com',
}

const faqData = {
  _type: 'faq',
  _id: 'faq',
  items: [
    { _key: 'faq1', question: 'What industries do you serve?', answer: 'We primarily serve the Oil & Gas industry in Nigeria, including upstream, midstream, and downstream operations. We also provide services to related industries such as petrochemicals, power generation, and maritime.', order: 1 },
    { _key: 'faq2', question: 'How quickly can you mobilize for an emergency?', answer: 'Our strategic locations across Nigeria\'s key operational areas enable us to mobilize emergency response teams within 2-4 hours for critical situations. We maintain on-call teams and pre-positioned equipment for rapid deployment.', order: 2 },
    { _key: 'faq3', question: 'Are you compliant with Nigerian Content requirements?', answer: 'Yes, we are fully compliant with the Nigerian Oil and Gas Industry Content Development Act (NOGICD Act). We actively promote local content through employment of Nigerian professionals, use of local suppliers, and investment in capacity building.', order: 3 },
    { _key: 'faq4', question: 'What certifications does your company hold?', answer: 'We hold ISO 9001:2015 (Quality Management), ISO 14001:2015 (Environmental Management), and ISO 45001:2018 (Occupational Health & Safety) certifications. Our staff hold various professional certifications from COREN, NSE, and international bodies.', order: 4 },
    { _key: 'faq5', question: 'Do you offer integrated service packages?', answer: 'Yes, we offer fully integrated service packages that combine engineering, procurement, logistics, and construction services under a single contract. This turnkey approach simplifies project management and ensures seamless coordination.', order: 5 },
    { _key: 'faq6', question: 'How do you ensure project quality?', answer: 'We implement rigorous quality management systems aligned with ISO 9001:2015. This includes detailed inspection and test plans, third-party verification, regular audits, and comprehensive documentation throughout the project lifecycle.', order: 6 },
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
  console.log('Starting static content migration...\n')

  const docs = [
    coreValuesData,
    companyStatsData,
    keyCapabilitiesData,
    majorAchievementsData,
    equipmentFacilitiesData,
    whyChooseUsData,
    serviceApproachData,
    officeLocationsData,
    ctaSectionData,
    faqData,
  ]

  for (const doc of docs) {
    await upsertDoc(doc)
  }

  console.log('\nMigration complete.')
}

main().catch(console.error)
