import { defineField, defineType } from 'sanity'

export const faqType = defineType({
  name: 'faq',
  title: 'Frequently Asked Question',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      type: 'string',
      title: 'Question',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer',
      type: 'array',
      title: 'Answer',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'FAQ Category',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Services', value: 'services' },
          { title: 'Pricing', value: 'pricing' },
          { title: 'Booking', value: 'booking' },
          { title: 'Location Specific', value: 'location' },
        ],
      },
    }),
    defineField({
      name: 'relatedServices',
      type: 'array',
      title: 'Related Services',
      of: [{ type: 'reference', to: { type: 'service' } }],
    }),
    defineField({
      name: 'relatedLocations',
      type: 'array',
      title: 'Related Locations',
      of: [{ type: 'reference', to: { type: 'location' } }],
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Display Order',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured FAQ',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'category',
    },
  },
})
