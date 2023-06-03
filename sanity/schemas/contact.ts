import {defineType, defineField} from 'sanity'

export const contact = defineType({
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule: any) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (rule: any) => rule.required(),
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Contact',
            }
        },
    },
})

export default contact
