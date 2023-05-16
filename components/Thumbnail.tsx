import { urlFor } from '@/sanity/sanity-utils';
import { Work } from '@/types/Work';
import Image from 'next/image';
import Link from 'next/link';

const Thumbnail = ({ work }: any) => {
    return (
        <Link
            className='thumbnail'
            href={`/${work.category.slug.current}/${work.slug.current}`}
            title={work.title}
        >
            <Image
                src={urlFor(work.media[0].asset._id).width(450).url()}
                placeholder='blur'
                width={450}
                height={450 / work.media[0].asset.metadata.dimensions.aspectRatio}
                blurDataURL={work.media[0].asset.metadata.lqip}
                alt={work.title}
                quality={95}
            />
        </Link>
    );
};

export default Thumbnail;
