import { defineField, defineType } from 'sanity'

export const caseStudies = defineType({
  name: 'caseStudies',
  title: 'Case Studies',
  type: 'document',
  fields: [
    defineField({
      name: 'studies',
      title: 'Case Studies',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'client', type: 'string', title: 'Client Name' },
            { name: 'industry', type: 'string', title: 'Industry' },
            { name: 'project', type: 'string', title: 'Project Name' },
            { name: 'challenge', type: 'text', title: 'Challenge' },
            { name: 'solution', type: 'text', title: 'Solution' },
            {
              name: 'results',
              type: 'array',
              title: 'Results',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'metric', type: 'string', title: 'Metric' },
                    { name: 'label', type: 'string', title: 'Label' },
                  ],
                },
              ],
            },
            {
              name: 'services',
              type: 'array',
              title: 'Services',
              of: [{ type: 'string' }],
            },
            { name: 'duration', type: 'string', title: 'Duration' },
            { name: 'iconName', type: 'string', title: 'Icon Name', description: 'Lucide icon name (e.g., Building2)' },
            { name: 'color', type: 'string', title: 'Color Class', description: 'Tailwind color class (e.g., bg-blue-500)' },
            { name: 'order', type: 'number', title: 'Display Order' },
          ],
        },
      ],
    }),
  ],
})
