import { defineField, defineType } from 'sanity'

export const whyPointType = defineType({
  name: 'whyPoint',
  title: 'Why Choose Us Point',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      type: 'string',
      title: 'Description',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'desc',
    },
  },
})
