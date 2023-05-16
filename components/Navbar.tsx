'use client';

import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Dialog from '@radix-ui/react-dialog';
import { ChangeEvent, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Link = ({ href, ...props }: { href: string; children: React.ReactNode }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <NextLink href={href} passHref legacyBehavior>
            <NavigationMenu.Link className='NavigationMenuLink' active={isActive}>
                {props.children}
            </NavigationMenu.Link>
        </NextLink>
    );
};
const searchIcon = (
    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='#161616' viewBox='0 0 256 256'>
        <path d='M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z'></path>
    </svg>
);
const closeIcon = (
    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='#161616' viewBox='0 0 256 256'>
        <path d='M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z'></path>
    </svg>
);
const shape = (
    <svg
        width='10'
        className='shape'
        height='10'
        viewBox='0 0 10 10'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path d='M5 0L9.33013 2.5V7.5L5 10L0.669873 7.5V2.5L5 0Z' fill='#FF0037' />
    </svg>
);
const Navbar = () => {
    const pathname = usePathname();

    const pages = [
        { name: 'Paintings', href: '/paintings' },
        { name: 'Works on Paper', href: '/works-on-paper' },
        { name: 'Sculpture', href: '/sculpture' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    const [searchOpen, setSearchOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [query, setQuery] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const res = await fetch(`/api/search?q=${query}`);
        const data = await res.json();
        console.log(data);
    };

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
    };
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
    };
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
    };

    return (
        <>
            <div className='nav-wrapper'>
                <div className='nav-inner'>
                    <NextLink href='/' className='branding'>
                        Ann Provan
                    </NextLink>
                    <NavigationMenu.Root>
                        <NavigationMenu.List className='nav-menu-list'>
                            {/* Loop through the pages */}
                            {pages.map((page) => (
                                <NavigationMenu.Item className='pages' key={page.name}>
                                    <Link href={page.href}>{page.name}</Link>
                                </NavigationMenu.Item>
                            ))}
                            <NavigationMenu.Item>
                                <button
                                    className='search'
                                    aria-label='search'
                                    onClick={() => setSearchOpen(true)}
                                >
                                    {searchIcon}
                                </button>
                            </NavigationMenu.Item>
                            <NavigationMenu.Item className='hamburger-wrapper'>
                                <button
                                    className='hamburger'
                                    aria-label='mobile menu'
                                    onClick={() => setMobileOpen(true)}
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='32'
                                        height='32'
                                        fill='#161616'
                                        viewBox='0 0 256 256'
                                    >
                                        <path d='M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z'></path>
                                    </svg>
                                </button>
                            </NavigationMenu.Item>
                        </NavigationMenu.List>
                    </NavigationMenu.Root>
                </div>
            </div>
            {/* SEARCH DIALOG */}
            <Dialog.Root open={searchOpen} onOpenChange={setSearchOpen}>
                <AnimatePresence>
                    {searchOpen && (
                        <Dialog.Portal forceMount>
                            <Dialog.Overlay asChild forceMount>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className='dialog-overlay'
                                />
                            </Dialog.Overlay>
                            <Dialog.Content aria-describedby={undefined} asChild forceMount>
                                <motion.div
                                    className='dialog-content search-dialog'
                                    variants={dialogAnimation}
                                    initial='hidden'
                                    animate='visible'
                                    exit='hidden'
                                >
                                    <div className='space-between' style={{ alignItems: 'start' }}>
                                        <Dialog.Title style={{ paddingRight: '1rem' }}>
                                            {query !== ''
                                                ? `Results for "${query}":`
                                                : `Search for a specific piece...`}
                                        </Dialog.Title>
                                        <Dialog.Close className='close'>{closeIcon}</Dialog.Close>
                                    </div>
                                    <span>84 Artworks</span>
                                    <form onSubmit={handleSubmit}>
                                        <div style={{ position: 'relative', marginTop: '.3rem' }}>
                                            <input
                                                type='text'
                                                name='search'
                                                id='search'
                                                placeholder='Search artwork...'
                                                autoComplete='off'
                                                autoFocus
                                                onChange={(e) => setQuery(e.target.value)}
                                                value={query}
                                            />
                                            <button type='submit' id='search-submit'>
                                                {searchIcon}
                                            </button>
                                        </div>
                                    </form>
                                </motion.div>
                            </Dialog.Content>
                        </Dialog.Portal>
                    )}
                </AnimatePresence>
            </Dialog.Root>
            {/* MOBILE NAV DIALOG */}
            <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
                <AnimatePresence>
                    {mobileOpen && (
                        <Dialog.Portal forceMount>
                            <Dialog.Content aria-describedby={undefined}>
                                <motion.div
                                    className='mobilenav-dialog'
                                    variants={mobileNavAnimation}
                                    initial='hidden'
                                    animate='visible'
                                    exit='hidden'
                                >
                                    <div className='container'>
                                        <motion.div className='space-between' variants={fadeIn}>
                                            <Dialog.Title style={{ fontSize: '1.25rem' }}>Menu</Dialog.Title>
                                            <Dialog.Close className='close'>{closeIcon}</Dialog.Close>
                                        </motion.div>
                                        <div className='mobilenav-list'>
                                            {pages.map((page) => (
                                                <motion.div
                                                    key={page.name}
                                                    className='mobilenav-item'
                                                    variants={fadeIn}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => setMobileOpen(false)}
                                                >
                                                    <NextLink href={page.href}>
                                                        {page.name}
                                                        {pathname === page.href && shape}
                                                    </NextLink>
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
        </>
    );
};

export default Navbar;
