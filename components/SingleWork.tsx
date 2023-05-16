'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/sanity-utils';
import Fancybox from './Fancybox';
import Carousel from './Carousel';

const SingleWork = ({ work }: any) => {
    const fadeinmedia = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
        hidden: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 0.2,
            },
        },
    };
    const fadeinchildren = {
        visible: {
            transition: {
                duration: 0.4,
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
        hidden: {
            transition: {
                duration: 0.2,
                delayChildren: 0,
                staggerChildren: 0.2,
            },
        },
    };
    const fadeininfo = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
            },
        },
        hidden: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 0.2,
            },
        },
    };
    const fadeintitle = {
        visible: {
            clipPath: 'polygon(0 0, 100% 0, 100% 120%, 0% 120%)',
            transition: {
                duration: 0.5,
            },
        },
        hidden: {
            clipPath: 'polygon(0 0, 0% 0, 0% 120%, 0% 120%)',
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <div className='single-work'>
            <div className='media-wrapper'>
                <Link className='back' href={`/${work.category.slug.current}`}>
                    <svg
                        width='19'
                        height='21'
                        viewBox='0 0 19 21'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M16.0312 10.4277L2.96875 10.4277'
                            stroke='black'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path
                            d='M8.3125 4.5625L2.96875 10.4281L8.3125 16.2937'
                            stroke='black'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                    Back to <strong>{work.category.name}</strong>
                </Link>
                <motion.div
                    className='media'
                    variants={fadeinmedia}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                >
                    <Fancybox
                        options={{
                            Carousel: {
                                infinite: false,
                            },
                            Toolbar: {
                                display: {
                                    left: ['infobar'],
                                    middle: ['zoomIn', 'zoomOut', 'fullscreen', 'download'],
                                    right: [, 'thumbs', 'close'],
                                },
                            },
                        }}
                    >
                        <Carousel>
                            {work.media.map((media: any) => (
                                <Image
                                    key={media.asset._id}
                                    className={work.media.length > 1 ? 'f-carousel__slide' : ''}
                                    style={{ aspectRatio: media.asset.metadata.dimensions.aspectRatio }}
                                    src={urlFor(media.asset._id).width(1500).url()}
                                    placeholder='blur'
                                    blurDataURL={media.asset.metadata.lqip}
                                    alt={work.title}
                                    width={1500}
                                    height={1500 / media.asset.metadata.dimensions.aspectRatio}
                                    data-fancybox='gallery'
                                    data-src={urlFor(media.asset._id).url()}
                                />
                            ))}
                        </Carousel>
                    </Fancybox>
                </motion.div>
            </div>
            <motion.h1
                className='work-title'
                variants={fadeintitle}
                initial='hidden'
                whileInView='visible'
                exit='hidden'
                viewport={{ once: true }}
            >
                {work.title}
            </motion.h1>
            <motion.div
                className='info'
                variants={fadeinchildren}
                initial='hidden'
                whileInView='visible'
                exit='hidden'
                viewport={{ once: true }}
            >
                <motion.div className='year' variants={fadeininfo}>
                    <span>Year</span>
                    <h2>{work.year}</h2>
                </motion.div>
                <motion.div className='medium' variants={fadeininfo}>
                    <span>Medium</span>
                    <h2>
                        {work.materials.map((material: any, index: number) => (
                            <span key={material.name}>
                                {index !== work.materials.length - 1 ? material.name + ', ' : material.name}
                            </span>
                        ))}
                    </h2>
                </motion.div>
                <motion.div className='dimensions' variants={fadeininfo}>
                    <span>Dimensions</span>
                    {work.depth !== null ? (
                        <h2>{`${work.height}" x ${work.width}" x ${work.depth}"`}</h2>
                    ) : (
                        <h2>{`${work.height}" x ${work.width}"`}</h2>
                    )}
                </motion.div>
                {work.description !== null && (
                    <motion.div className='description' variants={fadeininfo}>
                        <p>{work.description}</p>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default SingleWork;
