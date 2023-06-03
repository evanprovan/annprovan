import SingleWork from '@/components/SingleWork'
import { getWork, urlFor } from '@/sanity/sanity-utils'
import Image from 'next/image'
// import { motion } from 'framer-motion';
import Link from 'next/link'
import { Metadata } from 'next'

type Props = {
    params: {
        work: string
    }
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const slug = params
    const work = await getWork(slug)
    return { title: work.title + ' - Ann Provan' }
}

export default async function WorkPage({ params }: Props) {
    const slug = params
    const work = await getWork(slug)

    return (
        <section className="container">
            <SingleWork work={work} />
        </section>
    )
}
