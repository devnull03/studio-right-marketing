import { defineField, defineType } from 'sanity'

export const asset = defineType({
	name: 'sns-asset',
	title: 'Splash n Shine Assets',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			description: 'Title of the asset (e.g. Image, Video, Document)',
			validation: (r) => r.required(),
		}),
		defineField({
			name: 'file',
			type: 'file',
			title: 'File',
			description: 'Upload the asset file here',
			options: {
				accept: 'image/*,video/*,application/pdf',
				storeOriginalFilename: true,
			},
			validation: (r) => r.required(),
		}),
		defineField({
			name: 'description',
			type: 'text',
			title: 'Description',
			description: 'Brief description of the asset',
			rows: 3,
		}),
	]
})