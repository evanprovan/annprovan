'use client'
import { motion } from 'framer-motion'
import { Exhibitions } from '@/types/About'
import { About } from '@/types/About'

type Props = {
    about: {
        about: About
        exhibitions: Exhibitions[]
    }
}

const About = ({ about }: Props) => {
    const fadeInChildren = {
        visible: {
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.3,
            },
        },
        hidden: {
            transition: {
                duration: 0.2,
                delayChildren: 0,
                staggerChildren: 0.1,
            },
        },
    }
    const fadeIn = {
        visible: {
            opacity: 1,
            color: 'rgb(22, 22, 22)',
            transition: {
                duration: 1,
            },
        },
        hidden: {
            opacity: 0,
            color: '#ff0037',
            transition: {
                duration: 0.4,
            },
        },
    }

    return (
        <motion.div
            className="about"
            variants={fadeInChildren}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <motion.div variants={fadeIn}>
                <h2>Artist Statement</h2>
                <p>{about.about.artiststatement}</p>
            </motion.div>
            <motion.div variants={fadeIn}>
                <h2>Bio</h2>
                <p>{about.about.bio}</p>
            </motion.div>

            <motion.div variants={fadeIn}>
                <h2>Exhibitions</h2>
                <div className="exhibitions">
                    {about.exhibitions.map((exhibition: Exhibitions) => (
                        <p key={exhibition.title}>
                            <span className="exhibition-year">{exhibition.year}</span>
                            {`"${exhibition.title}" ${exhibition.institution}, ${exhibition.location}`}
                        </p>
                    ))}
                </div>
            </motion.div>

            <motion.div variants={fadeIn}>
                <h2>Education</h2>
                {about.about.education.map((degree: string) => (
                    <p key={degree}>{degree}</p>
                ))}
            </motion.div>
            <motion.div variants={fadeIn}>
                <h2>Awards & Grants</h2>
                <pre>{about.about.awardsgrants}</pre>
            </motion.div>
            <motion.div variants={fadeIn}>
                <h2>Collections</h2>
                <pre>{about.about.collections}</pre>
            </motion.div>
            <motion.div variants={fadeIn}>
                <h2>Bibliography</h2>
                <pre>{about.about.bibliography}</pre>
            </motion.div>
        </motion.div>
    )
}

export default About
