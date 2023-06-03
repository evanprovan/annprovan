import { urlFor } from '@/sanity/sanity-utils'
import { Work } from '@/types/Work'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    work: Work
}

const Thumbnail = ({ work }: Props) => {
    const fadein = {
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                ease: 'easeInOut',
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                ease: 'easeInOut',
            },
        },
    }

    return (
        <motion.div variants={fadein} key={work._id}>
            <Link
                className="thumbnail"
                href={`/${work.category.slug.current}/${work.slug.current}`}
                title={work.title}
            >
                <Image
                    src={urlFor(work.media[0].asset._id).width(450).url()}
                    placeholder="blur"
                    width={450}
                    height={450 / work.media[0].asset.metadata.dimensions.aspectRatio}
                    blurDataURL={work.media[0].asset.metadata.lqip}
                    alt={work.title}
                    quality={95}
                />
            </Link>
        </motion.div>
    )
}

export default Thumbnail
