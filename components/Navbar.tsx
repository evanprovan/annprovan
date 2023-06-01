'use client'

import { usePathname } from 'next/navigation'
import NextLink from 'next/link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { useState } from 'react'
import Search from './Search'
import MobileNavbar from './MobileNavbar'
import { HeaderItems, Category } from '@/types/HeaderItems'

const Link = ({ href, ...props }: { href: string; children: React.ReactNode }) => {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <NextLink href={href} passHref legacyBehavior>
            <NavigationMenu.Link className="NavigationMenuLink" active={isActive}>
                {props.children}
            </NavigationMenu.Link>
        </NextLink>
    )
}
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
                    <NextLink href="/" className="branding">
                        Ann Provan
                    </NextLink>
                    <NavigationMenu.Root>
                        <NavigationMenu.List className="nav-menu-list">
                            {/* Loop through the pages */}
                            {pages.map((category) => (
                                <NavigationMenu.Item
                                    className="pages"
                                    key={category.name}
                                >
                                    <Link href={`/${category.slug.current}`}>
                                        {category.name}
                                    </Link>
                                </NavigationMenu.Item>
                            ))}
                            <NavigationMenu.Item>
                                <button
                                    className="search"
                                    aria-label="search"
                                    onClick={() => setSearchOpen(true)}
                                >
                                    {searchIcon}
                                </button>
                            </NavigationMenu.Item>
                            <NavigationMenu.Item className="hamburger-wrapper">
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
                            </NavigationMenu.Item>
                        </NavigationMenu.List>
                    </NavigationMenu.Root>
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
