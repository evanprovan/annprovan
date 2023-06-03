import { defineType, defineField } from 'sanity'

export const about = defineType({
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        defineField({
            name: 'artiststatement',
            title: 'Artist Statement',
            type: 'text',
            validation: (rule: any) => rule.required(),
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'text',
            validation: (rule: any) => rule.required(),
        }),
        defineField({
            name: 'education',
            title: 'Education',
            type: 'array',
            of: [
                {
                    type: 'string',
                },
            ],
            validation: (rule: any) => rule.required(),
        }),
        defineField({
            name: 'awardsgrants',
            title: 'Awards & Grants',
            type: 'text',
            validation: (rule: any) => rule.required(),
        }),
        defineField({
            name: 'collections',
            title: 'Collections',
            type: 'text',
            validation: (rule: any) => rule.required(),
        }),
        defineField({
            name: 'bibliography',
            title: 'Bibliography',
            type: 'text',
            validation: (rule: any) => rule.required(),
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'About',
            }
        },
    },
})

export default about
