import Image from 'next/image';
import { getHomepageImg } from '@/sanity/sanity-utils';
import { urlFor } from '@/sanity/sanity-utils';

export default async function Home() {
    const homepageImg = await getHomepageImg();
    return (
        <div
            style={{
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                position: 'absolute',
                backgroundColor: homepageImg.homepageimg.metadata.palette.darkMuted.background,
                zIndex: -1,
            }}
        >
            <Image
                className='homepage-img'
                src={urlFor(homepageImg.homepageimg._id).width(2560).url()}
                placeholder='blur'
                blurDataURL={homepageImg.homepageimg.metadata.lqip}
                alt='Homepage Image'
                fill
                sizes='100vw'
            />
        </div>
    );
}
