import { defineField, defineType } from 'sanity'

export const equipmentFacilities = defineType({
  name: 'equipmentFacilities',
  title: 'Equipment & Facilities',
  type: 'document',
  fields: [
    defineField({
      name: 'categories',
      title: 'Equipment Categories',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'category', title: 'Category Name', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'iconName', title: 'Icon', type: 'string', options: { list: ['HardHat','Truck','Drill','Wrench','Container','Gauge','Cog','Package'] } },
          { name: 'textColor', title: 'Text Color', type: 'string', options: { list: ['text-orange-500','text-blue-500','text-purple-500','text-green-500','text-red-500'] } },
          {
            name: 'items',
            title: 'Equipment Items',
            type: 'array',
            of: [{
              type: 'object',
              fields: [
                { name: 'name', title: 'Equipment Name', type: 'string', validation: (Rule) => Rule.required() },
                { name: 'quantity', title: 'Quantity', type: 'number', validation: (Rule) => Rule.required().min(1) },
                { name: 'status', title: 'Status', type: 'string', initialValue: 'Available' },
              ],
              preview: { select: { title: 'name', subtitle: 'quantity' } },
            }],
          },
          { name: 'order', title: 'Order', type: 'number' },
        ],
        preview: { select: { title: 'category' } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: 'Equipment & Facilities' }) },
})
