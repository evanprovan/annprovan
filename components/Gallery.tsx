'use client'
import { motion, Variants } from 'framer-motion'
import Thumbnail from './Thumbnail'

const Gallery = ({ works }: any) => {
    const fadeinchildren: Variants = {
        visible: {
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.075,
            },
        },
        hidden: {
            transition: {
                duration: 0.2,
                delayChildren: 0,
                staggerChildren: 0.2,
            },
        },
    }

    return (
        <motion.div
            className="gallery"
            variants={fadeinchildren}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            {works.map((work: any) => (
                <Thumbnail work={work} key={work.slug.current} />
            ))}
        </motion.div>
    )
}

export default Gallery
