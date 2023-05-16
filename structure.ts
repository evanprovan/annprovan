// import { WebPreview, JsonView } from './previews'
import { HiOutlineCog } from 'react-icons/hi';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import { FiGrid } from 'react-icons/fi';

// note: context includes `currentUser` and the client
export const structure = (S: any, context: any) =>
    S.list()
        .title('Content')
        .items([
            // Filter out document types we don't want in the list
            ...S.documentTypeListItems().filter(
                (listItem: any) => !['media.tag', 'category', 'siteSettings'].includes(listItem.getId())
            ),

            // About Page
            // S.listItem()
            //     .title('About')
            //     .id('aboutme')
            //     .icon(BsFillPersonLinesFill)
            //     .child(S.editor().schemaType('about').documentId('about')),

            orderableDocumentListDeskItem({
                type: 'category',
                title: 'Category',
                icon: FiGrid,
                S,
                context,
            }),

            // Add a visual divider
            S.divider(),

            // S.listItem()
            //     .title('Social Media')
            //     .id('socialMedia')
            //     .icon(IoShareSocialSharp)
            //     .child(
            //         S.documentList()
            //             .id('socialMedia')
            //             .filter('_type == "socialMedia"')
            //             .schemaType('socialMedia')
            //     ),

            // // Site Settings
            S.listItem()
                .title('Site Settings')
                .id('siteSetting')
                .icon(HiOutlineCog)
                .child(S.editor().schemaType('siteSettings').documentId('siteSettings')),
        ]);

// export const defaultDocumentNode = (S, {schemaType}) => {
//   // Conditionally return a different configuration based on the schema type
//   if (schemaType === "post") {
//     return S.document().views([
//       S.view.form(),
//       S.view.component(WebPreview).title('Web')
//     ])
//  }

//  return S.document().views([
//     S.view.form(),
//     S.view.component(JsonView).title('JSON')
//   ])
// }
