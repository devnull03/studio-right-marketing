import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Project Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Project Description',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'longDescription',
      type: 'array',
      title: 'Detailed Description',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'featuredImage',
      type: 'image',
      title: 'Featured Image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      title: 'Project Gallery',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'services',
      type: 'array',
      title: 'Services Used',
      of: [{ type: 'reference', to: { type: 'service' } }],
    }),
    defineField({
      name: 'location',
      type: 'reference',
      title: 'Project Location',
      to: { type: 'location' },
    }),
    defineField({
      name: 'client',
      type: 'object',
      title: 'Client Information',
      fields: [
        defineField({
          name: 'name',
          type: 'string',
          title: 'Client Name',
        }),
        defineField({
          name: 'type',
          type: 'string',
          title: 'Client Type',
          options: {
            list: [
              { title: 'Residential', value: 'residential' },
              { title: 'Commercial', value: 'commercial' },
              { title: 'Industrial', value: 'industrial' },
            ],
          },
        }),
        defineField({
          name: 'showName',
          type: 'boolean',
          title: 'Show Client Name Publicly',
          initialValue: false,
        }),
      ],
    }),
    defineField({
      name: 'projectDetails',
      type: 'object',
      title: 'Project Details',
      fields: [
        defineField({
          name: 'startDate',
          type: 'date',
          title: 'Start Date',
        }),
        defineField({
          name: 'completionDate',
          type: 'date',
          title: 'Completion Date',
        }),
        defineField({
          name: 'duration',
          type: 'string',
          title: 'Project Duration',
        }),
        defineField({
          name: 'squareFootage',
          type: 'number',
          title: 'Square Footage',
        }),
      ],
    }),
    defineField({
      name: 'beforeAfter',
      type: 'object',
      title: 'Before & After Images',
      fields: [
        defineField({
          name: 'before',
          type: 'array',
          title: 'Before Images',
          of: [{ type: 'image', options: { hotspot: true } }],
        }),
        defineField({
          name: 'after',
          type: 'array',
          title: 'After Images',
          of: [{ type: 'image', options: { hotspot: true } }],
        }),
      ],
    }),
    defineField({
      name: 'challenges',
      type: 'array',
      title: 'Project Challenges',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'solutions',
      type: 'array',
      title: 'Solutions Implemented',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured Project',
      initialValue: false,
    }),
    defineField({
      name: 'status',
      type: 'string',
      title: 'Project Status',
      options: {
        list: [
          { title: 'Completed', value: 'completed' },
          { title: 'In Progress', value: 'in-progress' },
          { title: 'Planned', value: 'planned' },
        ],
      },
      initialValue: 'completed',
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'client.name',
      media: 'featuredImage',
    },
  },
})
