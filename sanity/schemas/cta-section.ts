import { defineField, defineType } from 'sanity'

export const ctaSection = defineType({
  name: 'ctaSection',
  title: 'CTA Section',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', validation: (Rule) => Rule.required() }),
    defineField({ name: 'primaryButtonText', title: 'Primary Button Text', type: 'string' }),
    defineField({ name: 'primaryButtonHref', title: 'Primary Button URL', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
  ],
  preview: { select: { title: 'heading' }, prepare: ({ title }) => ({ title: title || 'CTA Section' }) },
})
