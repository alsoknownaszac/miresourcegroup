import { defineField, defineType } from 'sanity'

export const companyStats = defineType({
  name: 'companyStats',
  title: 'Company Stats',
  type: 'document',
  fields: [
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'iconName', title: 'Icon', type: 'string', options: { list: ['TrendingUp','Users','Award','Globe','Shield','Zap','Target','BarChart3'] } },
          { name: 'value', title: 'Value', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'description', title: 'Description', type: 'string' },
          { name: 'order', title: 'Order', type: 'number' },
        ],
        preview: { select: { title: 'label', subtitle: 'value' } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: 'Company Stats' }) },
})
