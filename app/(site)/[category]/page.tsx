import { getCategory } from '@/sanity/sanity-utils'
import Thumbnail from '@/components/Thumbnail'
import AnimatedTitle from '@/components/AnimatedTitle'
import { Metadata } from 'next'
import Gallery from '@/components/Gallery'

type Props = {
    params: {
        category: string
    }
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const slug = params.category
    const { category } = await getCategory(slug)
    return { title: category.name + ' - Ann Provan' }
}

export default async function CategoryPage({ params }: Props) {
    const slug = params.category
    const { category, works } = await getCategory(slug)

    return (
        <section className="container">
            <AnimatedTitle>{category.name}</AnimatedTitle>
            <Gallery works={works} />
            {/* <div className="gallery">
                {works.map((work: any) => (
                    <Thumbnail work={work} />
                ))}
            </div> */}
        </section>
    )
}
