'use client'

import Link from 'next/link'
import * as Dialog from '@radix-ui/react-dialog'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Works } from '@/types/HeaderItems'

interface Props {
    searchOpen: boolean
    setSearchOpen: (open: boolean) => void
    works: Works[]
}

const Search: React.FC<Props> = ({ searchOpen, setSearchOpen, works }) => {
    const [query, setQuery] = useState('')

    const searchIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#161616"
            viewBox="0 0 256 256"
        >
            <path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"></path>
        </svg>
    )
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
    const arrowIcon = (
        <svg
            width="19"
            height="21"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M16.0312 10.4277L2.96875 10.4277"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.3125 4.5625L2.96875 10.4281L8.3125 16.2937"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )

    const dialogAnimation = {
        visible: {
            x: '-50%',
            y: '-50%',
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: 'easeInOut',
            },
        },
        hidden: {
            x: '-50%',
            y: '-49%',
            scale: 0.95,
            opacity: 0,
        },
    }

    return (
        <Dialog.Root open={searchOpen} onOpenChange={setSearchOpen}>
            <AnimatePresence>
                {searchOpen && (
                    <Dialog.Portal forceMount>
                        <Dialog.Overlay asChild forceMount>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="dialog-overlay"
                            />
                        </Dialog.Overlay>
                        <Dialog.Content aria-describedby={undefined} asChild forceMount>
                            <motion.div
                                className="dialog-content search-dialog"
                                variants={dialogAnimation}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            >
                                <div className="search-header">
                                    <div
                                        className="space-between"
                                        style={{ alignItems: 'start' }}
                                    >
                                        <Dialog.Title style={{ paddingRight: '1rem' }}>
                                            {query !== ''
                                                ? `Results for "${query}":`
                                                : `Search for a specific piece...`}
                                        </Dialog.Title>
                                        <Dialog.Close className="close">
                                            {closeIcon}
                                        </Dialog.Close>
                                    </div>
                                    <span>{works.length} Artworks</span>
                                    <form>
                                        <div
                                            style={{
                                                position: 'relative',
                                                marginTop: '.3rem',
                                            }}
                                        >
                                            <input
                                                type="text"
                                                name="search"
                                                id="search"
                                                placeholder="Search artwork..."
                                                autoComplete="off"
                                                autoFocus
                                                onChange={(e) => setQuery(e.target.value)}
                                                value={query}
                                            />
                                            <div className="search-icon">
                                                {searchIcon}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <motion.div className="search-results">
                                    <AnimatePresence>
                                        {query !== '' &&
                                            works
                                                .filter((works) =>
                                                    works.title
                                                        .toLowerCase()
                                                        .includes(query.toLowerCase())
                                                )
                                                .map((work) => (
                                                    <motion.div
                                                        initial={{ height: 0 }}
                                                        animate={{ height: 'auto' }}
                                                        exit={{ height: 0 }}
                                                        key={work.slug.current}
                                                        className="search-item"
                                                    >
                                                        <Link
                                                            href={`/${work.category.slug.current}/${work.slug.current}`}
                                                            onClick={() =>
                                                                setSearchOpen(false)
                                                            }
                                                        >
                                                            <h3>{work.title}</h3>
                                                            <span>
                                                                {work.category.name}
                                                            </span>
                                                            {arrowIcon}
                                                        </Link>
                                                    </motion.div>
                                                ))}
                                    </AnimatePresence>
                                </motion.div>
                            </motion.div>
                        </Dialog.Content>
                    </Dialog.Portal>
                )}
            </AnimatePresence>
        </Dialog.Root>
    )
}

export default Search
