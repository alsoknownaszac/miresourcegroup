import { defineField, defineType } from 'sanity'

export const majorAchievements = defineType({
  name: 'majorAchievements',
  title: 'Major Achievements',
  type: 'document',
  fields: [
    defineField({
      name: 'achievements',
      title: 'Achievements',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'iconName', title: 'Icon', type: 'string', options: { list: ['Shield','Users','TrendingUp','Zap','Target','Award','Globe','CheckCircle2'] } },
          { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'description', title: 'Description', type: 'text', validation: (Rule) => Rule.required() },
          { name: 'metric', title: 'Metric Badge', type: 'string' },
          { name: 'bgColor', title: 'Background Color', type: 'string', options: { list: ['bg-blue-500','bg-green-500','bg-purple-500','bg-orange-500','bg-red-500','bg-indigo-500','bg-teal-500','bg-amber-500'] } },
          { name: 'order', title: 'Order', type: 'number' },
        ],
        preview: { select: { title: 'title', subtitle: 'metric' } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: 'Major Achievements' }) },
})
