import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'splash-n-shine-post',
  title: 'Splash n Shine Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'previewDescription',
      type: 'text',
      description: 'Short description for previews and meta descriptions',
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: 'readTime',
      type: 'number',
      description: 'Calculated reading time in minutes',
      validation: (rule) => rule.min(1).max(60),
    }),
    defineField({
      name: 'seoKeywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'SEO keywords for this post',
    }),
    defineField({
      name: 'postType',
      type: 'string',
      options: {
        list: [
          'Article', 'BlogPosting', 'NewsArticle', 'Guide'
        ],
      }
    }),
  ],
})