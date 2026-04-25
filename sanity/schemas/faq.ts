import { defineField, defineType } from 'sanity'

export const faq = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'items',
      title: 'FAQ Items',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'question', title: 'Question', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'answer', title: 'Answer', type: 'text', validation: (Rule) => Rule.required() },
          { name: 'order', title: 'Order', type: 'number' },
        ],
        preview: { select: { title: 'question' } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: 'FAQ' }) },
})
