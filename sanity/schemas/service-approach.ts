import { defineField, defineType } from 'sanity'

export const serviceApproach = defineType({
  name: 'serviceApproach',
  title: 'Service Approach',
  type: 'document',
  fields: [
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'iconName', title: 'Icon', type: 'string', options: { list: ['MessageSquare','FileSearch','Cog','CheckCircle','TrendingUp','Headphones','Wrench','Target'] } },
          { name: 'number', title: 'Step Number', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'description', title: 'Description', type: 'text', validation: (Rule) => Rule.required() },
          { name: 'order', title: 'Order', type: 'number' },
        ],
        preview: { select: { title: 'title', subtitle: 'number' } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: 'Service Approach' }) },
})
