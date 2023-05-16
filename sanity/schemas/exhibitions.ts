import {MdOutlineEvent} from 'react-icons/md'
import {defineType, defineField} from 'sanity'

export const exhibitions = defineType({
    name: 'exhibitions',
    title: 'Exhibitions',
    type: 'document',
    icon: MdOutlineEvent,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            title: 'Institution',
            name: 'institution',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            title: 'Location',
            name: 'location',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            title: 'Year',
            name: 'year',
            type: 'number',
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'institution',
            date: 'year',
        },
        prepare({title, subtitle, date}: any) {
            return {
                title: title,
                subtitle: date + ' | ' + subtitle,
            }
        },
    },
})

export default exhibitions
