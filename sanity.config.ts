import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemaTypes from './sanity/schemas';

const config = defineConfig({
    projectId: 'yw9qen86',
    dataset: 'production',
    title: 'Ann Provan',
    apiVersion: '2023-04-26',
    useCdn: false,
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemaTypes },
});

export default config;
