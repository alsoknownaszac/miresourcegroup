import { defineField, defineType } from 'sanity'

export const marquee = defineType({
  name: 'marquee',
  title: 'Marquee Taglines',
  type: 'document',
  fields: [
    defineField({
      name: 'items',
      title: 'Tagline Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'text', type: 'string', title: 'Tagline Text' },
            { name: 'order', type: 'number', title: 'Display Order' },
          ],
        },
      ],
    }),
  ],
})
