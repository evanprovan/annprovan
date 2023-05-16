import SingleWork from '@/components/SingleWork';
import { getWork, urlFor } from '@/sanity/sanity-utils';
import Image from 'next/image';
// import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {
    params: {
        work: string;
    };
};

export default async function WorkPage({ params }: Props) {
    const slug = params;
    const work = await getWork(slug);

    return (
        <section className='container'>
            <SingleWork work={work} />
        </section>
    );
}
