import { defineField, defineType } from 'sanity'

export const serviceType = defineType({
	name: 'service',
	title: 'Service',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			title: 'Title',
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
			name: 'shortDescription',
			type: 'text',
			title: 'Short Description',
			rows: 2,
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'description',
			type: 'text',
			title: 'Description',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'images',
			type: 'array',
			title: 'Images',
			of: [{ type: 'image' }],
		}),
		defineField({
			name: 'benefits',
			type: 'array',
			title: 'Benefits',
			of: [{ type: 'string' }],
		}),
		defineField({
			name: 'keyFeatures',
			type: 'array',
			title: 'Key Features',
			of: [{ type: 'string' }],
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
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'slug.current',
		},
	},
})
