import { defineField, defineType } from 'sanity'

export const coreValues = defineType({
  name: 'coreValues',
  title: 'Core Values',
  type: 'document',
  fields: [
    defineField({
      name: 'values',
      title: 'Values',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'iconName', title: 'Icon', type: 'string', options: { list: ['Shield','Users','Award','Heart','Zap','Lightbulb','Target','Globe'] } },
          { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'description', title: 'Description', type: 'text', validation: (Rule) => Rule.required() },
          { name: 'bgColor', title: 'Background Color', type: 'string', options: { list: ['bg-blue-500','bg-green-500','bg-purple-500','bg-orange-500','bg-red-500','bg-indigo-500','bg-teal-500','bg-amber-500'] } },
          { name: 'order', title: 'Order', type: 'number' },
        ],
        preview: { select: { title: 'title', subtitle: 'description' } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: 'Core Values' }) },
})
