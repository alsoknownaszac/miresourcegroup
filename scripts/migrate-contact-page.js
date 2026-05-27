#!/usr/bin/env node

/**
 * Pushes all contact page content from the codebase into Sanity,
 * replacing the existing contact-content document.
 */
require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01',
})

const contactPageContent = {
  _id: 'contact-content',
  _type: 'contact',

  seo: {
    title: 'Contact Us | M.I Resource Services Ltd',
    description:
      "Get in touch with M.I Resource Services Ltd. We're here to support your Oil & Gas operations. Visit our offices in Lagos and Port Harcourt.",
    ogTitle: 'Contact Us | M.I Resource Services Ltd',
    ogDescription: "Get in touch with Nigeria's leading Oil & Gas support services provider",
    ogImage: '/MIResourcesLogo.png',
  },

  hero: {
    title: 'Contact Us',
    subtitle: "Let's discuss how we can support your operations",
    backgroundImage: '/oil-platform-ocean-with-sun-setting-it.jpg',
    overlayOpacity: 0.7,
  },

  badgeText: 'Contact Us',
  headline: "Let's Start a Conversation",
  highlightedText: 'Conversation',
  description: [
    {
      _type: 'block',
      _key: 'contact-desc',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 'contact-span',
          text: 'Ready to elevate your operations? Get in touch with our team to discuss how M.I Resources can support your business needs.',
          marks: [],
        },
      ],
      markDefs: [],
    },
  ],
  contactInfo: [
    {
      _key: 'contact-info-1',
      label: 'Address',
      value: 'Lagos, Nigeria',
      icon: 'map-pin',
      order: 1,
    },
    {
      _key: 'contact-info-2',
      label: 'Phone',
      value: '+234 123 456 7890',
      icon: 'phone',
      order: 2,
    },
    {
      _key: 'contact-info-3',
      label: 'Email',
      value: 'info@miresourcegroup.com',
      icon: 'mail',
      order: 3,
    },
  ],
  formSettings: {
    submitButtonText: 'Send Message',
    submittingButtonText: 'Sending...',
    successMessage: {
      title: 'Message Sent!',
      description: "Thank you for reaching out. We'll get back to you shortly.",
    },
  },
  formFields: {
    firstNameLabel: 'First Name',
    firstNamePlaceholder: 'John',
    lastNameLabel: 'Last Name',
    lastNamePlaceholder: 'Doe',
    emailLabel: 'Email Address',
    emailPlaceholder: 'john@example.com',
    companyLabel: 'Company',
    companyPlaceholder: 'Your Company',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell us about your project...',
  },

  locationsSection: {
    badgeText: 'Our Locations',
    headline: 'Visit Our Offices',
    headlineHighlight: 'Offices',
    subtitle: "Strategically located in Nigeria's key industrial hubs to serve you better",
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    hoursLabel: 'Business Hours',
    contactPersonLabel: 'Contact Person',
    emergency: {
      title: 'Need Emergency Support?',
      description: 'We offer 24/7 emergency response for critical operations',
      phone: '+2348071173927',
      buttonText: 'Call Emergency Hotline',
    },
  },
  offices: [
    {
      _key: 'office-ph',
      name: 'Port Harcourt Office',
      type: 'Head Office',
      address: 'Plot 30 Sani Abacha Road, GRA Phase 3, Port Harcourt, Rivers State.',
      phone: '+234 807 117 3927',
      email: 'info@miresourcegroup.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
      contactPerson: {
        name: 'Ojeisekhoba Divine',
        title: 'Administrator',
        phone: '+234 815 927 1443',
        email: 'info@miresourcegroup.com',
      },
      order: 1,
    },
    {
      _key: 'office-lagos',
      name: 'Lagos Office',
      type: 'Branch Office',
      address:
        '40B, Olanrewaju Ninalowo street, off Kafayat AbdulRasak street, Lekki phase one, Lagos.',
      phone: '+234 807 117 3927',
      email: 'info@miresourcegroup.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
      order: 2,
    },
  ],

  socialSection: {
    heading: 'Connect With Us',
    description: 'Follow us on social media for updates and industry insights',
    links: [
      {
        _key: 'social-linkedin',
        platform: 'linkedin',
        url: 'https://linkedin.com/company/miresourcegroup',
        order: 1,
      },
      {
        _key: 'social-facebook',
        platform: 'facebook',
        url: 'https://facebook.com/miresourcegroup',
        order: 2,
      },
      {
        _key: 'social-twitter',
        platform: 'twitter',
        url: 'https://twitter.com/miresourcegroup',
        order: 3,
      },
      {
        _key: 'social-instagram',
        platform: 'instagram',
        url: 'https://instagram.com/miresourcegroup',
        order: 4,
      },
      {
        _key: 'social-youtube',
        platform: 'youtube',
        url: 'https://youtube.com/@miresourcegroup',
        order: 5,
      },
    ],
  },

  faqSection: {
    badgeText: 'FAQ',
    headline: 'Frequently Asked Questions',
    headlineHighlight: 'Questions',
    subtitle: 'Everything you need to know about our services',
    ctaText: 'Still have questions?',
    ctaEmail: 'info@miresourcegroup.com',
    ctaButtonText: 'Contact Our Team',
    items: [
      {
        _key: 'faq-1',
        question: 'What services does M.I Resource Services Ltd provide?',
        answer:
          'We provide comprehensive support services including Engineering Services, Procurement Services, Supply Chain and Logistics Management, Marine Support Services, Management Services, Marine Electronics, Sales and Distribution, and Human Capacity Development/Training. Our services cover everything from fabrication and instrumentation to equipment rental and project management.',
        order: 1,
      },
      {
        _key: 'faq-2',
        question: 'Are you ISO certified?',
        answer:
          'Yes, we have adopted international ISO 9001 standards as our standard for quality management and assurance. This certification demonstrates our commitment to maintaining the highest quality standards in all our operations.',
        order: 2,
      },
      {
        _key: 'faq-3',
        question: 'What is your approach to safety?',
        answer:
          "Safety is our top priority. We operate under the principle that 'ALL ACCIDENTS ARE PREVENTABLE.' We maintain the highest safety standards and will not compromise our safety standards to achieve other corporate goals. All personnel undergo comprehensive safety orientation and training.",
        order: 3,
      },
      {
        _key: 'faq-4',
        question: 'Do you offer turnkey solutions?',
        answer:
          'Yes, we offer complete turnkey solutions. We can manage the entire design and delivery process to ensure execution costs meet required budgets. Our internal strength allows us to offer services either as a total package or as customized groupings of individual packages.',
        order: 4,
      },
      {
        _key: 'faq-5',
        question: 'What equipment and facilities do you have?',
        answer:
          'We have a wide range of facilities including excavators, CAT 966C Wheel Loaders, concrete mixers, dump trucks, water tankers, vibrating rollers, pavers, welding machines, Toyota Hilux trucks, Hiace buses, and specialized trailers for logistics operations.',
        order: 5,
      },
      {
        _key: 'faq-6',
        question: 'How can I request a quote or start a project?',
        answer:
          'You can contact us through our contact form, email info@miresourcegroup.com, or call +234 807 117 3927. For direct inquiries, reach out to our Administrator, Ojeisekhoba Divine at +234 815 927 1443 or info@miresourcegroup.com.',
        order: 6,
      },
      {
        _key: 'faq-7',
        question: 'What makes M.I Resources different from competitors?',
        answer:
          'We are a privately owned indigenous Nigerian company with deep understanding of local market dynamics, combined with global standards. We have strategic alliances with specialized companies worldwide, ISO 9001 certification, and operate with the Kaizen continuous improvement methodology.',
        order: 7,
      },
      {
        _key: 'faq-8',
        question: 'Do you provide emergency response services?',
        answer:
          'Yes, we maintain emergency response capability to react quickly and effectively against deviations. We offer 24/7 support for critical operations to ensure operational continuity.',
        order: 8,
      },
    ],
  },
}

async function main() {
  if (!process.env.SANITY_API_TOKEN) {
    console.error('❌ SANITY_API_TOKEN is required in .env.local')
    process.exit(1)
  }

  console.log('📤 Pushing contact page content to Sanity (contact-content)...')
  await client.createOrReplace(contactPageContent)
  console.log('✅ Contact page content updated in Sanity')
  console.log('   Studio: /studio → Contact Page')
}

main().catch((err) => {
  console.error('❌ Migration failed:', err.message)
  process.exit(1)
})
