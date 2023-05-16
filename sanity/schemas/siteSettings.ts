import {defineType, defineField} from 'sanity'

export const siteSettings = defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'homepageimg',
            title: 'Homepage Image',
            type: 'image',
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Site Settings',
            }
        },
    },
})

export default siteSettings
