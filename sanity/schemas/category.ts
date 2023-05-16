import { FiGrid } from 'react-icons/fi';
import { defineType, defineField } from 'sanity';
// import {orderRankField} from '@sanity/orderable-document-list'

export const category = defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    icon: FiGrid,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 50,
            },
            validation: (Rule) => Rule.required(),
        }),
        // orderRankField({type: 'category'}),
    ],
});

export default category;
