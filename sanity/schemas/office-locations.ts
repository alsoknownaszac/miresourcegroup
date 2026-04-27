import { defineField, defineType } from 'sanity'

export const officeLocations = defineType({
  name: 'officeLocations',
  title: 'Office Locations',
  type: 'document',
  fields: [
    defineField({
      name: 'offices',
      title: 'Offices',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Office Name', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'type', title: 'Office Type', type: 'string', options: { list: ['Head Office','Branch Office','Regional Office'] } },
          { name: 'address', title: 'Address', type: 'text', validation: (Rule) => Rule.required() },
          { name: 'phone', title: 'Phone', type: 'string' },
          { name: 'email', title: 'Email', type: 'string' },
          { name: 'hours', title: 'Business Hours', type: 'string' },
          {
            name: 'contactPerson',
            title: 'Contact Person',
            type: 'object',
            fields: [
              { name: 'name', title: 'Name', type: 'string' },
              { name: 'title', title: 'Title/Role', type: 'string' },
              { name: 'phone', title: 'Phone', type: 'string' },
              { name: 'email', title: 'Email', type: 'string' },
            ],
          },
          { name: 'order', title: 'Display Order', type: 'number' },
        ],
        preview: { select: { title: 'name', subtitle: 'type' } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: 'Office Locations' }) },
})
