import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemaTypes from './sanity/schemas';
import { structure } from './structure';
import { media } from 'sanity-plugin-media';

const hideFromNewDocument = ['siteSettings', 'about', 'resume', 'media.tag'];

const config = defineConfig({
    projectId: 'yw9qen86',
    dataset: 'production',
    title: 'Ann Provan',
    apiVersion: '2023-04-26',
    useCdn: false,
    basePath: '/admin',
    plugins: [deskTool({ structure }), media(), visionTool()],
    schema: { types: schemaTypes },
    document: {
        newDocumentOptions: (prev, context) =>
            prev.filter((document) => !hideFromNewDocument.includes(document.templateId)),
    },
});

export default config;
