'use client'
import { motion, Variants } from 'framer-motion'

type Props = {
    children: React.ReactNode
}

const AnimatedTitle: React.FC<Props> = ({ children }) => {
    const fadein: Variants = {
        visible: {
            color: 'rgb(22, 22, 22)',
            opacity: 1,
            transition: {
                duration: 0.75,
                ease: 'easeInOut',
            },
        },
        hidden: {
            color: '#ff0037',
            opacity: 0,
            transition: {
                ease: 'easeInOut',
            },
        },
    }

    return (
        <motion.h1
            className="title"
            variants={fadein}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: true }}
        >
            {children}
        </motion.h1>
    )
}

export default AnimatedTitle
