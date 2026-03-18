'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import Search from './Search'
import MobileNavbar from './MobileNavbar'
import { HeaderItems, Category } from '@/types/HeaderItems'

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

const Navbar = ({ category, works }: HeaderItems) => {

    const pathname = usePathname()

    const otherPages: Array<Category> = [
        {
            name: 'About',
            slug: {
                current: 'about',
            },
        },
        {
            name: 'Contact',
            slug: {
                current: 'contact',
            },
        },
    ]
    const pages = [...category, ...otherPages]

    const [searchOpen, setSearchOpen] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <>
            <div className="nav-wrapper">
                <div className="nav-inner">
                    <Link href="/" className="branding">
                        Ann Provan
                    </Link>
                    <div className="nav-menu-list">
                        {/* Loop through the pages */}
                        {pages.map((category) => (
                            <div
                                className="pages"
                                key={category.name}
                            >
                                <Link href={`/${category.slug.current}`} className={pathname === `/${category.slug.current}` ? 'active' : ''}>
                                    {category.name}
                                </Link>
                            </div>
                        ))}
                        <div className="search-wrapper">
                            <button
                                className="search"
                                aria-label="search"
                                onClick={() => setSearchOpen(true)}
                            >
                                {searchIcon}
                            </button>
                        </div>
                        <div className="hamburger-wrapper">
                            <button
                                className="hamburger"
                                aria-label="mobile menu"
                                onClick={() => setMobileOpen(true)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    fill="#161616"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* SEARCH DIALOG */}
            <Search searchOpen={searchOpen} setSearchOpen={setSearchOpen} works={works} />
            {/* MOBILE NAV DIALOG */}
            <MobileNavbar
                pages={pages}
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
            />
        </>
    )
}

export default Navbar
