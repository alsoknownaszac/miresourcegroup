import { defineField, defineType } from 'sanity'

export const keyCapabilities = defineType({
  name: 'keyCapabilities',
  title: 'Key Capabilities',
  type: 'document',
  fields: [
    defineField({
      name: 'capabilities',
      title: 'Capabilities',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'iconName', title: 'Icon', type: 'string', options: { list: ['Shield','Zap','Target','Users','Gauge','Lightbulb','Globe','Award','TrendingUp'] } },
          { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'description', title: 'Description', type: 'text', validation: (Rule) => Rule.required() },
          { name: 'textColor', title: 'Text Color', type: 'string', options: { list: ['text-blue-500','text-amber-500','text-purple-500','text-green-500','text-red-500','text-indigo-500','text-teal-500','text-orange-500'] } },
          { name: 'order', title: 'Order', type: 'number' },
        ],
        preview: { select: { title: 'title' } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: 'Key Capabilities' }) },
})
