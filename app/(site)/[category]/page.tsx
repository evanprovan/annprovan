import { getCategory } from '@/sanity/sanity-utils'
import Thumbnail from '@/components/Thumbnail'
import AnimatedTitle from '@/components/AnimatedTitle'
import { Metadata } from 'next'
import Gallery from '@/components/Gallery'

type Props = {
    params: Promise<{
        category: string
    }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category: slug } = await params
    const { category } = await getCategory(slug)
    return { title: category.name + ' - Ann Provan' }
}

export default async function CategoryPage({ params }: Props) {
    const { category: slug } = await params
    const { category, works } = await getCategory(slug)

    return (
        <section className="container">
            <AnimatedTitle>{category.name}</AnimatedTitle>
            <Gallery works={works} />
        </section>
    )
}
