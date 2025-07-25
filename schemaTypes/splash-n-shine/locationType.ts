import { defineField, defineType } from 'sanity'

export const locationType = defineType({
  name: 'location',
  title: 'Service Location',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'name' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'faqItems',
      type: 'array',
      title: 'FAQ Items',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              type: 'string',
              title: 'Question',
            }),
            defineField({
              name: 'answer',
              type: 'string',
              title: 'Answer',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'mapEmbedUrl',
      type: 'string',
      title: 'Map Embed URL',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
    },
  },
})
