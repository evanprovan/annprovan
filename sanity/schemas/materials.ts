import {HiOutlineCube} from 'react-icons/hi'
import {defineType, defineField} from 'sanity'

export const materials = defineType({
    name: 'materials',
    title: 'Materials',
    type: 'document',
    icon: HiOutlineCube,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
})

export default materials
