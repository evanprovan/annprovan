import { getCategory } from '@/sanity/sanity-utils';
import Thumbnail from '@/components/Thumbnail';
import { Metadata } from 'next';

type Props = {
    params: {
        category: string;
    };
};

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const slug = params.category;
    const { category } = await getCategory(slug);
    return { title: category.name + ' - Ann Provan' };
}

export default async function CategoryPage({ params }: Props) {
    const slug = params.category;
    const { category, works } = await getCategory(slug);

    return (
        <section className='container'>
            <h1>{category.name}</h1>
            <div className='gallery'>
                {works.map((work: any) => (
                    <Thumbnail key={work._id} work={work} />
                ))}
            </div>
        </section>
    );
}
