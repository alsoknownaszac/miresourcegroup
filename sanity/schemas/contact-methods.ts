import { defineField, defineType } from 'sanity'

export const contactMethods = defineType({
  name: 'contactMethods',
  title: 'Contact Methods',
  type: 'document',
  fields: [
    defineField({
      name: 'methods',
      title: 'Contact Methods',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'iconName', type: 'string', title: 'Icon Name', description: 'Lucide icon name (e.g., Phone)' },
            { name: 'title', type: 'string', title: 'Title' },
            {
              name: 'details',
              type: 'array',
              title: 'Details',
              of: [{ type: 'string' }],
            },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'order', type: 'number', title: 'Display Order' },
          ],
        },
      ],
    }),
  ],
})
