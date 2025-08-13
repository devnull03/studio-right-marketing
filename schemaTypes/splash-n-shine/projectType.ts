import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'splashNShineProject',
  title: 'Splash n Shine Project',
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
      options: { 
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Short Description',
      rows: 3,
      validation: (rule) => rule.required().max(200),
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
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'caption',
          type: 'string',
          title: 'Caption',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      title: 'Project Gallery',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Caption',
            }),
            defineField({
              name: 'isVideo',
              type: 'boolean',
              title: 'Is this a video thumbnail?',
              initialValue: false,
            }),
            defineField({
              name: 'videoUrl',
              type: 'url',
              title: 'Video URL (if video)',
              hidden: ({ parent }) => !parent?.isVideo,
            }),
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
    defineField({
      name: 'services',
      type: 'array',
      title: 'Services Provided',
      of: [{ type: 'reference', to: { type: 'service' } }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'location',
      type: 'reference',
      title: 'Project Location',
      to: { type: 'location' },
    }),
    defineField({
      name: 'categories',
      type: 'array',
      title: 'Gallery Categories',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Residential', value: 'residential' },
          { title: 'Commercial', value: 'commercial' },
          { title: 'Industrial', value: 'industrial' },
          { title: 'Before & After', value: 'before-after' },
          { title: 'Pressure Washing', value: 'pressure-washing' },
          { title: 'Window Cleaning', value: 'window-cleaning' },
          { title: 'Roof Cleaning', value: 'roof-cleaning' },
          { title: 'Concrete Cleaning', value: 'concrete-cleaning' },
        ],
      },
      description: 'Categorize this project for gallery filtering',
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
          description: 'Whether to display client name on public pages',
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
        defineField({
          name: 'crew',
          type: 'number',
          title: 'Crew Size',
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
          of: [
            {
              type: 'image',
              options: { hotspot: true },
              fields: [
                defineField({
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative Text',
                  validation: (rule) => rule.required(),
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'after',
          type: 'array',
          title: 'After Images',
          of: [
            {
              type: 'image',
              options: { hotspot: true },
              fields: [
                defineField({
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative Text',
                  validation: (rule) => rule.required(),
                }),
              ],
            },
          ],
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
      title: 'Solutions Applied',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'results',
      type: 'array',
      title: 'Results Achieved',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured Project',
      initialValue: false,
      description: 'Featured projects appear on homepage and top of gallery',
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
      title: 'Published Date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seoKeywords',
      type: 'array',
      title: 'SEO Keywords',
      of: [{ type: 'string' }],
      description: 'Keywords for search engine optimization',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'featuredImage',
      status: 'status',
      featured: 'featured',
      clientName: 'client.name',
    },
    prepare(selection) {
      const { title, media, status, featured, clientName } = selection
      return {
        title: title,
        media: media,
        subtitle: `${status}${featured ? ' • Featured' : ''}${clientName ? ` • ${clientName}` : ''}`,
      }
    },
  },
})
