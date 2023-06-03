import { createClient, groq } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import clientConfig from './config/client-config'
import { HomepageImg } from '@/types/HomepageImg'
import { Work } from '@/types/Work'
import { Category } from '@/types/Category'
import { HeaderItems } from '@/types/HeaderItems'
import { AboutPage } from '@/types/About'
import { Contact } from '@/types/Contact'

export async function getHeaderItems(): Promise<HeaderItems> {
    return createClient(clientConfig).fetch(
        groq`{
                'works': *[_type == "work"]|order(title asc){
                    title,
                    slug,
                    category->{
                        name,
                        slug{
                          current
                        },
                      },
                },
                'category': *[_type == "category"]|order(orderRank){
                    name,
                    slug{
                        current
                    }
                }
            }`
    )
}

export async function getHomepageImg(): Promise<HomepageImg> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "siteSettings"][0]{
            "homepageimg": homepageimg.asset-> {
                _id,
                metadata{
                palette{
                    darkMuted
                },
                lqip,
                dimensions
                }
              },
          }`
    )
}

export async function getWork(slug: any): Promise<Work> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "work" && slug.current == $work && category._ref in *[_type=="category" && slug.current == $category]._id][0]{
            title,
            slug,
            category->{
              name,
              slug{
                current
              },
            },
            media[]{
                asset->{
                  _id,
                  metadata{
                    lqip,
                    dimensions
                  }}
            },
            year,
            materials[]->{
              name
            },
            width,
            height,
            depth,
            description
        }`,
        {
            work: slug.work,
            category: slug.category,
        }
    )
}

export async function getCategory(slug: string): Promise<Category> {
    return createClient(clientConfig).fetch(
        groq`{
            'category': *[_type == "category" && slug.current == $slug][0]{
                name,
                slug{
                    current
                }
            },
            'works': *[_type == "work" && category._ref in *[_type=="category" && slug.current == $slug]._id] | order(title asc) | order(year desc){
                title,
                slug,
                category->{
                    name,
                    slug{
                        current
                    },
                },
                media[]{
                    asset->{
                        _id,
                        metadata{
                            lqip,
                            dimensions
                        }
                    }
                },
                year,
                materials[]->{
                    name
                },
                width,
                height,
                depth,
            },
        }`,
        { slug }
    )
}

export async function getAbout(): Promise<AboutPage> {
    return createClient(clientConfig).fetch(
        groq`{
                'about': *[_type == "about"][0]{
                    artiststatement,
                    bio,
                    education,
                    awardsgrants,
                    collections,
                    bibliography
                },
                'exhibitions': *[_type == "exhibitions"] | order(year desc){
                    title,
                    institution,
                    year,
                    location
              }
            }`
    )
}

export async function getContact(): Promise<Contact> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "contact"][0]{
            description,
            "image": image.asset-> {
                _id,
                metadata{
                palette{
                    darkMuted
                },
                lqip,
                dimensions
                }
              },
          }`
    )
}
export const urlFor = (source: string) => createImageUrlBuilder(createClient(clientConfig)).image(source)
