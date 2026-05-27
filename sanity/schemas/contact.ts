import { defineType, defineField } from 'sanity'

const sectionHeadingFields = [
  defineField({
    name: 'badgeText',
    title: 'Badge Text',
    type: 'string',
  }),
  defineField({
    name: 'headline',
    title: 'Headline',
    type: 'string',
  }),
  defineField({
    name: 'headlineHighlight',
    title: 'Highlighted Word(s) in Headline',
    type: 'string',
    description: 'Word(s) from the headline shown in primary color',
  }),
  defineField({
    name: 'subtitle',
    title: 'Subtitle',
    type: 'text',
    rows: 3,
  }),
]

export default defineType({
  name: 'contact',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO & Metadata',
      type: 'object',
      fields: [
        { name: 'title', title: 'Page Title', type: 'string' },
        { name: 'description', title: 'Meta Description', type: 'text', rows: 3 },
        { name: 'ogTitle', title: 'Open Graph Title', type: 'string' },
        { name: 'ogDescription', title: 'Open Graph Description', type: 'text', rows: 2 },
        { name: 'ogImage', title: 'Open Graph Image Path', type: 'string', description: 'Path under /public, e.g. /MIResourcesLogo.png' },
      ],
    }),
    defineField({
      name: 'hero',
      title: 'Page Hero',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
        { name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 },
        {
          name: 'backgroundImage',
          title: 'Background Image Path',
          type: 'string',
          description: 'Path under /public, e.g. /oil-platform-ocean-with-sun-setting-it.jpg',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'overlayOpacity',
          title: 'Overlay Opacity',
          type: 'number',
          validation: (Rule) => Rule.min(0).max(1),
          initialValue: 0.7,
        },
      ],
    }),
    defineField({
      name: 'badgeText',
      title: 'Form Section — Badge Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Form Section — Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'highlightedText',
      title: 'Form Section — Highlighted Text',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Form Section — Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactInfo',
      title: 'Form Section — Contact Information',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'value', title: 'Value', type: 'string', validation: (Rule) => Rule.required() },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Map Pin', value: 'map-pin' },
                  { title: 'Phone', value: 'phone' },
                  { title: 'Mail', value: 'mail' },
                  { title: 'Globe', value: 'globe' },
                  { title: 'Clock', value: 'clock' },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            { name: 'order', title: 'Display Order', type: 'number', validation: (Rule) => Rule.required().min(1) },
          ],
          preview: {
            select: { title: 'label', subtitle: 'value', order: 'order' },
            prepare({ title, subtitle, order }) {
              return { title: `${order}. ${title}`, subtitle }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'formSettings',
      title: 'Form Settings',
      type: 'object',
      fields: [
        { name: 'submitButtonText', title: 'Submit Button Text', type: 'string', validation: (Rule) => Rule.required() },
        {
          name: 'submittingButtonText',
          title: 'Submitting Button Text',
          type: 'string',
        },
        {
          name: 'successMessage',
          title: 'Success Message',
          type: 'object',
          fields: [
            { name: 'title', title: 'Success Title', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'description', title: 'Success Description', type: 'string', validation: (Rule) => Rule.required() },
          ],
        },
      ],
    }),
    defineField({
      name: 'formFields',
      title: 'Form Field Labels & Placeholders',
      type: 'object',
      fields: [
        { name: 'firstNameLabel', title: 'First Name Label', type: 'string' },
        { name: 'firstNamePlaceholder', title: 'First Name Placeholder', type: 'string' },
        { name: 'lastNameLabel', title: 'Last Name Label', type: 'string' },
        { name: 'lastNamePlaceholder', title: 'Last Name Placeholder', type: 'string' },
        { name: 'emailLabel', title: 'Email Label', type: 'string' },
        { name: 'emailPlaceholder', title: 'Email Placeholder', type: 'string' },
        { name: 'companyLabel', title: 'Company Label', type: 'string' },
        { name: 'companyPlaceholder', title: 'Company Placeholder', type: 'string' },
        { name: 'messageLabel', title: 'Message Label', type: 'string' },
        { name: 'messagePlaceholder', title: 'Message Placeholder', type: 'string' },
      ],
    }),
    defineField({
      name: 'locationsSection',
      title: 'Locations Section — Heading',
      type: 'object',
      fields: [
        ...sectionHeadingFields,
        { name: 'phoneLabel', title: 'Phone Field Label', type: 'string' },
        { name: 'emailLabel', title: 'Email Field Label', type: 'string' },
        { name: 'hoursLabel', title: 'Business Hours Field Label', type: 'string' },
        { name: 'contactPersonLabel', title: 'Contact Person Field Label', type: 'string' },
        {
          name: 'emergency',
          title: 'Emergency Banner',
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
            { name: 'phone', title: 'Phone Number', type: 'string' },
            { name: 'buttonText', title: 'Button Text', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'offices',
      title: 'Office Locations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Office Name', type: 'string', validation: (Rule) => Rule.required() },
            {
              name: 'type',
              title: 'Office Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Head Office', value: 'Head Office' },
                  { title: 'Branch Office', value: 'Branch Office' },
                  { title: 'Regional Office', value: 'Regional Office' },
                ],
              },
            },
            { name: 'address', title: 'Address', type: 'text', validation: (Rule) => Rule.required() },
            { name: 'phone', title: 'Phone', type: 'string' },
            { name: 'email', title: 'Email', type: 'string' },
            { name: 'hours', title: 'Business Hours', type: 'string' },
            {
              name: 'contactPerson',
              title: 'Contact Person',
              type: 'object',
              fields: [
                { name: 'name', title: 'Name', type: 'string' },
                { name: 'title', title: 'Title/Role', type: 'string' },
                { name: 'phone', title: 'Phone', type: 'string' },
                { name: 'email', title: 'Email', type: 'string' },
              ],
            },
            { name: 'order', title: 'Display Order', type: 'number' },
          ],
          preview: { select: { title: 'name', subtitle: 'type' } },
        },
      ],
    }),
    defineField({
      name: 'socialSection',
      title: 'Social Media Section',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'description', title: 'Description', type: 'text', rows: 2 },
        {
          name: 'links',
          title: 'Social Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'platform',
                  title: 'Platform',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'LinkedIn', value: 'linkedin' },
                      { title: 'Facebook', value: 'facebook' },
                      { title: 'Twitter', value: 'twitter' },
                      { title: 'Instagram', value: 'instagram' },
                      { title: 'YouTube', value: 'youtube' },
                    ],
                  },
                  validation: (Rule) => Rule.required(),
                },
                { name: 'url', title: 'URL', type: 'url', validation: (Rule) => Rule.required() },
                { name: 'order', title: 'Display Order', type: 'number' },
              ],
              preview: {
                select: { title: 'platform', subtitle: 'url' },
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'object',
      fields: [
        ...sectionHeadingFields,
        { name: 'ctaText', title: 'Bottom CTA Text', type: 'string' },
        { name: 'ctaEmail', title: 'Bottom CTA Email', type: 'string' },
        { name: 'ctaButtonText', title: 'Bottom CTA Button Text', type: 'string' },
        {
          name: 'items',
          title: 'FAQ Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'question', title: 'Question', type: 'string', validation: (Rule) => Rule.required() },
                { name: 'answer', title: 'Answer', type: 'text', validation: (Rule) => Rule.required() },
                { name: 'order', title: 'Order', type: 'number' },
              ],
              preview: { select: { title: 'question' } },
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'hero.title', subtitle: 'badgeText' },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Contact Page',
        subtitle: subtitle || 'Full contact page content',
      }
    },
  },
})
