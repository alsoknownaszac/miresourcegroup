import { defineField, defineType } from 'sanity'

export const whyChooseUs = defineType({
  name: 'whyChooseUs',
  title: 'Why Choose Us',
  type: 'document',
  fields: [
    defineField({
      name: 'reasons',
      title: 'Reasons',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'iconName', title: 'Icon', type: 'string', options: { list: ['Award','Users','Globe','Zap','Shield','Target','TrendingUp','Lightbulb'] } },
          { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'description', title: 'Description', type: 'text', validation: (Rule) => Rule.required() },
          { name: 'order', title: 'Order', type: 'number' },
        ],
        preview: { select: { title: 'title' } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: 'Why Choose Us' }) },
})
