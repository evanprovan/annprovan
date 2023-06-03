'use client'
import { motion } from 'framer-motion'
import Thumbnail from './Thumbnail'

const Gallery = ({ works }: any) => {
    const fadeinchildren = {
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
                <Thumbnail work={work} />
            ))}
        </motion.div>
    )
}

export default Gallery
