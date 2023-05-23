'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import * as Dialog from '@radix-ui/react-dialog'
import { motion, AnimatePresence } from 'framer-motion'
import { Category } from '@/types/HeaderItems'

interface Props {
    pages: Category[]
    mobileOpen: boolean
    setMobileOpen: (open: boolean) => void
}

const MobileNavbar: React.FC<Props> = ({
    pages,
    mobileOpen,
    setMobileOpen,
}) => {
    const pathname = usePathname()

    const mobileNavAnimation = {
        visible: {
            opacity: 1,
            clipPath: 'ellipse(100% 100% at 50% 50%)',
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.15,
                duration: 0.4,
                ease: 'easeInOut',
            },
        },
        hidden: {
            opacity: 0,
            clipPath: 'ellipse(50% 0% at 50% 0%)',
            transition: {
                when: 'afterChildren',
                delayChildren: 0,
                staggerChildren: 0.05,
                duration: 0.4,
                ease: 'easeInOut',
                delay: 0,
            },
        },
    }
    const fadeIn = {
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
    const closeIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#161616"
            viewBox="0 0 256 256"
        >
            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
        </svg>
    )
    const shape = (
        <svg
            width="10"
            className="shape"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5 0L9.33013 2.5V7.5L5 10L0.669873 7.5V2.5L5 0Z"
                fill="#FF0037"
            />
        </svg>
    )

    return (
        <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
            <AnimatePresence>
                {mobileOpen && (
                    <Dialog.Portal forceMount>
                        <Dialog.Content aria-describedby={undefined}>
                            <motion.div
                                className="mobilenav-dialog"
                                variants={mobileNavAnimation}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            >
                                <div className="container">
                                    <motion.div
                                        className="space-between"
                                        variants={fadeIn}
                                    >
                                        <Dialog.Title
                                            style={{ fontSize: '1.25rem' }}
                                        >
                                            Menu
                                        </Dialog.Title>
                                        <Dialog.Close className="close">
                                            {closeIcon}
                                        </Dialog.Close>
                                    </motion.div>
                                    <div className="mobilenav-list">
                                        {pages.map((page: Category) => (
                                            <motion.div
                                                key={page.name}
                                                className="mobilenav-item"
                                                variants={fadeIn}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() =>
                                                    setMobileOpen(false)
                                                }
                                            >
                                                <Link
                                                    href={`/${page.slug.current}`}
                                                >
                                                    {page.name}
                                                    {pathname ===
                                                        `/${page.slug.current}` &&
                                                        shape}
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </Dialog.Content>
                    </Dialog.Portal>
                )}
            </AnimatePresence>
        </Dialog.Root>
    )
}

export default MobileNavbar
