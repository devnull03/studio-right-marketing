import { defineField, defineType } from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'author',
      type: 'string',
      title: 'Author',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'testimonial',
      type: 'string',
      title: 'Testimonial',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'testimonial',
    },
  },
})
