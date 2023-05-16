import {MdOutlineFilterFrames} from 'react-icons/md'
import {defineType, defineField} from 'sanity'

export const work = defineType({
    name: 'work',
    title: 'Work',
    type: 'document',
    icon: MdOutlineFilterFrames,
    fieldsets: [
        {
            name: 'dimensions',
            title: 'Dimensions',
            description: '(Inches)',
            options: {
                columns: 3,
            },
        },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 50,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'media',
            title: 'Media',
            type: 'array',
            of: [{type: 'image'}],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{type: 'category'}],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'materials',
            title: 'Materials',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{type: 'materials'}],
                },
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'year',
            title: 'Year',
            type: 'number',
            validation: (Rule) => Rule.required().min(1950).max(2100).precision(0),
        }),
        defineField({
            name: 'height',
            title: 'Height',
            type: 'number',
            validation: (Rule) => Rule.required().precision(2),
            fieldset: 'dimensions',
        }),
        defineField({
            name: 'width',
            title: 'Width',
            type: 'number',
            validation: (Rule) => Rule.required().precision(2),
            fieldset: 'dimensions',
        }),
        defineField({
            name: 'depth',
            title: 'Depth',
            type: 'number',
            validation: (Rule) => Rule.precision(2),
            fieldset: 'dimensions',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: '(Optional)',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'year',
            media: 'media',
        },
        prepare({title, subtitle, media}: any) {
            return {
                title: title,
                subtitle: subtitle,
                media: media !== undefined ? media[0] : MdOutlineFilterFrames,
            }
        },
    },
})

export default work
